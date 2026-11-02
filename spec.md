# AI MYSTERY ROOM
## Product Requirements Document (PRD), Software Requirements Specification (SRS) & Technical Specification

**Document Version:** 1.0  
**Project Name:** AI Mystery Room  
**Project Type:** AI-powered interactive mystery investigation web application  
**Development Approach:** Spec-Driven Development  
**Frontend:** React.js  
**Backend:** Node.js + Express.js  
**Database:** MongoDB  
**AI Integration:** Google Gemini API  
**Primary Development Tool:** OpenAI Codex  

---

# 1. PROJECT OVERVIEW

## 1.1 Introduction

AI Mystery Room is an AI-powered interactive mystery investigation platform where users can create and solve unique mystery cases based on their own story ideas or scenarios.

The user provides a short scenario, situation, or story prompt. Based on this input, the AI generates a complete fictional investigation containing:

- A mystery or crime scenario.
- A set of suspects.
- One actual culprit.
- Motives and possible reasons behind the incident.
- AI-generated evidence and clues.
- Contradictory statements and misleading information.
- A final solution with a logical explanation.

The user takes the role of an investigator and must examine all the available evidence, connect different clues, identify inconsistencies, and ultimately select the person they believe is responsible.

The mystery should feel like an actual investigation rather than a simple question-and-answer quiz.

## 1.2 Core Concept

**Give the AI a story. Get a mystery. Investigate the evidence. Find the culprit.**

Example:

A user enters:

"Four college students were working on a final-year project. One night, their project source code disappeared from the laboratory computer. Only three people had access to the lab that evening."

The AI generates a fictional investigation containing:

1. Three or four suspects.
2. A detailed description of the incident.
3. WhatsApp-style conversations between suspects.
4. CCTV footage descriptions or generated video evidence.
5. Images from the crime scene.
6. Computer access logs.
7. Witness statements.
8. A timeline of events.
9. Hidden clues and contradictions.

The user investigates the case and selects the suspected culprit.

After submission, the application reveals the actual culprit and explains how the evidence establishes their involvement.

## 1.3 Main Objectives

1. Create an engaging AI-powered mystery-solving experience.
2. Generate unique investigation scenarios from user-provided prompts.
3. Generate interconnected evidence using AI.
4. Encourage logical reasoning, critical thinking and deduction.
5. Make each investigation feel realistic and immersive.
6. Provide a complete explanation after the user submits their answer.
7. Allow users to experience different mysteries without manually writing investigation content.

---

# 2. TARGET USERS

The application is designed for:

- Students interested in puzzles and mystery solving.
- People who enjoy detective stories and crime investigations.
- Casual gamers looking for interactive experiences.
- Users interested in AI-generated content.
- Groups of friends who want to solve mysteries together.

The initial version will primarily support individual users.

---

# 3. TECHNOLOGY STACK

## 3.1 Frontend

| Technology | Purpose |
|---|---|
| React.js | Frontend application |
| Vite | Development server and build tool |
| React Router | Navigation and routing |
| Tailwind CSS | Styling and responsive layouts |
| Axios | API communication |
| Lucide React | Icons |
| React Context API | Global application state |
| Framer Motion | UI animations and transitions |

## 3.2 Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB | Database |
| Mongoose | MongoDB object modelling |
| Gemini API | Mystery and evidence generation |
| JWT | Authentication, if authentication is enabled |
| Multer | File upload handling, if required |
| Zod | Request and AI output validation |

## 3.3 AI Integration

**Primary AI provider: Google Gemini API**

Gemini will be responsible for:

- Understanding user-provided scenarios.
- Creating mystery narratives.
- Generating suspects and character profiles.
- Deciding the actual culprit.
- Creating evidence and clues.
- Generating witness statements.
- Creating interconnected timelines.
- Generating misleading clues.
- Explaining the final solution.

For generated visual and video evidence, use separate media-generation provider adapters.

Important implementation distinction:

- Gemini text generation handles the mystery and structured investigation data.
- An image-generation model/provider handles generated photographs and visual evidence.
- A video-generation provider handles actual CCTV-style video clips, if supported and configured.
- If video generation is unavailable, use a CCTV-style sequence of generated images with timestamps and descriptions.

Do not assume that the text-generation Gemini model automatically supports video generation.

The application must remain functional even when a media-generation provider is unavailable.

---

# 4. APPLICATION SCOPE

## 4.1 MVP Features (Mandatory)

The first working version must include:

1. Landing page.
2. Create Mystery page.
3. Scenario input.
4. AI mystery generation.
5. Suspect generation.
6. Evidence generation.
7. Investigation dashboard.
8. Evidence viewer.
9. Suspect profiles.
10. Investigation timeline.
11. Culprit selection.
12. Final result and solution explanation.
13. MongoDB persistence.
14. Responsive design.
15. Error and loading states.

## 4.2 Future Features (Not Required in MVP)

These features should not delay the initial implementation.

