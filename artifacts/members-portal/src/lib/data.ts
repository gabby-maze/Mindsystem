export type Tier = "free" | "courtside" | "independent" | "supported" | "innerCircle";

export const TIER_COLORS: Record<Tier, string> = {
  free: "#888780",
  courtside: "#00D4C8",
  independent: "#2B8BF5",
  supported: "#982FF7",
  innerCircle: "#FF2D78",
};

export const TIER_LABELS: Record<Tier, string> = {
  free: "Free",
  courtside: "Courtside Conversations",
  independent: "Independent",
  supported: "Supported",
  innerCircle: "Inner Circle",
};

export interface Lesson {
  id: number | string;
  title: string;
  type?: string;
  free?: boolean;
  youtubeId?: string;
  timeLocked?: boolean;
  unlockCondition?: string;
  unlockWeek?: number;
  lockMessage?: string;
}

export interface Topic {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  tier: Tier;
  gradientFrom?: string;
  gradientTo?: string;
  topics?: Topic[];
  lessons?: Lesson[];
  type?: string;
  formId?: string;
}

// ── COURTSIDE COURSES (7 sections, all visible in grid) ──────────────────────

export const COURTSIDE_COURSES: Course[] = [
  {
    id: "your-starting-point",
    title: "Your Starting Point",
    description: "Train for your season — wherever you are in the year.",
    tier: "courtside",
    gradientFrom: "#982FF7",
    gradientTo: "#2B8BF5",
    topics: [
      {
        id: "summer-camp-season",
        title: "Summer Camp Season",
        lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
      },
      {
        id: "tryouts",
        title: "Tryouts",
        lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
      },
      {
        id: "fall-ball-school-ball",
        title: "Fall Ball / School Ball",
        lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
      },
      {
        id: "beginning-of-season",
        title: "Beginning of Season",
        lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
      },
      {
        id: "mid-season",
        title: "Mid Season",
        lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
      },
      {
        id: "end-of-season",
        title: "End of Season",
        lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
      },
    ],
  },
  {
    id: "pressure-practice",
    title: "Pressure Practice",
    description: "Training under pressure — mental reps that carry into games.",
    tier: "courtside",
    gradientFrom: "#FF2D78",
    gradientTo: "#C42BEE",
    lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "nutrition-library",
    title: "Nutrition Library",
    description: "Nutrition for youth athletes and families.",
    tier: "courtside",
    gradientFrom: "#00D4C8",
    gradientTo: "#2B8BF5",
    lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "book-club",
    title: "Book Club",
    description: "Curated reading for athletes and parents.",
    tier: "courtside",
    gradientFrom: "#C42BEE",
    gradientTo: "#982FF7",
    lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "bold-conversations",
    title: "Bold Conversations",
    description: "The conversations youth sports families need to have.",
    tier: "courtside",
    gradientFrom: "#FF2D78",
    gradientTo: "#982FF7",
    lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "volleyball-game-iq",
    title: "Volleyball Game IQ",
    description: "Understanding the game at a deeper level.",
    tier: "courtside",
    gradientFrom: "#2B8BF5",
    gradientTo: "#00D4C8",
    lessons: [{ id: 1, title: "Placeholder", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "video-game-library",
    title: "Video Game Library",
    description: "Deep dives on the most important topics in youth sports.",
    tier: "courtside",
    gradientFrom: "#00D4C8",
    gradientTo: "#982FF7",
    topics: [
      {
        id: "understanding-the-ecosystem",
        title: "Understanding the Ecosystem",
        lessons: [
          { id: "watch-first", title: "Watch This First", type: "watch-first", free: true, youtubeId: "PLACEHOLDER" },
          { id: 1, title: "Deep Dive", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
          { id: 2, title: "Lesson 2", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
          { id: 3, title: "Lesson 3", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
          { id: 4, title: "Lesson 4", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
          { id: 5, title: "Lesson 5", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
        ],
      },
    ],
  },
];

// ── MINDSYSTEM COURSES ───────────────────────────────────────────────────────

export const MINDSYSTEM_COURSES: Course[] = [
  {
    id: "athlete-compass-training",
    title: "Athlete Compass Training",
    description: "Complete athlete journal video training — MAZE model walkthrough",
    tier: "independent",
    gradientFrom: "#2B8BF5",
    gradientTo: "#982FF7",
    lessons: [
      { id: 1, title: "Getting Started", youtubeId: "PLACEHOLDER" },
      { id: 2, title: "Bold Commitment", youtubeId: "PLACEHOLDER" },
      { id: 3, title: "Mindset — Bold Dreams", youtubeId: "PLACEHOLDER" },
      { id: 4, title: "Analyze — Bold Promises", youtubeId: "PLACEHOLDER" },
      { id: 5, title: "Zero In — Bold Focus", youtubeId: "PLACEHOLDER" },
      { id: 6, title: "Execute — Fear Break", youtubeId: "PLACEHOLDER" },
      { id: 7, title: "Game Time", youtubeId: "PLACEHOLDER" },
      { id: 8, title: "Practice Time", youtubeId: "PLACEHOLDER" },
      { id: 9, title: "Reflection", youtubeId: "PLACEHOLDER" },
    ],
  },
  {
    id: "independent-onboarding",
    title: "Independent Onboarding",
    description: "Getting started with MindSystem Independent",
    tier: "independent",
    lessons: [{ id: 1, title: "Welcome — Start Here", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "parent-training-core",
    title: "Parent Training — Core",
    description: "Your role in the MindSystem ecosystem",
    tier: "independent",
    lessons: [
      { id: 1, title: "Understanding Your Role", youtubeId: "PLACEHOLDER", free: true },
      {
        id: 2,
        title: "Shared Language in Practice",
        youtubeId: "PLACEHOLDER",
        timeLocked: true,
        unlockCondition: "maze_model_complete",
        unlockWeek: 2,
        lockMessage:
          "This lesson unlocks after your athlete completes the MAZE model section of their Compass Training (Week 2)",
      },
    ],
  },
  {
    id: "supported-onboarding",
    title: "Supported Onboarding",
    description: "Getting started with MindSystem Supported",
    tier: "supported",
    lessons: [{ id: 1, title: "Welcome — Start Here", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "parent-training-supported",
    title: "Parent Training — Supported",
    description: "Advanced parent training for Supported families",
    tier: "supported",
    lessons: [],
  },
  {
    id: "group-call-replays",
    title: "Group Call Replays",
    description: "Replays of biweekly MindSystem Supported group calls",
    tier: "supported",
    lessons: [],
  },
  {
    id: "maze-model-form",
    title: "Family MAZE Model",
    description: "Submit your family's MAZE model responses",
    tier: "supported",
    type: "form",
    formId: "MAZE-FORM-PLACEHOLDER",
  },
  {
    id: "inner-circle-onboarding",
    title: "Inner Circle Onboarding",
    description: "Getting started with MindSystem Inner Circle",
    tier: "innerCircle",
    lessons: [{ id: 1, title: "Welcome — Start Here", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "inner-circle-exclusive",
    title: "Inner Circle Exclusive Content",
    description: "Exclusive resources for Inner Circle families",
    tier: "innerCircle",
    lessons: [],
  },
];

export const ALL_COURSES = [...COURTSIDE_COURSES, ...MINDSYSTEM_COURSES];

// ── LIVE SESSIONS ────────────────────────────────────────────────────────────

export interface LiveSession {
  id: string;
  title: string;
  schedule: string;
  time: string;
  zoomLink: string;
  tier: Tier;
  recurring: boolean;
}

export const LIVE_SESSIONS: LiveSession[] = [
  {
    id: "courtside-monthly",
    title: "Courtside Conversations — Monthly Live",
    schedule: "First Wednesday of every month",
    time: "Time TBD",
    zoomLink: "https://us06web.zoom.us/j/84822211832?pwd=AWt9vQuOBWRrJn2fW2zRn3dxA5mvB3.1",
    tier: "courtside",
    recurring: true,
  },
  {
    id: "supported-parent-wed",
    title: "Parent Group Call",
    schedule: "Every two weeks — Wednesdays",
    time: "9:00 - 10:00 AM PST / 12:00 PM EST",
    zoomLink: "https://us06web.zoom.us/j/89001209304?pwd=In8b1x1uFjeWcykIsdI7Y7bE8Ubu0b.1",
    tier: "supported",
    recurring: true,
  },
  {
    id: "supported-parent-sun",
    title: "Parent Group Call",
    schedule: "Every two weeks — Sundays",
    time: "4:00 - 5:00 PM PST / 7:00 PM EST",
    zoomLink: "https://us06web.zoom.us/j/88599501011?pwd=nHbIQAgo20V9R3wJmGAliz7fybxia7.1",
    tier: "supported",
    recurring: true,
  },
  {
    id: "supported-athlete-wed",
    title: "Athlete Group Call",
    schedule: "Every two weeks — Wednesdays",
    time: "5:30 - 6:30 PM PST / 8:30 PM EST",
    zoomLink: "https://us06web.zoom.us/j/81438893737",
    tier: "supported",
    recurring: true,
  },
  {
    id: "supported-athlete-sun",
    title: "Athlete Group Call",
    schedule: "Every two weeks — Sundays",
    time: "12:00 - 1:00 PM PST / 3:00 PM EST",
    zoomLink: "https://us06web.zoom.us/j/87177408803?pwd=zb5TZjoSxZUxraHvh6QhyLVUzOlI4x.1",
    tier: "supported",
    recurring: true,
  },
];

// ── TIER ACCESS ──────────────────────────────────────────────────────────────

export const TIER_ACCESS: Record<Tier, { minTier: number }> = {
  free: { minTier: 0 },
  courtside: { minTier: 1 },
  independent: { minTier: 2 },
  supported: { minTier: 3 },
  innerCircle: { minTier: 4 },
};

const TIER_RANK: Record<Tier, number> = {
  free: 0,
  courtside: 1,
  independent: 2,
  supported: 3,
  innerCircle: 4,
};

export function hasTierAccess(userTier: Tier, requiredTier: Tier): boolean {
  return TIER_RANK[userTier] >= TIER_RANK[requiredTier];
}

// ── 12-WEEK TRAINING MAP ─────────────────────────────────────────────────────

export const TRAINING_MAP = [
  { week: 1, title: "Get Oriented", tasks: ["Complete Supported Onboarding", "Book parent onboarding call", "Book athlete onboarding call", "Join the community", "Submit shipping address for journals"] },
  { week: 2, title: "Start the Compass", tasks: ["Athlete begins Compass Training", "Parent completes Parent Training Lesson 1", "Attend first group calls", "Athlete begins MAZE model"] },
  { week: 3, title: "Build the Foundation", tasks: ["Athlete completes MAZE model — Analyze section", "Parent Training Lesson 2 unlocks", "Complete habit tracker setup"] },
  { week: 4, title: "Zero In", tasks: ["Athlete identifies 3 focus skills", "Parent reviews three skill blueprint", "Coach conversation", "Group call check in"] },
  { week: 5, title: "Execute", tasks: ["Athlete builds execution map", "Habit tracker begins", "Game and practice pages active"] },
  { week: 6, title: "Midpoint Check", tasks: ["Monthly reflection", "Group call — midpoint discussion", "Review habit tracker data"] },
  { week: 7, title: "Deepen the Work", tasks: ["Skill milestone check", "Parent accountability checklist review", "Curate a learning experience"] },
  { week: 8, title: "Stay the Course", tasks: ["Group call", "Review shared language usage", "Coach communication check in"] },
  { week: 9, title: "Push Through", tasks: ["Identify the conversation you've been avoiding", "Athlete post-game reflection review", "Parent habit tracker reflection"] },
  { week: 10, title: "Two Weeks Left", tasks: ["Complete progress assessment on 3 focus skills", "Prepare for end of 12 week milestone", "Group call — final push"] },
  { week: 11, title: "Final Stretch", tasks: ["Athlete reflection — what worked, what didn't", "Parent reflection", "Prepare end of season conversation"] },
  { week: 12, title: "12 Week Milestone", tasks: ["Complete 12 week milestone worksheet", "Have end of season conversation", "Review access for months 4-6", "Check in with digital studio"] },
];

export function getWeekProgress(enrollmentDate: string) {
  const now = new Date();
  const start = new Date(enrollmentDate);
  const daysDiff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const weekNumber = Math.min(Math.floor(daysDiff / 7) + 1, 12);
  const daysRemaining = Math.max(84 - daysDiff, 0);
  return { weekNumber, daysRemaining };
}

export const STRATEGY_SESSION_LINK = "https://link.fastpaydirect.com/payment-link/69dd9455557558e89e51f497";

// ── MINDSYSTEM COURSE ─────────────────────────────────────────────────────────

export interface MSLesson {
  id: number;
  title: string;
  videoId: string;
  description?: string;
}

export interface MSSubSection {
  id: string;
  title: string;
  lessons: MSLesson[];
}

export interface MSSection {
  id: string;
  title: string;
  lessons?: MSLesson[];
  subSections?: MSSubSection[];
}

export interface MSTrack {
  id: string;
  title: string;
  sections: MSSection[];
}

export interface MindSystemCourse {
  id: "mindsystem";
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  lockedTiers: string[];
  tracks: MSTrack[];
}

const EXECUTE_SUB_SECTIONS = (suffix: string): MSSubSection[] => [
  { id: `execution-map${suffix}`, title: "Execution Map", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `habit-tracker${suffix}`, title: "Habit Tracker", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `accountability-checklist${suffix}`, title: "Accountability Checklist", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `game-time${suffix}`, title: "Game Time", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `practice-time${suffix}`, title: "Practice Time", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `check-points${suffix}`, title: "Check Points", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
];

const makeSections = (suffix: string): MSSection[] => [
  { id: `onboarding${suffix}`, title: "Onboarding", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `bold-commitment${suffix}`, title: "Bold Commitment", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `mindset${suffix}`, title: "Mindset", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `analyze${suffix}`, title: "Analyze", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `zero-in${suffix}`, title: "Zero In", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
  { id: `execute${suffix}`, title: "Execute", subSections: EXECUTE_SUB_SECTIONS(suffix === "" ? "" : suffix.replace("execute", "")) },
  { id: `reflection${suffix}`, title: "Reflection", lessons: [
    { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
    { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER" },
  ]},
];

const MINDSET_HOW_TO_COPY = `Your journal is open. Here is exactly what to do with each page.

THE WHY PAGE
This is the first page in your Mindset section. It asks what you love about the game and what you bring to your team.
Do not write what sounds impressive. Do not write what you think you should say. Write what is actually true — even if nobody else ever sees it.
The more honest this page is, the stronger everything built after it becomes. If you wrote your answers in your workbook before your journal arrived — read them, adjust anything that has changed, and write your final version here.

THE VISUALIZATION PAGE
This page asks you to imagine yourself at the peak of your volleyball career.
This is not fantasy. You are not picturing everything going perfectly. You are picturing how you compete. How you respond under pressure. How you carry yourself when things do not go your way.
Write that athlete. Be specific. What does she do in the two seconds after a mistake? How does she walk onto the court before a big game? What does she say to herself when things get hard?
This page is about standards — not outcomes.

YOUR HEROINE
You already chose her in your workbook. Now write her here permanently.
Three things on this page. Who she is. Why you chose her. And one quality she has that you are actively building in yourself right now.
Keep this page visible. When pressure hits and you do not know what to do — come back here and ask: what would she do in this moment?

YOUR MANTRA
You drafted this in your workbook. Now write your final version here.
Five words or less. Your voice. A decision — not a wish.
Use I am, I will, or I can. No negative words. You are not arguing with doubt. You are replacing it.
Write it large. This is the most-used page in the entire journal. You will come back to it all season.
Once it is written — share it with your parent and your accountability buddy. Not for approval. So they know what to say when you need to hear it most.

YOUR INNER VOICE PATTERN
This page asks you to name the pattern. When does your inner voice get the loudest? What does it say?
Write it down exactly. The specific moment. The specific words it uses.
Then below that — write your mantra. Right next to the voice that tries to take you down. That is the replacement. That is the work.
You do not have to believe every thought you think. This page proves it.

COMPLETING THIS SECTION
Before you move to Analyze — make sure all five Mindset pages are filled in.
Your why. Your visualization. Your heroine. Your mantra. Your inner voice pattern.
Every page complete. Every answer honest.
When they are done — you have a foundation. Everything built in the rest of this program sits on top of what you just wrote here.`;

const ATHLETE_SECTIONS: MSSection[] = makeSections("").map((s) =>
  s.id === "mindset"
    ? {
        ...s,
        lessons: [
          { id: 1, title: "Overview", videoId: "sGaambx3JSs" },
          { id: 2, title: "How to Fill In Your Journal", videoId: "hmCPXBHayZA", description: MINDSET_HOW_TO_COPY },
        ],
      }
    : s
);

export const MINDSYSTEM_COURSE: MindSystemCourse = {
  id: "mindsystem",
  title: "MindSystem",
  description: "Video instructions for using your MindSystem journals and MAZE model.",
  gradientFrom: "#982FF7",
  gradientTo: "#FF2D78",
  lockedTiers: ["free", "courtside"],
  tracks: [
    { id: "athlete", title: "Athlete", sections: ATHLETE_SECTIONS },
    { id: "parent",  title: "Parent",  sections: makeSections("-parent") },
  ],
};
