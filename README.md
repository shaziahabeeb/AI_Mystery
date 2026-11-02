# Casefile — AI Mystery Room

An interactive fictional investigation room built from the requirements in `spec.md`. Users provide a scenario, inspect suspects and evidence, review the timeline, keep local field notes, and submit one accusation to reveal the solution.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env` and add a Gemini API key. Configure `MONGO_URI` to persist cases across server restarts; without MongoDB, the server keeps cases in memory and the browser keeps the user's case files locally.
4. Run `npm run dev` and open `http://localhost:5173`.

Without a Gemini key, the generator creates a fictional Bellwether Observatory sample investigation using the requested suspect count. With Gemini configured, it requests structured JSON and validates its shape and references before returning the case. The solution is kept out of the public case response and returned only by the accusation endpoint.

## Stack

- React, Vite, React Router, Axios, Framer Motion, Lucide icons
- Express, Zod, Mongoose
- Google Gemini API for structured mystery generation
- Browser local storage for the desk, session notes, and fallback convenience

Media generation is not configured in this MVP. Image and CCTV evidence is presented as text evidence, consistent with the text-only provider fallback in the spec.

## API

- `GET /api/health` — server and MongoDB status
- `POST /api/cases` — generate and store a case
- `GET /api/cases/:id` — fetch public case details
- `POST /api/cases/:id/accusation` — validate and submit one accusation, then reveal the solution

All cases and people are fictional. The application is an entertainment product, not a source of factual allegations.