- Multiplayer investigations.
- Real-time collaborative investigations.
- Leaderboards.
- Daily mystery challenges.
- Mystery difficulty levels.
- User profiles and achievements.
- Community-created mysteries.
- Custom mystery sharing.
- Voice-based interrogation.
- AI chatbot for questioning suspects.
- Advanced generated CCTV videos.
- Multiple endings.

The architecture should make these features possible without requiring a complete rewrite.

---

# 5. USER FLOW

The main application flow must follow this sequence:

**Step 1: Landing Page**

The user visits the website and sees the introduction to AI Mystery Room.

The main CTA is "Create a Mystery".

**Step 2: Create Mystery**

The user enters a scenario or story prompt.

Example:

"A valuable diamond disappeared from a hotel room. Three employees had access to the room."

The user can also select optional settings such as difficulty and investigation theme.

**Step 3: AI Processing**

The backend sends the scenario to Gemini.

Gemini generates a complete investigation with:

- Mystery description.
- Suspects.
- Actual culprit.
- Motives.
- Timeline.
- Evidence.
- Hidden clues.
- Final explanation.

The backend validates the response and stores the case.

**Step 4: Investigation Begins**

The user is redirected to the investigation dashboard.

The user sees:

- Case title.
- Case description.
- Incident details.
- Suspect list.
- Available evidence.
- Investigation progress.

**Step 5: Examine Evidence**

The user can open different evidence categories.

Examples:

- Messages.
- Images.
- CCTV.
- Documents.
- Witness statements.
- Access logs.

The user should be able to inspect evidence individually.

**Step 6: Select Culprit**

Once the user believes they have solved the mystery, they click "Submit Accusation".

They select one suspect from the available suspects.

**Step 7: Reveal Solution**

The application reveals:

- Whether the accusation was correct.
- The actual culprit.
- Their motive.
- How the incident happened.
- The important clues.
- How each piece of evidence connects.
- Why other suspects were innocent.

The user can then create another mystery.

---

# 6. FUNCTIONAL REQUIREMENTS

## 6.1 Landing Page

The landing page must contain:

**Header**
- Application logo/name.
- Home.
- How It Works.
- Create Mystery.
- Optional About section.

**Hero Section**

Main heading:

"Every Mystery Has a Story. Every Story Has a Secret."

Supporting description:

"Create your own mystery, investigate AI-generated evidence, uncover hidden clues and discover who is really behind it."

Primary CTA: Create a Mystery.

Secondary CTA: How It Works.

**How It Works Section**

Display three steps:

1. Create your story.
2. Investigate the evidence.
3. Find the culprit.

**Additional Sections**
- Features of the application.
- Example investigation preview.
- Footer.

The landing page should have an immersive detective/investigation theme.

## 6.2 Create Mystery Page

The page must contain a scenario input area.

Required input:

- Scenario description.

Optional inputs:

- Difficulty: Easy, Medium, Hard.
- Theme: Crime, Theft, Disappearance, College Mystery, Corporate Mystery, Cybercrime, Custom.
- Number of suspects: 3–5.
- Evidence intensity: Low, Medium, High.

Default values:

- Difficulty: Medium.
- Theme: Custom.
- Number of suspects: 4.
- Evidence intensity: Medium.

Validation:

- Scenario must not be empty.
- Scenario should have a reasonable minimum length.
- Maximum scenario length: 2,000 characters.
- User must receive an appropriate validation message for invalid input.

CTA: Generate Mystery.

During generation, show an engaging loading screen with rotating messages:

- "Building the crime scene..."
- "Identifying potential suspects..."
- "Generating digital evidence..."
- "Connecting hidden clues..."
- "Preparing your investigation..."

Do not display a fake loading sequence if the generation process has already completed.

## 6.3 Mystery Generation Engine

This is the most important component of the application.

The backend must use Gemini to generate the complete mystery.

The generation engine must produce structured JSON, not an unstructured paragraph.

The generated investigation must contain the following:

### A. Case Details

- Unique case ID.
- Case title.
- Case category.
- Difficulty.
- Case summary.
- Detailed incident description.
- Incident location.
- Incident date and time.
- Investigation objective.

### B. Suspects

Generate between 3 and 5 suspects.

Each suspect must have:

- Unique suspect ID.
- Full name.
- Age.
- Occupation or role.
- Short biography.
- Relationship with the incident/victim.
- Possible motive.
- Stated alibi.
- Personality description.
- Suspicion level.

Every suspect must have a believable reason for being considered suspicious.

Only one suspect should be the actual culprit in the MVP.

### C. Culprit Information

The generated case must have exactly one actual culprit.

Store the following information securely:

- Culprit suspect ID.
- Actual motive.
- Method used.
- Detailed explanation.
- Sequence of events.
- Important evidence establishing guilt.

**Critical rule:** The actual culprit must be decided before evidence generation.

Evidence must be created around the already-established solution.

The AI must not randomly generate evidence first and decide the culprit afterward.

### D. Evidence

Generate a collection of evidence items.

Each evidence item must contain:

