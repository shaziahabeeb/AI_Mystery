import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { z } from 'zod';
import { Case } from './models/Case.js';
import { generateMystery } from './services/generator.js';

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '64kb' }));
const port = process.env.PORT || 5000;
const localCases = new Map();

app.get('/api/health', (_req, res) => res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'local fallback' }));

const createSchema = z.object({ scenario: z.string().trim().min(20).max(2000), difficulty: z.enum(['Easy','Medium','Hard']).default('Medium'), theme: z.string().max(50).default('Custom'), suspectCount: z.number().int().min(3).max(5).default(4), evidenceIntensity: z.enum(['Low','Medium','High']).default('Medium') });
app.post('/api/cases', async (req, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: parsed.error.issues[0]?.message || 'Invalid case details.' });
  try {
    const generated = await generateMystery(parsed.data);
    let saved;
    if (mongoose.connection.readyState === 1) saved = await Case.create({ ...generated, scenario: parsed.data.scenario });
    else localCases.set(generated.id, { ...generated, scenario: parsed.data.scenario, accusation: null });
    const result = saved ? saved.toObject() : generated;
    res.status(201).json(publicCase(result));
  } catch (err) {
    console.error('Case generation failed:', err.message, err.cause?.code || '');
    const message = err.code === 'GEMINI_NETWORK_ERROR'
      ? 'Could not connect to Gemini. Check your internet connection, VPN, or firewall, then try again.'
      : err.code === 'GEMINI_TIMEOUT_ERROR'
        ? 'Gemini took too long to respond. Please try again.'
      : 'The investigation could not be generated right now. Please try again.';
    res.status(502).json({ message });
  }
});

app.get('/api/cases/:id', async (req, res) => {
  if (mongoose.connection.readyState !== 1) { const c = localCases.get(req.params.id); return c ? res.json(publicCase(c)) : res.status(404).json({ message: 'Case not found.' }); }
  try { const c = await Case.findById(req.params.id); if (!c) return res.status(404).json({ message: 'Case not found.' }); res.json(publicCase(c.toObject())); }
  catch { res.status(404).json({ message: 'Case not found.' }); }
});

app.post('/api/cases/:id/accusation', async (req, res) => {
  const parsed = z.object({ suspectId: z.string().min(1).max(80) }).safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: 'Choose a valid suspect.' });
  try {
    const c = mongoose.connection.readyState === 1 ? await Case.findById(req.params.id).select('+solution') : localCases.get(req.params.id);
    if (!c) return res.status(404).json({ message: 'Case not found.' });
    if (!c.suspects.some(s => s.id === parsed.data.suspectId)) return res.status(400).json({ message: 'That suspect is not part of this case.' });
    if (c.accusation) return res.status(409).json({ message: 'An accusation has already been filed.' });
    c.accusation = { suspectId: parsed.data.suspectId, submittedAt: new Date() }; if (mongoose.connection.readyState === 1) await c.save(); else localCases.set(req.params.id, c);
    res.json({ suspectId: parsed.data.suspectId, culpritId: c.solution.culpritId, correct: parsed.data.suspectId === c.solution.culpritId, solution: c.solution });
  } catch { res.status(404).json({ message: 'Case not found.' }); }
});

function publicCase(c) { const { solution, _id, __v, ...pub } = c; return { ...pub, id: c.id || String(_id || c.id), solution: undefined }; }
if (process.env.MONGO_URI) mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected')).catch(err => console.warn('MongoDB unavailable; new cases remain in browser storage:', err.message));
app.listen(port, () => console.log(`Casefile API listening on ${port}`));
