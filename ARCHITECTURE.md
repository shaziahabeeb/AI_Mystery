# Architecture

## Implemented design

The project is a single Vite/React client and Express API. Vite proxies `/api` requests to the local API during development. The React app owns navigation and the investigation UI. Browser local storage keeps the case desk listing and private notes available to the current browser.

The API validates creation and accusation payloads with Zod. `server/services/generator.js` is the provider boundary: it returns a fictional sample case when `GEMINI_API_KEY` is absent, or requests structured JSON from Gemini when configured. It validates the generated structure and checks that culprit, suspect, and evidence references exist. `server/models/Case.js` stores cases in MongoDB when configured. If MongoDB is unavailable, new cases remain in process memory until the API restarts.

The case response strips the private solution. The accusation API validates that the suspect belongs to the case, prevents duplicate submissions, and returns the solution after a valid accusation. MongoDB's solution field is excluded from normal queries.

## Current limitations

- Authentication and per-user access control are not implemented; MongoDB-backed cases are accessible by case ID.
- The browser's home desk and notes use local storage; case data from an in-memory API is lost if the server restarts.
- Media providers, uploads, generated images, and real video are not implemented. Evidence is shown in text form, including CCTV-style descriptions.
- Generation runs as a normal API request rather than a background job with polling. A production deployment should add a job queue/status store and rate limiting.
- Gemini output is schema checked and reference checked, but full semantic consistency validation and repair/retry are future work.
- No automated tests have been added yet.