- Evidence ID.
- Evidence type.
- Evidence title.
- Short description.
- Detailed content.
- Timestamp, if applicable.
- Related suspect IDs.
- Importance level.
- Whether it contains a clue.
- Whether it is misleading.
- Media-generation instructions, if required.

### E. Investigation Timeline

Generate a chronological timeline of relevant events.

Each event must contain:

- Event ID.
- Timestamp.
- Description.
- Associated suspect, if applicable.
- Related evidence IDs.

### F. Final Solution

Generate a complete solution containing:

- Actual culprit.
- Motive.
- Method.
- Sequence of events.
- Explanation of important evidence.
- Explanation of misleading clues.
- Reason other suspects are innocent.
- Final case conclusion.

The final solution must never be returned to the frontend before the user submits an accusation.

---

# 7. EVIDENCE SYSTEM

Evidence is the central gameplay element.

The user should feel like they are examining actual investigation materials.

The MVP must support the following evidence categories.

## 7.1 WhatsApp-Style Messages

Generate fictional chat conversations between suspects.

Each conversation must contain:

- Conversation ID.
- Participants.
- Individual messages.
- Sender.
- Message content.
- Timestamp.
- Optional attachment description.

Example:

**Conversation: Alex and Rahul**

| Time | Sender | Message |
|---|---|---|
| 8:15 PM | Alex | Did you finish the work? |
| 8:17 PM | Rahul | Almost. I will send it tonight. |
| 8:24 PM | Alex | Don't tell anyone about this. |
| 8:29 PM | Rahul | We agreed to keep it between us. |

Requirements:

- Use a WhatsApp-inspired interface.
- Clearly mark all conversations as fictional investigation evidence.
- Do not connect to actual WhatsApp accounts.
- Do not send real messages.
- Preserve message timestamps.
- Conversations must contribute to the mystery.
- Some conversations should contain important clues or contradictions.

## 7.2 Image Evidence

Examples:

- Crime scene photographs.
- Objects found at the location.
- Photographs of suspicious items.
- Photographs containing hidden clues.
- Photographs of relevant locations.
- Screenshots of fictional documents.

Requirements:

- Generate images using an image-generation provider.
- Store generated images or their URLs.
- Display them in an evidence viewer.
- Allow the user to zoom into images.
- Provide a short AI-generated description.
- Connect images to relevant evidence IDs and suspects.

Each image must have:

- Image ID.
- Evidence ID.
- Image URL.
- Description.
- Generation prompt.
- Associated suspect IDs, if applicable.

Do not display a generated image as real-world photographic evidence. All media must be identified as fictional AI-generated material.

## 7.3 CCTV Evidence

CCTV evidence should resemble a real surveillance recording.

The preferred implementation is an actual generated video clip.

However, video generation may be expensive or unavailable.

Therefore, support two modes:

**Mode A: Actual Video**

- Generate a short CCTV-style video through a configured video-generation provider.
- Store the resulting video URL.
- Display it using an HTML video player.
- Include timestamp and camera location.

**Mode B: CCTV Simulation (Fallback)**

- Generate 3–6 CCTV-style images.
- Display them in chronological order.
- Add timestamps to each frame.
- Provide a description of what is visible.
- Allow the user to examine each frame.

The fallback must still feel like reviewing surveillance footage.

CCTV evidence should contain meaningful clues such as:

- Someone entering or leaving a location.
- A suspicious object being moved.
- A suspect appearing at an unexpected time.
- Contradictions between an alibi and recorded events.

## 7.4 Documents and Reports

Generate fictional documents such as:

- Security reports.
- Incident reports.
- Emails.
- Laboratory reports.
- Computer access logs.
- Visitor registers.
- Receipts.
- Handwritten notes.

Documents should have a readable interface.

## 7.5 Witness Statements

Generate statements from fictional witnesses.

Each statement should contain:

- Witness name.
- Witness role.
- Statement.
- Time recorded.
- Related suspect.
- Potential inconsistencies.

## 7.6 Evidence Quality Rules

Evidence generation must follow these rules:

1. All evidence must be connected to the case narrative.
2. Evidence must be consistent with the actual solution.
3. Evidence should not directly reveal the culprit too easily.
4. Some evidence should be ambiguous.
5. Some evidence may mislead the investigator.
6. Important clues must be discoverable.
7. The mystery must be solvable using the available evidence.
8. Every suspect should have a believable level of suspicion.
9. No contradictory evidence should make the final solution logically impossible.
10. Evidence should not reveal the actual culprit through its title, description or metadata.

For each case, include at least three meaningful clues that collectively support the correct solution.

---

# 8. INVESTIGATION DASHBOARD

This is the main gameplay screen.

The interface should resemble an investigation room or detective workspace.

## 8.1 Layout

Use a dashboard layout with:

**Top Navigation**
- Case title.
- Case ID.
- Investigation progress.
- Exit/back option.

**Left Sidebar**
- Case Overview.
- Suspects.
- Evidence.
- Timeline.
- Investigation Notes.

