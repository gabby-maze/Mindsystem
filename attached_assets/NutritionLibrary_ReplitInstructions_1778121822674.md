# MAZEPERFORMANCE · NUTRITION LIBRARY
## Replit Build Instructions
### Members-Only Site · Courtside Conversations

---

## WHAT YOU ARE BUILDING

A nutrition library page inside the MazePerformance members-only site with the following structure:

- A main **Nutrition Guide** tab at the top center of the page — a full educational breakdown of what, why, and how nutrition matters to an athlete and their journey
- Below that, **five fuel category buttons**: Recovery Fuel, Energy Fuel, Focus Fuel, Build Fuel, and Quick Fuel
- Each fuel category opens to an **Overview** page and **10 Recipe buttons**
- A **community Q&A section** at the bottom where members can ask questions publicly, Gabby gets notified, and only Gabby can answer — all visible to everyone

---

## TECH STACK

Use the following:

- **Frontend:** React (with Vite or Create React App)
- **Backend:** Node.js with Express
- **Database:** Supabase (PostgreSQL) — for storing questions, answers, and user roles
- **Authentication:** Supabase Auth — already in use for the members site
- **Notifications:** Supabase Edge Functions + email notification to Gabby when a new question is submitted
- **Styling:** Tailwind CSS — use MazePerformance brand colors only (see color palette below)
- **Hosting:** Replit (deploy via Replit's built-in hosting)

---

## BRAND COLORS — USE ONLY THESE

```css
--color-bg:        #0A0A0A;   /* page background */
--color-card:      #141414;   /* card and panel backgrounds */
--color-card-2:    #1A1A1A;   /* elevated cards */
--color-divider:   #2A2A2A;   /* borders and dividers */
--color-white:     #FFFFFF;   /* primary text */
--color-muted:     #A0A0A0;   /* secondary text, labels */
--color-pink:      #FF2D78;   /* primary accent */
--color-purple-1:  #982FF7;   /* secondary accent */
--color-purple-2:  #C42BEE;   /* supporting purple */
--color-blue:      #2B8BF5;   /* structural accent */
--color-teal:      #00D4C8;   /* tertiary accent */
```

No other colors. No white backgrounds. No gradients.

**Fonts:**
- Headlines: Permanent Marker (Google Fonts)
- Body / UI: Oswald (Google Fonts)

---

## PAGE STRUCTURE

### LAYOUT

```
┌─────────────────────────────────────────────────┐
│  [MAZEPERFORMANCE LOGO — top left]               │
│                                                  │
│         [ NUTRITION GUIDE ] ← main tab           │
│                                                  │
│  [ Recovery ] [ Energy ] [ Focus ] [ Build ] [ Quick ]
│                                                  │
│  ┌─────────────────────────────────────────────┐ │
│  │  CONTENT AREA — changes based on active tab │ │
│  └─────────────────────────────────────────────┘ │
│                                                  │
│  ┌─────────────────────────────────────────────┐ │
│  │  ASK GABBY — Q&A SECTION                    │ │
│  └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

---

## SECTION 1 — NAVIGATION

### Main Tab: NUTRITION GUIDE

- Centered at the top of the page
- Styled as a large pill button
- Background: `#FF2D78` (hot pink) when active, `#1A1A1A` when inactive
- Text: Oswald Bold, uppercase, white, letter-spacing 0.15em
- When clicked: displays the Nutrition Guide content in the main content area

### Fuel Category Buttons (below the main tab)

Five buttons in a horizontal row centered below the Nutrition Guide tab:

1. Recovery Fuel
2. Energy Fuel
3. Focus Fuel
4. Build Fuel
5. Quick Fuel

**Button styling:**
- Background: `#1A1A1A`
- Border: 1px solid `#2A2A2A`
- Active state border: 2px solid `#FF2D78`
- Text: Oswald SemiBold, uppercase, `#A0A0A0` inactive, `#FFFFFF` active
- On mobile: stack into a 2-column grid, Quick Fuel centered below

---

## SECTION 2 — CONTENT AREAS

### 2A — NUTRITION GUIDE (main tab content)

When the Nutrition Guide tab is active, display a full editorial page with the following sections. Write real content for each section — this is the educational anchor of the entire library.

**Page headline:** "Fuel the athlete. Build the person."
**Subhead:** "Everything your body does on the court starts with what you put in it."

**Content sections to include (as scrollable cards):**

**01 · WHAT IS NUTRITION FOR AN ATHLETE**
Explain that athletic nutrition is not a diet — it is a performance system. Food is information for the body. Every meal is either building the athlete or breaking her down. No neutral ground.

**02 · WHY IT MATTERS MORE THAN MOST ATHLETES THINK**
Cover the connection between nutrition and energy, recovery, focus, mood, and injury prevention. Most athletes underestimate the role food plays in their mental game — not just their physical one. When an athlete is under-fueled, the first thing to go is not strength — it is decision-making, emotional regulation, and focus. The same gaps athletes work in practice disappear faster when the body isn't supported.

**03 · HOW NUTRITION FITS INTO THE ATHLETE'S JOURNEY**
Break the season into phases — pre-season, in-season, post-season — and explain how nutrition needs shift in each phase. In-season is not the time to restrict. Post-season is not the time to stop caring. Pre-season is where the foundation gets built.

**04 · THE FIVE FUELS — HOW THIS LIBRARY IS ORGANIZED**
Introduce the five fuel categories and what each one is for:
- Recovery Fuel — what you eat after you work to rebuild faster
- Energy Fuel — what you eat before you compete to show up ready
- Focus Fuel — what supports brain function, clarity, and emotional regulation
- Build Fuel — what supports muscle development and physical growth
- Quick Fuel — fast, practical options for busy athlete schedules

**05 · ONE LAW**
End the page with a single MazePerformance law in large Permanent Marker type:
*"The process is the point. The outcome is the byproduct."*
Subtext in Oswald gray: "What you fuel today, you perform tomorrow."

---

### 2B — FUEL CATEGORY PAGES

When any of the five fuel category buttons is clicked, the content area displays:

**Two-level navigation inside the content area:**

```
[ Overview ]  [ Recipe 1 ]  [ Recipe 2 ]  [ Recipe 3 ]  [ Recipe 4 ]  [ Recipe 5 ]
              [ Recipe 6 ]  [ Recipe 7 ]  [ Recipe 8 ]  [ Recipe 9 ]  [ Recipe 10 ]
```

**Overview button styling:**
- Background: `#982FF7` (purple) when active, `#1A1A1A` when inactive
- Text: Oswald Bold, uppercase, white

**Recipe buttons styling:**
- Background: `#1A1A1A`
- Active: left border 3px `#FF2D78`, background `#141414`
- Text: Oswald, white
- Label: "Recipe 01", "Recipe 02" etc. (placeholder until real recipe names are added)

---

#### OVERVIEW PAGE TEMPLATE (for each fuel category)

Each overview page should have:

- **Category name** in Permanent Marker, white, large — e.g. "Recovery Fuel"
- **One-line definition** in Oswald, pink — e.g. "What you eat after you work to rebuild faster."
- **Why this fuel matters** — 2–3 short paragraphs in Oswald white 18px
- **When to use it** — specific timing guidance (e.g. "within 30–45 minutes after practice")
- **What to look for** — key nutrients or food types to prioritize
- **What to avoid** — common mistakes athletes make with this fuel category
- **One law tie-in** — connect the nutrition principle to a MazePerformance performance principle

**Overview content placeholders by category:**

RECOVERY FUEL OVERVIEW:
After you train, your body is in repair mode. What you eat in the first 30–45 minutes after practice determines how fast you recover, how sore you are tomorrow, and how ready you are for the next session. Recovery fuel is protein to rebuild muscle and carbohydrates to restore glycogen. It is not optional — it is the difference between building and breaking down.

ENERGY FUEL OVERVIEW:
Pre-competition nutrition is not about eating more — it is about eating right and eating at the right time. The goal is stable blood sugar, enough fuel in the tank, and nothing that creates sluggishness or GI issues on the court. Energy fuel is timed carbohydrates, moderate protein, and low fat and fiber in the hours before competition.

FOCUS FUEL OVERVIEW:
Focus is a physical state, not just a mental one. The brain runs on glucose, and when blood sugar drops, focus and emotional regulation drop with it. Focus fuel is steady energy — foods that release slowly, support hydration, and reduce inflammation. This is the fuel that closes the gap between what an athlete knows and what she can execute under pressure.

BUILD FUEL OVERVIEW:
Building an athlete's body is a long-term project — not something that happens in one meal or one week. Build fuel is consistent high-quality protein throughout the day, enough total calories to support growth and training load, and micronutrients that support bone density and hormonal health. Under-fueling is the most common mistake young female athletes make, and it is the one with the longest-term consequences.

QUICK FUEL OVERVIEW:
Athlete schedules are brutal — early morning practice, school, afternoon training, tournaments that run all day. Quick fuel is not junk food — it is smart, portable, practical nutrition that works when there is no time to cook. The goal is options that travel well, require no prep, and still deliver real fuel.

---

#### RECIPE PAGE TEMPLATE

Each of the 10 recipe buttons per category should display:

- **Recipe name** in Permanent Marker white, large
- **Fuel category tag** in Oswald, accent color (pill label)
- **Why this recipe** — 1–2 sentences connecting it to the fuel category purpose
- **Prep time / Cook time / Servings** — in Oswald, muted gray, inline
- **Ingredients list** — Oswald white, clean bulleted list
- **Instructions** — numbered steps in Oswald white
- **Athlete tip** — one practical note in Oswald italic pink — e.g. "Make a double batch on Sunday and pack it for the week."
- **Nutrition snapshot** — approximate protein / carbs / fat — displayed as three small stat cards

**Recipe button labels (placeholder — to be renamed with actual recipe names):**
Recipe 01 through Recipe 10 for each category. 50 recipes total across all five categories.

---

## SECTION 3 — ASK GABBY · Q&A

This section lives below the fuel category content on every page. It is always visible regardless of which tab is active.

### HOW IT WORKS

**Members (all Courtside users):**
- Can submit a question via a text input field
- Questions are visible to all members once submitted
- Members CANNOT reply to questions or answer each other
- Members can see Gabby's answers when posted

**Gabby (admin role only):**
- Receives an email notification every time a new question is submitted
- Logs into the site and sees an admin answer button below each unanswered question
- Types her answer and publishes it
- Her answer appears publicly below the question with her name and a "Gabby · MazePerformance" tag

---

### DATABASE SCHEMA (Supabase)

Create the following tables:

**Table: questions**
```sql
id              uuid primary key default gen_random_uuid()
created_at      timestamp default now()
member_id       uuid references auth.users(id)
member_name     text
question_text   text not null
is_answered     boolean default false
```

**Table: answers**
```sql
id              uuid primary key default gen_random_uuid()
created_at      timestamp default now()
question_id     uuid references questions(id)
answer_text     text not null
answered_by     text default 'Gabby · MazePerformance'
```

**Row Level Security rules:**
- All authenticated users can INSERT into questions
- All authenticated users can SELECT from questions and answers
- Only the admin user (Gabby's account) can INSERT into answers
- No user can UPDATE or DELETE questions or answers

---

### Q&A UI DESIGN

**Section header:**
```
ASK GABBY
─────────────────────────────────────────
Got a question about nutrition? Ask it here.
Gabby reads every question and answers personally.
```
Header in Permanent Marker white. Subtext in Oswald gray.

**Question submission form:**
- Text area: `#1A1A1A` background, `#2A2A2A` border, white text, Oswald 18px
- Placeholder text: "What do you want to know about fueling your athlete?"
- Submit button: `#FF2D78` background, Oswald Bold uppercase white — "ASK GABBY"
- On submit: question appears immediately in the feed with a "Waiting for Gabby" tag in muted gray

**Question feed:**
Each question displays as a card:
```
┌─────────────────────────────────────────────────┐
│ [Member name] · [time ago]                       │
│                                                  │
│ Question text here in Oswald white 18px          │
│                                                  │
│ ┌─────────────────────────────────────────────┐ │
│ │ GABBY · MAZEPERFORMANCE                     │ │
│ │ Answer text here in Oswald white 18px       │ │
│ └─────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

- Question card background: `#141414`
- Answer block background: `#1A1A1A`, left border 3px `#FF2D78`
- "GABBY · MAZEPERFORMANCE" label: Oswald spaced caps, `#FF2D78`, 12px
- Unanswered tag: "Waiting for Gabby" in Oswald italic `#A0A0A0`
- Cards sorted: unanswered questions first, then answered, both in reverse chronological order

**Admin view (Gabby only — shown when logged in as admin):**
- Below each unanswered question: a text area and "Post Answer" button
- "Post Answer" button: `#982FF7` background, white Oswald text
- Once answered, the answer block replaces the admin input

---

### EMAIL NOTIFICATION (Supabase Edge Function)

Create a Supabase Edge Function that triggers on INSERT to the questions table and sends an email to Gabby's address with:

- Subject: "New Nutrition Question from [Member Name]"
- Body: the question text + a direct link to the Q&A section of the site
- Use Resend or Postmark as the email provider (both have free tiers and simple Supabase integration)

---

## SECTION 4 — MOBILE RESPONSIVENESS

- Navigation tabs stack vertically on screens under 768px
- Fuel category buttons go to 2-column grid on mobile
- Recipe buttons go to 2-column grid on mobile
- Content cards go full width on mobile
- Q&A section stacks fully, full-width input and submit button

---

## SECTION 5 — REPLIT SETUP STEPS

Follow these steps in order in Replit:

**Step 1 — Create a new Repl**
Select React + Vite template. Name it: `mazeperformance-nutrition-library`

**Step 2 — Install dependencies**
```bash
npm install @supabase/supabase-js
npm install tailwindcss postcss autoprefixer
npm install react-router-dom
npx tailwindcss init -p
```

**Step 3 — Configure Tailwind**
In `tailwind.config.js`, add the MazePerformance brand colors as custom theme values using the hex codes listed above.

**Step 4 — Connect Supabase**
- Create a new Supabase project
- Copy the project URL and anon key into Replit Secrets as:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- Create the questions and answers tables using the schema above
- Set up Row Level Security rules as described above

**Step 5 — Add Google Fonts**
In `index.html`, add:
```html
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Oswald:wght@400;600;700&display=swap" rel="stylesheet">
```

**Step 6 — File structure**
```
src/
  components/
    Navigation.jsx          ← main tab + fuel category buttons
    NutritionGuide.jsx      ← main tab content
    FuelCategory.jsx        ← overview + recipe navigation
    Overview.jsx            ← overview page template
    RecipePage.jsx          ← recipe page template
    AskGabby.jsx            ← Q&A section
    QuestionCard.jsx        ← individual question + answer display
    AdminAnswerForm.jsx     ← Gabby's answer input (admin only)
  lib/
    supabase.js             ← Supabase client initialization
  App.jsx                   ← main layout and routing
  main.jsx
  index.css
```

**Step 7 — Authentication guard**
Wrap the entire page in an auth check using Supabase Auth. If the user is not logged in, redirect to the login page. The nutrition library is members-only.

**Step 8 — Admin role check**
In Supabase, add a `is_admin` boolean column to the auth.users metadata for Gabby's account and set it to true. In the frontend, check this value to conditionally render the admin answer form.

**Step 9 — Deploy**
Use Replit's built-in Deploy button to publish. Connect the deployed URL to the members site navigation.

---

## CONTENT TO ADD LATER

The following content is placeholder in this build and needs to be written and added:

- All 50 recipe names and full recipe content (10 per fuel category)
- Full Nutrition Guide editorial copy for all five sections
- All five fuel category overview copy (drafts are provided above as starting points)

These can be added directly in the component files as static content, or stored in a Supabase `content` table if Gabby wants to edit them without touching code in the future.

---

*MazePerformance.ai · Nutrition Library · Built for Courtside Conversations · Gabby Cole*
