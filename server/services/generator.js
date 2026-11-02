import { z } from 'zod';

const mysterySchema = z.object({ title: z.string(), category: z.string(), summary: z.string(), incidentDescription: z.string(), location: z.string(), incidentAt: z.string(), objective: z.string(), suspects: z.array(z.object({ id: z.string(), name: z.string(), age: z.number(), role: z.string(), bio: z.string(), relationship: z.string(), motive: z.string(), alibi: z.string(), suspicion: z.number().min(0).max(100) })).min(3).max(5), evidence: z.array(z.object({ id: z.string(), type: z.enum(['document','message','image','cctv','statement','log']), title: z.string(), description: z.string(), content: z.string(), at: z.string().optional(), suspects: z.array(z.string()), importance: z.enum(['low','medium','high']), clue: z.boolean(), misleading: z.boolean() })).min(3), timeline: z.array(z.object({ at: z.string(), title: z.string(), description: z.string() })).min(3), solution: z.object({ culpritId: z.string(), motive: z.string(), method: z.string(), explanation: z.string(), sequence: z.array(z.string()), keyEvidence: z.array(z.string()) }) });

export async function generateMystery(options) {
  if (!process.env.GEMINI_API_KEY) {
    const { sample } = await import('./sample.js');
    return { ...structuredClone(sample), id: `local-${Date.now()}`, category: options.theme === 'Custom' ? sample.category : options.theme.toUpperCase(), difficulty: options.difficulty, suspects: sample.suspects.slice(0, options.suspectCount), scenario: options.scenario, source: 'sample' };
  }
  const prompt = `Create an original, solvable, explicitly fictional mystery investigation as valid JSON only. User scenario: ${options.scenario}\nSettings: difficulty=${options.difficulty}; theme=${options.theme}; exactly ${options.suspectCount} suspects; evidence volume=${options.evidenceIntensity}.\nFirst decide one culprit and complete solution. Then design evidence around that fixed solution. Keep solution private from public summaries. All evidence must logically agree with the solution and timeline; at least three evidence items should jointly establish the culprit. Avoid real people, real allegations, or private data. Follow this JSON schema exactly: {title,category,summary,incidentDescription,location,incidentAt ISO string,objective,suspects:[{id,name,age number,role,bio,relationship,motive,alibi,suspicion number 0-100}],evidence:[{id,type document|message|image|cctv|statement|log,title,description,content,at ISO string,suspects:[suspect ids],importance low|medium|high,clue boolean,misleading boolean}],timeline:[{at ISO string,title,description}],solution:{culpritId,motive,method,explanation,sequence:[strings],keyEvidence:[evidence ids]}}`;
  const model = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const request = { method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(60_000), body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0.85 } }) };
  let response;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      response = await fetch(url, request);
    } catch (cause) {
      if (cause.name === 'TimeoutError') {
        const error = new Error('Gemini took too long to respond.');
        error.code = 'GEMINI_TIMEOUT_ERROR';
        error.cause = cause;
        throw error;
      }
      if (attempt === 2) {
        const error = new Error('Unable to connect to the Gemini API.');
        error.code = 'GEMINI_NETWORK_ERROR';
        error.cause = cause;
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * (2 ** attempt) + Math.random() * 300));
      continue;
    }
    if (response.ok || ![429, 500, 502, 503, 504].includes(response.status) || attempt === 2) break;
    await new Promise(resolve => setTimeout(resolve, 1000 * (2 ** attempt) + Math.random() * 300));
  }
  if (!response.ok) throw new Error(`Gemini returned ${response.status}`);
  const payload = await response.json();
  const text = payload.candidates?.[0]?.content?.parts?.map(p => p.text).join('');
  if (!text) throw new Error('Gemini returned no content');
  const parsed = mysterySchema.parse(JSON.parse(text));
  if (!parsed.suspects.some(s => s.id === parsed.solution.culpritId)) throw new Error('Solution references unknown suspect');
  if (parsed.evidence.some(e => e.suspects.some(id => !parsed.suspects.some(s => s.id === id)))) throw new Error('Evidence references unknown suspect');
  if (parsed.solution.keyEvidence.some(id => !parsed.evidence.some(e => e.id === id))) throw new Error('Solution references unknown evidence');
  return { ...parsed, id: `local-${Date.now()}`, difficulty: options.difficulty, source: 'gemini' };
}