**Main Content**
- Selected investigation section.
- Evidence viewer.
- Suspect information.
- Case information.

**Bottom/Prominent Action**
- Submit Accusation.

## 8.2 Case Overview

Display:

- Case title.
- Case description.
- Incident location.
- Incident date.
- Difficulty.
- Investigation objective.

## 8.3 Suspect Section

Display suspect cards.

Each card should contain:

- Name.
- Profile image or generated avatar.
- Occupation.
- Short biography.
- Relationship with the incident.
- Known alibi.

Allow users to open each suspect profile.

Do not show the actual culprit status.

## 8.4 Evidence Section

Display evidence in categorized tabs:

- All Evidence.
- Messages.
- Images.
- CCTV.
- Documents.
- Witness Statements.

Each evidence card must show:

- Evidence title.
- Category.
- Short description.
- Evidence importance indicator, if appropriate.
- Open/View action.

Users must be able to open and examine each evidence item individually.

## 8.5 Investigation Notes

Provide a simple notes section where users can write down observations.

Requirements:

- Add notes.
- Edit notes.
- Delete notes.
- Save notes to the database.
- Associate notes with a case.

Notes must be private to the user's investigation session.

## 8.6 Timeline

Display all relevant events chronologically.

Users should be able to understand the sequence of events and compare it with suspect statements.

---

# 9. CULPRIT SELECTION AND RESULT SYSTEM

## 9.1 Submit Accusation

The user clicks "Submit Accusation".

Display a selection interface containing all suspects.

The user must select exactly one suspect.

Before final submission, show a confirmation message:

"Are you sure you want to accuse this person? Your investigation is about to reach its conclusion."

The user can confirm or return to the investigation.

## 9.2 Result Screen

After submission, compare the selected suspect ID with the stored culprit ID.

If correct:

Display:

"CASE SOLVED!"

Show:

- Correct suspect.
- Motive.
- How the incident happened.
- Evidence that exposed the culprit.
- Investigation completion status.

If incorrect:

Display:

"WRONG ACCUSATION!"

Show:

- Selected suspect.
- Actual culprit.
- Explanation of why the selected suspect was innocent.
- Important evidence that points to the actual culprit.

## 9.3 Final Explanation

The final explanation is one of the most important features.

It should explain the complete investigation in a logical sequence.

Example:

"The security footage showed Rahul entering the laboratory at 8:42 PM. However, he claimed that he had left the building at 8:15 PM. A message sent at 8:48 PM also confirms that he was still inside the laboratory. The access log revealed that the project files were deleted shortly afterward. These clues establish that Rahul had the opportunity and means to delete the files."

The explanation must connect evidence rather than merely announce the culprit.

## 9.4 Case Completion

After completion:

- Mark the case as completed.
- Store the selected suspect.
- Store whether the accusation was correct.
- Store completion time.
- Allow the user to view the final solution again.
- Provide a "Create Another Mystery" button.

For the MVP, users cannot repeatedly submit different accusations to manipulate their score.

---

# 10. AI GENERATION ARCHITECTURE

## 10.1 Important Design Principle

Use a multi-stage AI generation pipeline instead of asking Gemini to generate everything in one massive request.

This improves reliability, consistency and debugging.

### Stage 1: Scenario Understanding

Input:

User's scenario + optional settings.

Gemini identifies:

- Theme.
- Main incident.
- Possible setting.
- Potential characters.
- Appropriate mystery structure.

### Stage 2: Mystery Blueprint

Gemini generates:

- Case details.
- Suspects.
- Actual culprit.
- Motive.
- Method.
- Complete solution.
- Chronological event sequence.

The blueprint becomes the source of truth for all subsequent generation.

### Stage 3: Evidence Generation

Gemini receives the approved blueprint and generates:

- Conversations.
- Witness statements.
- CCTV event descriptions.
- Documents.
- Image-generation prompts.
- Clues and red herrings.

Evidence must be logically consistent with the blueprint.

### Stage 4: Consistency Validation

Send the generated evidence and blueprint through a validation process.

Check:

- Does the timeline match?
- Do suspect alibis match the events?
- Are all suspects represented?
- Does the evidence support the actual solution?
- Are there any impossible contradictions?
- Is the case solvable?
- Is the correct culprit represented in the suspect list?

If validation fails, attempt one controlled regeneration or repair.

If it fails again, do not publish the broken case. Return a generation error and allow the user to retry.

### Stage 5: Media Generation

Generate visual assets through the media provider adapters.

- Generate suspect avatars.
- Generate crime scene images.
- Generate important visual clues.
- Generate CCTV video or image sequences.

The text-based case should remain playable even if image or video generation fails.

### Stage 6: Save and Publish

After validation:

1. Save the mystery to MongoDB.
2. Save suspects.
3. Save evidence.
4. Save timeline.
5. Save private solution data.
6. Save media URLs.
7. Mark the case as ready.
8. Return the public case data to the frontend.

## 10.2 Gemini Prompting Requirements

