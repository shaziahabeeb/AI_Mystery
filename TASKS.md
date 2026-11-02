# Implementation checklist

## Phase 1: Project setup
- [x] Create Vite React client and Express API scaffold.
- [x] Add environment template and ignore secrets/build artifacts.
- [x] Add MongoDB model and optional connection.

## Phase 2: Frontend UI
- [x] Landing page and responsive navigation.
- [x] Scenario intake form with optional settings and validation.
- [x] Investigation room with overview, suspects, evidence, timeline, and notes.
- [x] Accusation and solution reveal flow.

## Phase 3: AI integration
- [x] Gemini structured JSON generation adapter.
- [x] Validate generated schema and suspect/evidence references.
- [x] Fictional sample fallback when no provider key is configured.

## Phase 4: Database integration
- [x] Mongoose case schema with private solution field.
- [x] Persist cases when MongoDB is configured.
- [x] In-memory fallback for local development.

## Phase 5: Connect frontend and backend
- [x] REST endpoints for creation, retrieval, and accusation.
- [x] Connect UI with Axios and proxy API requests through Vite.
- [x] Save desk listing and investigation notes in local storage.

## Phase 6: AI media integration
- [ ] Optional image/video providers and persistent media storage.
- [x] Text evidence fallback works without media providers.

## Phase 7: Testing and refinement
- [ ] Add frontend, API, and AI consistency test suites.
- [ ] Add async generation jobs, polling, retry/repair, and rate limiting.
- [ ] Add authentication and per-user private case access.
- [ ] Run production build and end-to-end user flow verification.
