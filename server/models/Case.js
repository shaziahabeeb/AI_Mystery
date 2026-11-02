import mongoose from 'mongoose';

const CaseSchema = new mongoose.Schema({
  title: String, category: String, difficulty: String, summary: String, scenario: String,
  incidentDescription: String, location: String, incidentAt: Date, objective: String,
  suspects: { type: [mongoose.Schema.Types.Mixed], required: true },
  evidence: { type: [mongoose.Schema.Types.Mixed], required: true },
  timeline: { type: [mongoose.Schema.Types.Mixed], required: true },
  solution: { type: mongoose.Schema.Types.Mixed, required: true, select: false },
  accusation: { type: mongoose.Schema.Types.Mixed, default: null }
}, { timestamps: true });

export const Case = mongoose.models.Case || mongoose.model('Case', CaseSchema);