Create separate prompt templates for:

- Scenario understanding.
- Mystery blueprint generation.
- Evidence generation.
- Consistency validation.
- Final solution explanation, if required.

Prompts must specify:

- Required JSON structure.
- Number of suspects.
- Exactly one culprit.
- Evidence requirements.
- Timeline consistency.
- Clue distribution.
- Realistic character behaviour.
- No accidental disclosure of the solution.
- Fictional nature of the case.

Do not hardcode the mystery content in the frontend.

All generated mystery content must come from the backend AI pipeline.

## 10.3 Structured Output

Use Gemini's structured output/JSON capabilities where supported.

Validate every AI response using Zod.

Never assume that AI-generated JSON is always valid.

If the response is malformed:

1. Attempt JSON extraction or repair.
2. Validate again.
3. Retry generation if necessary.
4. Return a controlled error if validation still fails.

---

# 11. DATABASE DESIGN

Use MongoDB with Mongoose.

The following collections are recommended.

## 11.1 Users Collection

Optional for the first MVP if guest-based sessions are implemented.

Fields:

- _id
- name
- email
- passwordHash
- createdAt
- updatedAt

Passwords must be hashed, never stored in plaintext.

## 11.2 Mysteries Collection

Fields:

- _id
- title
- originalPrompt
- category
- difficulty
- description
- incidentLocation
- incidentDate
- investigationObjective
- status
- generationStatus
- userId (optional)
- createdAt
- updatedAt

Possible statuses:

- generating
- ready
- completed
- failed

## 11.3 Suspects Collection

Fields:

- _id
- mysteryId
- name
- age
- occupation
- biography
- relationship
- motive
- alibi
- personality
- suspicionLevel
- avatarUrl

The culprit identity must not be stored in publicly accessible suspect data.

## 11.4 Evidence Collection

Fields:

- _id
- mysteryId
- evidenceType
- title
- description
- content
- timestamp
- relatedSuspectIds
- importance
- isMisleading
- containsClue
- mediaUrl
- mediaType
- mediaStatus
- createdAt

Possible evidence types:

- message
- image
- cctv
- document
- witness_statement
- access_log

## 11.5 Timeline Collection

Fields:

- _id
- mysteryId
- eventTitle
- timestamp
- description
- relatedSuspectIds
- relatedEvidenceIds

## 11.6 Solutions Collection

This collection must be protected.

Fields:

- _id
- mysteryId
- culpritSuspectId
- motive
- method
- completeExplanation
- eventSequence
- evidenceExplanation
- innocentSuspectExplanations

Never expose this collection through public mystery APIs.

## 11.7 InvestigationSessions Collection

Fields:

- _id
- mysteryId
- userId (optional)
- notes
- selectedCulpritId
- isCorrect
- isCompleted
- startedAt
- completedAt

All database relationships must be maintained using ObjectId references.

Use appropriate indexes for mysteryId, userId and generationStatus.

---

# 12. BACKEND API SPECIFICATION

Base URL:

`/api/v1`

## 12.1 Mystery APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /mysteries/generate | Generate a new mystery |
| GET | /mysteries/:id | Get public mystery details |
| GET | /mysteries/:id/status | Check generation status |
| GET | /mysteries/:id/suspects | Get suspects |
| GET | /mysteries/:id/evidence | Get all evidence |
| GET | /mysteries/:id/timeline | Get investigation timeline |

## 12.2 Evidence APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /evidence/:id | Get individual evidence |
| GET | /mysteries/:id/evidence | Get case evidence |

## 12.3 Investigation APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /investigations/:id/notes | Create or update notes |
| GET | /investigations/:id | Get investigation session |
| POST | /investigations/:id/accuse | Submit accusation |
| GET | /investigations/:id/result | Get completed result |

## 12.4 Example: Generate Mystery Request

POST `/api/v1/mysteries/generate`

Request:

```json
{
  "scenario": "A valuable diamond disappeared from a hotel room. Three employees had access to the room.",
  "difficulty": "medium",
  "theme": "theft",
  "suspectCount": 4,
  "evidenceIntensity": "medium"
}
```

Response:

```json
{
  "success": true,
  "message": "Mystery generation started",
  "mysteryId": "CASE_OBJECT_ID",
  "status": "generating"
}
```

The frontend should poll the status endpoint until the case is ready or failed.

## 12.5 Example: Public Mystery Response

GET `/api/v1/mysteries/:id`

Response:

```json
{
  "success": true,
  "mystery": {
    "id": "CASE_OBJECT_ID",
    "title": "The Missing Diamond",
    "category": "theft",
    "difficulty": "medium",
    "description": "A diamond disappeared from a hotel room.",
    "incidentLocation": "Royal Grand Hotel",
    "status": "ready"
  }
}
```

Do not include the culprit ID, solution, hidden generation data or internal AI prompts.

## 12.6 Example: Accusation Request

POST `/api/v1/investigations/:id/accuse`

Request:

