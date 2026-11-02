# Casefile — AI Mystery Room

An interactive fictional investigation room. Users provide a scenario, inspect suspects and evidence, review the timeline, keep local field notes, and submit one accusation to reveal the solution.

## Deploy to Render

This repository includes a `render.yaml` blueprint. Render builds the Vite client and runs the Express server, which serves both the app and API from the same web service.

1. Push this project to a GitHub repository. Do not commit `.env`; it is ignored by Git. Keep API keys out of source files.
2. Create a [Render](https://render.com/) account and connect the GitHub repository.
3. In Render, choose **New → Blueprint**, select the repository, and let it read `render.yaml`.
4. Add `GEMINI_API_KEY` in the service's Environment settings if you want AI-generated mysteries. Leave it unset to use the built-in sample mystery generator.
5. For cases to persist across server restarts and deploys, create a MongoDB database (for example, MongoDB Atlas), allow the Render service to connect, and set `MONGO_URI` to its connection string in the Render service's Environment settings. Without it, cases live only in the running server's memory; they are lost when that process restarts.
6. Deploy the service. Render runs `npm ci && npm run build`, then `npm start`. Open the generated `onrender.com` URL and check that `/api/health` returns JSON with `status: "ok"`.

The service uses Render's `PORT` automatically. The frontend calls `/api` on its own origin, so no client URL or CORS setting is needed. The included free plan may spin down when idle; the first request afterward can take a little longer.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm ci`.
3. Copy `.env.example` to `.env` and fill in `GEMINI_API_KEY` and, optionally, `MONGO_URI`.
4. Run `npm run dev` and open `http://localhost:5173`.

For a production-mode local check, run `npm run build` and then `npm start`; open `http://localhost:5000`.

## Stack

- React, Vite, React Router, Axios, Framer Motion, Lucide icons
- Express, Zod, Mongoose
- Google Gemini API for structured mystery generation
- Browser local storage for the desk, session notes, and fallback convenience

Media generation is not configured in this MVP. Image and CCTV evidence is presented as text evidence.

## API

- `GET /api/health` — server and MongoDB status
- `POST /api/cases` — generate and store a case
- `GET /api/cases/:id` — fetch public case details
- `POST /api/cases/:id/accusation` — validate and submit one accusation, then reveal the solution

All cases and people are fictional. The application is an entertainment product, not a source of factual allegations.