```json
{
  "suspectId": "SUSPECT_OBJECT_ID"
}
```

Response:

```json
{
  "success": true,
  "result": {
    "isCorrect": true,
    "selectedSuspect": "SUSPECT_OBJECT_ID",
    "actualCulprit": "SUSPECT_OBJECT_ID",
    "explanation": "The complete solution..."
  }
}
```

The response must only be returned after the accusation has been submitted.

Implement authorization and ownership checks wherever user accounts or private sessions are used.

---

# 13. FRONTEND PAGE STRUCTURE

Recommended routes:

| Route | Page |
|---|---|
| / | Landing Page |
| /create | Create Mystery |
| /generating/:id | Generation Loading Page |
| /case/:id | Investigation Dashboard |
| /case/:id/suspects | Suspect View |
| /case/:id/evidence/:evidenceId | Evidence Viewer |
| /investigation/:id/result | Result Page |
| /about | About Page |

Recommended component structure:

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── MysteryCard.jsx
│   ├── SuspectCard.jsx
│   ├── EvidenceCard.jsx
│   ├── EvidenceViewer.jsx
│   ├── MessageViewer.jsx
│   ├── CCTVViewer.jsx
│   ├── ImageViewer.jsx
│   ├── DocumentViewer.jsx
│   ├── Timeline.jsx
│   ├── InvestigationNotes.jsx
│   ├── LoadingScreen.jsx
│   └── ConfirmationModal.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── CreateMystery.jsx
│   ├── GeneratingMystery.jsx
│   ├── Investigation.jsx
│   ├── EvidenceDetails.jsx
│   └── Result.jsx
│
├── context/
│   └── InvestigationContext.jsx
│
├── services/
│   └── api.js
│
├── hooks/
│
├── utils/
│
├── App.jsx
└── main.jsx
```

This is a suggested starting structure. Codex may improve the organization when needed, but it must maintain separation of concerns.

---

# 14. BACKEND PROJECT STRUCTURE

Recommended structure:

```text
server/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── mysteryController.js
│   ├── evidenceController.js
│   └── investigationController.js
│
├── models/
│   ├── Mystery.js
│   ├── Suspect.js
│   ├── Evidence.js
│   ├── Timeline.js
│   ├── Solution.js
│   ├── User.js
│   └── InvestigationSession.js
│
├── routes/
│   ├── mysteryRoutes.js
│   ├── evidenceRoutes.js
│   └── investigationRoutes.js
│
├── services/
│   ├── geminiService.js
│   ├── mysteryGenerator.js
│   ├── evidenceGenerator.js
│   ├── consistencyValidator.js
│   └── mediaGenerator.js
│
├── prompts/
│   ├── blueprintPrompt.js
│   ├── evidencePrompt.js
│   ├── validationPrompt.js
│   └── solutionPrompt.js
│
├── validators/
│   ├── mysterySchema.js
│   └── requestSchema.js
│
├── middleware/
│   ├── errorHandler.js
│   └── authMiddleware.js
│
├── utils/
│   └── responseHandler.js
│
├── app.js
└── server.js
```

---

# 15. UI/UX DESIGN REQUIREMENTS

## 15.1 Design Direction

The website should have a premium detective investigation aesthetic.

Suggested design inspiration:

- Dark detective investigation rooms.
- Crime investigation boards.
- Classified documents.
- CCTV monitoring systems.
- Digital evidence analysis interfaces.

The website should look modern and polished rather than like a generic AI chatbot.

## 15.2 Colour Palette

Suggested palette:

| Element | Colour |
|---|---|
| Main Background | #0B0D12 |
| Secondary Background | #141923 |
| Card Background | #1B2230 |
| Primary Accent | #C89B3C |
| Secondary Accent | #A43D3D |
| Primary Text | #F5F5F5 |
| Secondary Text | #A0A8B5 |
| Borders | #30394A |

Use gold as the main investigation accent and muted red for alerts or suspicious indicators.

## 15.3 Typography

Suggested fonts:

- Headings: Playfair Display or Cormorant Garamond.
- Body: Inter.
- Small metadata: JetBrains Mono.

## 15.4 Interaction Design

Include:

- Smooth page transitions.
- Hover effects on evidence cards.
- Expandable suspect profiles.
- Image zoom functionality.
- Timeline navigation.
- Loading animations.
- Evidence-opening transitions.
- Confirmation modals.
- Clear success and error messages.

Animations must not interfere with usability.

## 15.5 Responsive Design

The application must support:

- Desktop.
- Laptop.
- Tablet.
- Mobile.

The investigation dashboard should adapt to smaller screens using collapsible navigation and stacked content.

---

# 16. SECURITY REQUIREMENTS

1. Store Gemini API keys only on the backend.
2. Store MongoDB credentials in environment variables.
3. Never expose API keys in frontend code.
4. Validate all user inputs.
5. Sanitize user-provided text.
6. Protect private solution data.
7. Validate suspect IDs before accepting accusations.
8. Implement rate limiting on AI generation endpoints.
9. Restrict access to private investigation sessions.
10. Use secure authentication if accounts are implemented.
11. Never trust client-side culprit selection or scoring.
12. Do not expose internal AI prompts or private generation data.
13. Restrict file uploads to supported file types and sizes.
14. Use HTTPS in production.
15. Ensure generated content is clearly identified as fictional.

## 16.1 AI Safety

The AI should generate fictional investigation scenarios.

Do not use actual private WhatsApp conversations, real CCTV footage or private personal information.

User prompts should be checked for inappropriate or harmful requests.

The application must not present AI-generated accusations as factual claims about real people.

---

# 17. ERROR HANDLING

The application must gracefully handle:

| Error | Expected Behaviour |
|---|---|
| Empty scenario | Show validation message |
| Gemini API failure | Show generation failure and retry option |
| Invalid AI JSON | Validate and attempt repair |
| Inconsistent mystery | Retry validation/generation |
| Image generation failure | Use placeholder or fallback |
| Video generation failure | Use CCTV image sequence |
| MongoDB failure | Display controlled server error |
| Invalid mystery ID | Display 404 page |
| Missing evidence | Show evidence unavailable message |
| Invalid suspect ID | Reject accusation |
| Network failure | Show retry option |

Never expose stack traces, API keys or internal server errors to users.

---

# 18. PERFORMANCE REQUIREMENTS

1. Landing page should load quickly.
2. Evidence should load independently rather than requiring the entire case to be downloaded repeatedly.
3. Large images should use lazy loading.
4. Videos should load only when opened.
5. AI generation should run asynchronously.
6. Use polling with reasonable intervals and a timeout.
7. Store generated media in persistent storage rather than relying on temporary local files.
8. Avoid unnecessary repeated Gemini calls.
9. Cache appropriate public case data.
10. Handle generation failures without losing already saved case data.

AI generation may take longer than ordinary API requests. The application must never block the browser with a long-running synchronous request.

---

# 19. ENVIRONMENT CONFIGURATION

Create separate `.env` files for frontend and backend where appropriate.

Backend `.env` example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=your_configured_text_model
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173

MEDIA_PROVIDER=none
IMAGE_API_KEY=
VIDEO_API_KEY=
```

Use a model that is currently available to the configured Gemini API account.

Do not commit `.env` files to GitHub.

Provide a `.env.example` file with placeholder values.

If media generation is not configured, the system must still generate and serve text-based mysteries.

---

# 20. TESTING REQUIREMENTS

## 20.1 Frontend Testing

Test:

- Landing page navigation.
- Scenario input validation.
- Mystery creation.
- Loading states.
- Investigation dashboard.
- Suspect navigation.
- Evidence viewer.
- Accusation submission.
- Result display.
- Responsive layout.

## 20.2 Backend Testing

Test:

- API request validation.
- Gemini integration.
- JSON response validation.
- Mystery creation.
- Suspect creation.
- Evidence creation.
- Timeline consistency.
- Solution protection.
- Accusation validation.
- Database operations.
- Error handling.

## 20.3 AI Quality Testing

Generate at least 10 different test mysteries.

For each mystery, verify:

- Exactly one culprit exists.
- At least three suspects are generated.
- Evidence matches the case story.
- All timestamps are logically consistent.
- Suspect alibis are meaningful.
- At least three meaningful clues exist.
- The actual culprit can be identified from the evidence.
- The final explanation matches the evidence.
- The culprit is not accidentally revealed in public data.

---

# 21. ACCEPTANCE CRITERIA

The project will be considered MVP-complete when all the following requirements are satisfied.

### Application

- [ ] Landing page works.
- [ ] Create Mystery page works.
- [ ] Application is responsive.
- [ ] Navigation works correctly.

### AI Generation

- [ ] User can submit a custom scenario.
- [ ] Gemini generates a mystery.
- [ ] At least three suspects are generated.
- [ ] Exactly one culprit is established.
- [ ] Evidence is generated.
- [ ] Timeline is generated.
- [ ] Mystery consistency is validated.
- [ ] Generated content is stored in MongoDB.

### Investigation

- [ ] User can open a mystery.
- [ ] User can examine suspect profiles.
- [ ] User can view messages.
- [ ] User can examine images.
- [ ] User can view CCTV evidence or its fallback.
- [ ] User can examine documents.
- [ ] User can view witness statements.
- [ ] User can view the timeline.
- [ ] User can save investigation notes.

### Results

- [ ] User can select a culprit.
- [ ] User can submit an accusation.
- [ ] Correct accusations are identified.
- [ ] Incorrect accusations are identified.
- [ ] Actual culprit is revealed.
- [ ] Complete solution is displayed.
- [ ] Case completion is saved.

### Security and Reliability

- [ ] Gemini API key is protected.
- [ ] Private solution data is not exposed before submission.
- [ ] Invalid requests are rejected.
- [ ] Generation failures are handled.
- [ ] Media failures do not break the investigation.
- [ ] Duplicate accusations are prevented.

---

# 22. IMPLEMENTATION PHASES

Codex should build the project incrementally.

## Phase 1: Project Setup

- Create React frontend using Vite.
- Create Express backend.
- Connect MongoDB.
- Configure environment variables.
- Set up Tailwind CSS.
- Configure React Router.
- Create basic folder structure.

**Deliverable:** Running MERN application with database connection.

## Phase 2: Frontend UI

- Build landing page.
- Build create mystery page.
- Build loading page.
- Build investigation dashboard.
- Build suspect cards.
- Build evidence viewers.
- Build result page.

Use temporary mock data at this stage.

**Deliverable:** Fully navigable frontend with a complete mock investigation.

## Phase 3: Gemini Integration

- Configure Gemini API.
- Implement scenario understanding.
- Implement mystery blueprint generation.
- Implement evidence generation.
- Implement consistency validation.
- Implement structured JSON validation.

**Deliverable:** Backend can generate a complete, logically consistent mystery.

## Phase 4: Database Integration

- Create Mongoose schemas.
- Save generated mysteries.
- Save suspects.
- Save evidence.
- Save timeline.
- Save private solutions.
- Save investigation sessions.

**Deliverable:** Generated mysteries persist in MongoDB.

## Phase 5: Connect Frontend and Backend

- Implement REST APIs.
- Connect frontend using Axios.
- Implement generation status polling.
- Display generated suspects and evidence.
- Implement notes functionality.
- Implement accusation submission.

**Deliverable:** Complete playable mystery investigation.

## Phase 6: AI Media Integration

- Integrate image generation.
- Generate suspect avatars.
- Generate crime scene images.
- Generate visual evidence.
- Implement CCTV simulation.
- Add optional actual video generation.

**Deliverable:** Visually immersive AI-generated investigation.

## Phase 7: Testing and Refinement

- Test complete user flow.
- Fix UI issues.
- Test AI consistency.
- Test API failures.
- Test security.
- Optimize performance.
- Verify all acceptance criteria.

**Deliverable:** MVP-ready AI Mystery Room.

---

# 23. IMPORTANT DEVELOPMENT RULES FOR CODEX

This section contains mandatory instructions for AI-assisted development.

1. This document is the single source of truth for the project.
2. Follow the requirements in this document before making implementation decisions.
3. Do not introduce unnecessary technologies or frameworks.
4. Use MERN as the primary application stack.
5. Use Gemini for mystery and evidence text generation.
6. Do not hardcode mystery stories, suspects or evidence into production code.
7. Use mock data only during frontend development and testing.
8. Keep frontend, backend, AI services and database logic separated.
9. Never expose the actual culprit or solution before the accusation.
10. Ensure that all generated evidence is logically consistent with the established mystery blueprint.
11. Use structured JSON responses from Gemini.
12. Validate AI-generated responses before saving them.
13. Implement proper error handling for all external API calls.
14. Keep API keys and secrets in environment variables.
15. Do not assume that image and video generation APIs are automatically available.
16. Build fallback functionality for unavailable media providers.
17. Use reusable React components.
18. Maintain readable, modular and maintainable code.
19. Do not create unnecessarily complicated abstractions.
20. Do not skip implementation phases.
21. Do not mark a feature as complete until it has been implemented and tested.
22. Update the project documentation whenever an architectural decision changes.
23. Do not silently change the requirements. If a requirement is ambiguous or technically infeasible, document the issue and propose the smallest reasonable alternative.
24. Prefer a fully working MVP over incomplete advanced features.

## 23.1 Codex Development Workflow

Before implementing any major feature:

1. Read this specification.
2. Identify the relevant requirements.
3. Inspect the existing project structure.
4. Create an implementation plan.
5. Implement the feature.
6. Run the relevant tests.
7. Fix errors.
8. Update the implementation checklist.

Maintain a `TASKS.md` file tracking the development phases and completed tasks.

Maintain an `ARCHITECTURE.md` file describing the actual implemented architecture.

If the codebase and this specification disagree, follow the specification unless an explicitly documented technical limitation requires a change.

---

# 24. FINAL PRODUCT VISION

AI Mystery Room should not feel like a website where AI simply generates a story and asks the user to guess the ending.

It should feel like an interactive detective investigation.

The user should be able to:

- Enter a completely original scenario.
- Receive a unique mystery.
- Explore different suspects.
- Read suspicious conversations.
- Examine photographs.
- Review CCTV footage.
- Compare witness statements.
- Discover contradictions.
- Connect clues.
- Form a theory.
- Accuse a suspect.
- Discover the complete truth.

**The central product principle is:**

"Don't tell the user a mystery. Let them investigate one."

The quality of the application should be measured by how engaging, coherent and solvable its generated investigations are, not simply by how much content the AI generates.

---

**END OF SPECIFICATION**

**Version:** 1.0  
**Project:** AI Mystery Room  
**Primary Stack:** MERN + Google Gemini  
**Document Purpose:** Single Source of Truth for Codex Implementation