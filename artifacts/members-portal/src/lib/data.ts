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

// ── VIDEO GAME LIBRARY helpers ────────────────────────────────────────────────

export const VGL_TOPIC_TITLES: Record<string, string> = {
  "emotional-rollercoaster": "Emotional Rollercoaster",
  "favoritism": "Favoritism",
  "rewired-for-dopamine": "Rewired for Dopamine",
  "perceived-coachability": "Perceived Coachability",
  "sports-as-developmental-program": "Sports as a Developmental Program",
  "anatomy-of-teachable-moments": "The Anatomy of Teachable Moments",
  "coaching-from-sidelines": "Coaching From the Sidelines",
  "landscape-2": "Landscape 2",
  "landscape-3": "Landscape 3",
  "tournament-fuel": "Tournament Fuel",
  "safety-space-repetition": "Safety Space and Repetition",
  "aligning-parents-athletes-coaches": "Aligning Parents, Athletes and Coaches",
  "the-coaches-kid": "The Coaches Kid",
  "coaches-are-people": "Coaches Are People",
  "ownership": "Ownership",
  "them-problem-1": "Them Problem 1",
  "how-does-the-coach-choose-the-lineup-1": "How Does the Coach Choose the Lineup 1",
  "perception-1": "Perception 1",
  "pressure-is-a-privilege": "Pressure Is a Privilege",
  "the-long-game": "The Long Game",
  "why-coaches-have-teams-play-up": "Why Coaches Have Teams Play Up",
  "visualization": "Visualization",
  "the-utility-player": "The Utility Player",
  "silent-processing": "Silent Processing",
  "athlete-archetypes": "Athlete Archetypes",
};

export const VGL_WATCH_FIRST_IDS: Record<string, string> = {
  "emotional-rollercoaster":              "rVDplW3kvPE",
  "favoritism":                           "rVfiRnkh9rM",
  "rewired-for-dopamine":                 "XaLaYHEKJ_w",
  "perceived-coachability":               "-pDwOZZOcUQ",
  "sports-as-developmental-program":      "YgsNmE9TD7E",
  "anatomy-of-teachable-moments":         "u4qvL6Um1BI",
  "coaching-from-sidelines":              "j1J98ygI6uU",
  "landscape-2":                          "M3kq-3QQ96Q",
  "landscape-3":                          "AWIECTeaWPA",
  "tournament-fuel":                      "Xtjszx4vxrs",
  "safety-space-repetition":              "o5ta44SvMLs",
  "aligning-parents-athletes-coaches":    "WJ-R9Fm0Vsk",
  "the-coaches-kid":                      "g8sqNK1z0GE",
  "coaches-are-people":                   "d8tZ1xUkhms",
  "ownership":                            "LTk81zSrV74",
  "them-problem-1":                       "iTMrnnLu4uA",
  "how-does-the-coach-choose-the-lineup-1": "4N1q7pDKjsA",
  "perception-1":                         "4Eno0OfimlE",
  "pressure-is-a-privilege":              "aphDXpC5hc4",
  "the-long-game":                        "cWEN4Q4LMt4",
  "why-coaches-have-teams-play-up":       "4KJKTrXva5c",
  "visualization":                        "KLhTgyHtpeo",
  "the-utility-player":                   "04tCZmWCNJI",
  "silent-processing":                    "p7IT9r3jJ6s",
  "athlete-archetypes":                   "sTqD4uOIpzM",
};

export const VGL_STANDARD_LESSONS: Lesson[] = [
  { id: "watch-first", title: "This Is Where It Starts - The Instagram Video", type: "watch-first", free: true, youtubeId: "PLACEHOLDER" },
  { id: "deep-dive", title: "Let's Break That Down", type: "lesson", free: true, youtubeId: "PLACEHOLDER" },
  { id: 2, title: "Lesson 2", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
  { id: 3, title: "Lesson 3", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
  { id: 4, title: "Lesson 4", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
  { id: 5, title: "Lesson 5", type: "lesson", free: false, youtubeId: "PLACEHOLDER" },
];

// ── COURTSIDE COURSES (7 sections, all visible in grid) ──────────────────────

export const COURTSIDE_COURSES: Course[] = [
  {
    id: "your-starting-point",
    title: "Your Starting Point",
    description: "Train for your season wherever you are in the year.",
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
    description: "Training under pressure mental reps that carry into games.",
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
      "emotional-rollercoaster",
      "favoritism",
      "rewired-for-dopamine",
      "perceived-coachability",
      "sports-as-developmental-program",
      "anatomy-of-teachable-moments",
      "coaching-from-sidelines",
      "landscape-2",
      "landscape-3",
      "tournament-fuel",
      "safety-space-repetition",
      "aligning-parents-athletes-coaches",
      "the-coaches-kid",
      "coaches-are-people",
      "ownership",
      "them-problem-1",
      "how-does-the-coach-choose-the-lineup-1",
      "perception-1",
      "pressure-is-a-privilege",
      "the-long-game",
      "why-coaches-have-teams-play-up",
      "visualization",
      "the-utility-player",
      "silent-processing",
      "athlete-archetypes",
    ].map((slug) => ({
      id: slug,
      title: VGL_TOPIC_TITLES[slug] ?? slug,
      lessons: VGL_STANDARD_LESSONS.map((l) =>
        l.id === "watch-first"
          ? { ...l, youtubeId: VGL_WATCH_FIRST_IDS[slug] ?? "PLACEHOLDER" }
          : l
      ),
    })),
  },
];

// ── MINDSYSTEM COURSES ───────────────────────────────────────────────────────

export const MINDSYSTEM_COURSES: Course[] = [
  {
    id: "athlete-compass-training",
    title: "Athlete Compass Training",
    description: "Complete athlete journal video training MAZE model walkthrough",
    tier: "independent",
    gradientFrom: "#2B8BF5",
    gradientTo: "#982FF7",
    lessons: [
      { id: 1, title: "Getting Started", youtubeId: "PLACEHOLDER" },
      { id: 2, title: "Bold Commitment", youtubeId: "PLACEHOLDER" },
      { id: 3, title: "Mindset Bold Dreams", youtubeId: "PLACEHOLDER" },
      { id: 4, title: "Analyze Bold Promises", youtubeId: "PLACEHOLDER" },
      { id: 5, title: "Zero In Bold Focus", youtubeId: "PLACEHOLDER" },
      { id: 6, title: "Execute Fear Break", youtubeId: "PLACEHOLDER" },
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
    lessons: [{ id: 1, title: "Welcome Start Here", youtubeId: "PLACEHOLDER" }],
  },
  {
    id: "parent-training-core",
    title: "Parent Training Core",
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
    lessons: [{ id: 1, title: "Welcome Start Here", youtubeId: "6sSWsLJkML0" }],
  },
  {
    id: "parent-training-supported",
    title: "Parent Training Supported",
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
    lessons: [{ id: 1, title: "Welcome Start Here", youtubeId: "PLACEHOLDER" }],
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
    title: "Courtside Conversations Monthly Live",
    schedule: "First Wednesday of every month",
    time: "Time TBD",
    zoomLink: "https://us06web.zoom.us/j/84822211832?pwd=AWt9vQuOBWRrJn2fW2zRn3dxA5mvB3.1",
    tier: "courtside",
    recurring: true,
  },
  {
    id: "supported-parent-wed",
    title: "Parent Group Call",
    schedule: "Every two weeks Wednesdays",
    time: "Wed 9–10am PST / 12–1pm EST",
    zoomLink: "https://us06web.zoom.us/j/89001209304?pwd=In8b1x1uFjeWcykIsdI7Y7bE8Ubu0b.1",
    tier: "supported",
    recurring: true,
  },
  {
    id: "supported-parent-sun",
    title: "Parent Group Call",
    schedule: "Every two weeks Sundays",
    time: "Sun 4–5pm PST / 7–8pm EST",
    zoomLink: "https://us06web.zoom.us/j/88599501011?pwd=nHbIQAgo20V9R3wJmGAliz7fybxia7.1",
    tier: "supported",
    recurring: true,
  },
  {
    id: "supported-athlete-wed",
    title: "Athlete Group Call",
    schedule: "Every two weeks Wednesdays",
    time: "Wed 5:30–6:30pm PST / 8:30–9:30pm EST",
    zoomLink: "https://us06web.zoom.us/j/81438893737",
    tier: "supported",
    recurring: true,
  },
  {
    id: "supported-athlete-sun",
    title: "Athlete Group Call",
    schedule: "Every two weeks Sundays",
    time: "Sun 12–1pm PST / 3–4pm EST",
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
  { week: 3, title: "Build the Foundation", tasks: ["Athlete completes MAZE model Analyze section", "Parent Training Lesson 2 unlocks", "Complete habit tracker setup"] },
  { week: 4, title: "Zero In", tasks: ["Athlete identifies 3 focus skills", "Parent reviews three skill blueprint", "Coach conversation", "Group call check in"] },
  { week: 5, title: "Execute", tasks: ["Athlete builds execution map", "Habit tracker begins", "Game and practice pages active"] },
  { week: 6, title: "Midpoint Check", tasks: ["Monthly reflection", "Group call midpoint discussion", "Review habit tracker data"] },
  { week: 7, title: "Deepen the Work", tasks: ["Skill milestone check", "Parent accountability checklist review", "Curate a learning experience"] },
  { week: 8, title: "Stay the Course", tasks: ["Group call", "Review shared language usage", "Coach communication check in"] },
  { week: 9, title: "Push Through", tasks: ["Identify the conversation you've been avoiding", "Athlete post-game reflection review", "Parent habit tracker reflection"] },
  { week: 10, title: "Two Weeks Left", tasks: ["Complete progress assessment on 3 focus skills", "Prepare for end of 12 week milestone", "Group call final push"] },
  { week: 11, title: "Final Stretch", tasks: ["Athlete reflection what worked, what didn't", "Parent reflection", "Prepare end of season conversation"] },
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
  workbookUrl?: string;
  benchGuideUrl?: string;
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

const EXECUTE_OVERVIEW_COPY = `Here is what each tool is for and when you use it.

THE EXECUTION MAP
Use it: Before the season starts and every time you need to remember what you are building. This page holds your season goal, team goal, individual contribution, three focus skills, and checkpoints. When things get hard this season open this page first. Read it. Then decide what to do next.

THE HABIT TRACKER
Use it: Every single day. Thirty seconds before bed. Mark honestly. Completed, partial, or missed. No erasing. Review weekly to see patterns. Review monthly to adjust which habits you are tracking.

THE ACCOUNTABILITY CHECKLIST
Use it: Weekly. At the start of each week to set your intention and at the end to see how you did. This is your structure. Not your judge. It shows you what consistent commitment actually looks like in practice.

GAME TIME PAGES
Use it: Before and after every competition. Every single one. Before three coach instructions, three one-word cues. After three triumphs, three improvements, honest satisfaction check.

PRACTICE TIME PAGES
Use it: Before and after every practice session. Before set three intentions. After reflect on follow-through, write coach instructions, check in emotionally.

CHECKPOINTS
Use them: Early season to set your baseline. Mid-season to assess and adjust. End of season to close the loop and build forward. At each checkpoint rescore your skills, look at what is working, identify one thing to change or carry forward. Great athletes do not start over every season. They build forward.

THE RULE TO REMEMBER
Practice is permission to learn. Games are responsibility to apply.
Know which one you are in every time you walk into the gym. That one distinction will change how you compete.`;

const EXECUTE_SUB_SECTIONS = (suffix: string): MSSubSection[] => [
  { id: `overview${suffix}`, title: "Overview", lessons: [
    { id: 1, title: "Overview", videoId: "WmWHdoWHqx0", description: EXECUTE_OVERVIEW_COPY },
  ]},
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

const ONBOARDING_HOW_TO_COPY = `The athletes who grow the most are not the most talented.

They are the most intentional.

That is the whole premise of this program. And it is the reason you are here.

Not because something is wrong with you. Not because you are behind. Because you are choosing to be intentional about your development and that choice, made consistently over a full season, is what separates athletes who plateau from athletes who build.

Now here is what you need to know before you open your journal for the first time.

I am going to tell you exactly what this system is, what it is not, and how it works. Not to overwhelm you. To give you the clearest possible starting point.

Because Compass athletes do not show up and figure it out as they go. They understand the system before they start using it.

So let us go.

This journal is your gateway to taking charge of your own development. Not your coach's development plan for you. Not your parent's vision for your season. Yours.

When you work through this system when you actually do the work, not just read through it three things happen.

You get clear on what you are actually working toward and why it matters to you specifically.

You learn to make better decisions. In practice. In games. Under pressure. When nobody is watching and when everyone is.

And you develop the ability to use feedback instead of fearing it. To see a hard conversation with your coach as information rather than criticism. To look at a bad game as data rather than identity.

That is what this journal builds. Not just a better athlete. A more self-aware, more intentional, more resilient person. And that person shows up everywhere not just on the court.

Here is the system. Four phases. The MAZE model.`;

const MINDSET_HOW_TO_COPY = `Your journal is open. Here is exactly what to do with each page.

THE WHY PAGE
This is the first page in your Mindset section. It asks what you love about the game and what you bring to your team.
Do not write what sounds impressive. Do not write what you think you should say. Write what is actually true even if nobody else ever sees it.
The more honest this page is, the stronger everything built after it becomes. If you wrote your answers in your workbook before your journal arrived read them, adjust anything that has changed, and write your final version here.

THE VISUALIZATION PAGE
This page asks you to imagine yourself at the peak of your volleyball career.
This is not fantasy. You are not picturing everything going perfectly. You are picturing how you compete. How you respond under pressure. How you carry yourself when things do not go your way.
Write that athlete. Be specific. What does she do in the two seconds after a mistake? How does she walk onto the court before a big game? What does she say to herself when things get hard?
This page is about standards not outcomes.

YOUR HEROINE
You already chose her in your workbook. Now write her here permanently.
Three things on this page. Who she is. Why you chose her. And one quality she has that you are actively building in yourself right now.
Keep this page visible. When pressure hits and you do not know what to do come back here and ask: what would she do in this moment?

YOUR MANTRA
You drafted this in your workbook. Now write your final version here.
Five words or less. Your voice. A decision not a wish.
Use I am, I will, or I can. No negative words. You are not arguing with doubt. You are replacing it.
Write it large. This is the most-used page in the entire journal. You will come back to it all season.
Once it is written share it with your parent and your accountability buddy. Not for approval. So they know what to say when you need to hear it most.

YOUR INNER VOICE PATTERN
This page asks you to name the pattern. When does your inner voice get the loudest? What does it say?
Write it down exactly. The specific moment. The specific words it uses.
Then below that write your mantra. Right next to the voice that tries to take you down. That is the replacement. That is the work.
You do not have to believe every thought you think. This page proves it.

COMPLETING THIS SECTION
Before you move to Analyze make sure all five Mindset pages are filled in.
Your why. Your visualization. Your heroine. Your mantra. Your inner voice pattern.
Every page complete. Every answer honest.
When they are done you have a foundation. Everything built in the rest of this program sits on top of what you just wrote here.`;

const ANALYZE_HOW_TO_COPY = `Your journal is open. Here is exactly what to do with each page.

YOUR SEASON GOALS PAGE
This is the first page in your Analyze section. Write two or three goals for this season.
If you wrote these in your workbook before your journal arrived read them again. Have they changed? Are they still true? Write your final version here.
These do not need to be perfect yet. You are choosing direction, not making a promise. Write what you actually want not what sounds impressive.

THE HABIT TABLE
This is the main page of the Analyze section. It has four columns.
Before you fill it in read this.
You are not judging yourself here. You are not making a list of everything wrong with you. You are connecting dots. Habit to emotion to outcome to goal. That's it.
Start by choosing three to five habits that you know matter to your performance. Not ten. The honest three to five.
Column one write the habit exactly as it actually is. Not how you want it to be. What you actually do.
Column two write the emotion that habit creates. One word. Tired. Focused. Anxious. Sharp. Sluggish. Calm. Whatever is true.
Column three write the outcome you see on the court because of this habit. Be specific. Not just good or bad. What actually happens.
Column four yes or no. Does this habit support the goals you wrote on the previous page?
Fill in every row completely before you move to the next habit.

THE LANGUAGE RULE
Once your table is complete look at every row where you wrote No in column four.
For each No habit you are going to write a replacement. Not what you will stop doing. What you will start doing instead.
Not stop staying up late. Write I go to sleep by 9:30pm.
Not stop eating junk before practice. Write I eat a real meal two hours before practice.
Your brain works better with a target than a restriction. Give it something to move toward.
Write your positive replacement next to every No in the table.

YOUR CARRY-FORWARD LINE
At the bottom of the Analyze section you will see a carry-forward prompt.
Write this hold onto your No habits. They become your building blocks in the next section.
You are not throwing them away. You are saving them. Zero In is where you decide which ones to work on first.

COMPLETING THIS SECTION
Before you move to Zero In make sure both Analyze pages are complete.
Your season goals. Your habit table with all four columns filled in. Your positive replacement for every No habit.
Every row honest. Every answer yours.
When this section is done you know something most athletes never know. You know exactly what is helping you and exactly what is getting in your way.
That is your data. Now you get to use it.`;

const ZERO_IN_HOW_TO_COPY = `Your journal is open. Here is exactly what to do with each page.

THE SATISFACTION WHEEL
This is the first page in your Zero In section. You will see a wheel with performance categories around the outside.
Rate your satisfaction in each category from one to ten. Not your talent level. Your satisfaction how confident and consistent you feel in that area right now.
Use a different color from any previous ratings so you can see the contrast clearly at mid-season and end of season.
When every category is rated shade in the wheel from the center outward. Low scores get a little shading. High scores get more. Step back and look at the full picture.
Where is the wheel full? Where is it empty? Which empty areas if filled in would move you closest to your season goal?
That question is your filter for the next page.

YOUR THREE FOCUS AREAS
Look at your season goal from the Analyze section. Read it again before you write anything here.
Now choose three categories from your wheel. Not the three lowest scores. The three that matter most for your specific goal.
Write them here. These are your focus areas for this season.
Below each one write one sentence about why this area matters for your goal. Not a long explanation. One honest sentence.

SKILLS AND ACTIONS
For each of your three focus areas fill in two things.
First your skill. The specific technical thing you are working to improve in practice. Be precise. Not just passing. What specifically about passing. The more specific you are here the more useful your practice time becomes.
Second your actions. What you will do outside of practice to support this skill. Write only actions you can actually do. Vague does not count. Specific counts.
One to two skills per focus area. One to two actions per focus area. That is enough.

THE COACH CONVERSATION PAGE
This page has the script you will use to share your focus areas with your coach.
Fill in the blanks with your actual goal and your three actual focus areas.
Then practice saying it out loud before you have the conversation. Not reading it. Saying it. Your coach needs to hear it from you directly not read it off a page.
Write the date when you had the conversation. That date matters. It is the moment your coach becomes a partner in your development instead of just the person running practice.

YOU VERSUS YOU
At the bottom of the Zero In section you will find the You vs. You reminder.
Write your beginning-of-season satisfaction scores for your three focus areas. These are your baseline. Everything from here is measured against this not against anyone else in the gym.
At mid-season and at the end of the season you will come back to this page and re-rate the same three areas. The distance between where you started and where you are is your progress.
Nobody else's wheel. Nobody else's baseline. Yours.

COMPLETING THIS SECTION
Before you move to Execute make sure all Zero In pages are complete.
Your wheel rated and shaded. Your three focus areas chosen and connected to your goal. Skills and actions written for each one. Coach conversation prepared. Beginning scores recorded.
When this is done you have a plan. Not a hope. A specific plan built around your specific goals with your specific coach aligned to it.
That is what Execute builds on.`;

const EXECUTION_MAP_HOW_TO_COPY = `SEASON GOAL
Write the goal you defined in Analyze. If it has become clearer or shifted since then write the most current version. One sentence. Honest.

TEAM GOAL
Ask your coach if you do not know this yet. Write it here once you do. This is not optional. Your individual work needs to connect to something larger than your own stats.

YOUR INDIVIDUAL CONTRIBUTION
What does your team specifically need from you this season? Not just your position. Your actual contribution to the team reaching its goal. Write that.

YOUR THREE FOCUS SKILLS
Transfer from your Zero In section. For each one the skill category, the specific technical focus inside it, and the intangible behind it. All three levels.

CHECKPOINTS
Three moments across the season beginning, mid-season, and end. Each time you return to this page and rate your progress on each of your three focus skills from one to ten.
Where you started. Where you are. Where you finished. That distance is your growth.
Not to judge yourself. To see how far you came.

IF YOU ARE DOING THESE YOU ARE BUILDING
This is the last section of the page. Return to it whenever you need to know if you are on track.

YOUR DAILY RECORD
Journal before and after every practice and game day. Set intentions before. Reflect after. Every session.

YOUR INNER VOICE
Say your mantra three times a day. Morning. Before practice. Before bed. Three reps. Every day. This is how you train the inner voice the same way you train any skill.

YOUR TRIANGLE
Communicate with your ecosystem. Your parents. Your coach. Your teammates. Keep the lines open. Ask for feedback. Share what you are working on.

TRACK WHAT MATTERS
Use your habit tracker every single day. Thirty seconds before bed. Honest marks. No erasing.
If you are doing these four things you are making progress. Even when it does not feel like it.
On the days nothing is working come back to these four. That is enough.

HOW TO USE THIS PAGE ALL SEASON
Before games read your mantra, team goal, and three skills. Thirty seconds.
Your mantra is your pause button. Your inner voice will show up after mistakes and in pressure moments. Your mantra is what you say back to it in those two seconds. It lives here so you never have to go looking for it.
After hard stretches open this page before you open anything else. Read what you decided to build. Then get back to work.
At each checkpoint rate yourself honestly. Update anything that has shifted.

YOUR WHY
This is your why. The real one. The one you wrote on page one of this workbook. When everything feels hard your why is the thing that reminds you why you started.
This page does not expire. Come back here all season long.`;

const HABIT_TRACKER_HOW_TO_COPY = `Your journal is open to the Habit Tracker page. Here is exactly how to set it up and use it every day.

SETUP DO THIS ONCE PER MONTH
Write the month at the top of the page.
Choose your three colors one for Completed, one for Partial, one for Missed. Write the key at the top so you do not forget which is which.
Choose no more than seven habits. Write each one in positive language what you will do, not what you will stop doing.
Your habits should connect directly to your Zero In focus skills and intangibles. These are not random improvements. They are the daily behaviors that build what you are working on this season.

DAILY USE THIRTY SECONDS BEFORE BED
Look at each habit. Mark the color that matches what actually happened today.
Completed you did the full thing. Partial you did some of it. Missed you did not do it.
No erasing. No lying. The honest marks are the valuable ones.

WEEKLY REVIEW TWO MINUTES
Look at the week. Which habits are consistent? Which keep falling off? Is there a pattern in when or why you miss?
No emotion. Just information.

MONTHLY REVIEW FIVE MINUTES
Look at the full month. What is working? What keeps not sticking? Do any habits need to be rewritten to be more realistic? Do any need to be swapped for something more relevant right now?
The tracker is allowed to evolve. Your honesty is not.

THE RULE THAT MAKES THIS WORK
Progress does not come from being perfect. It comes from being honest.
Mark what happened. See what the data says. Adjust. Repeat.`;

const GAME_TIME_HOW_TO_COPY = `Your journal is open to a Game Time page. Here is exactly what to do before and after every competition.

BEFORE THE GAME COMPLETE BEFORE YOU ARRIVE
Three coach instructions. Write the specific things your coach told you this week. Their exact words. Not general advice. What they specifically said to you.
Three one-word cues. Turn each instruction into one word. The word that puts that instruction in your body instantly. One word per instruction. That is all your brain needs under pressure.
Visualization. Two to three minutes. Eyes closed. See yourself walking into the gym. See yourself executing your three focus skills the way you have been training. Not perfectly the way you have trained. Trust what you have built.

DURING THE GAME THE MID-GAME RESET
When something goes wrong mid-competition three steps.
Step one Breathe. One intentional breath. That is the gap between what just happened and what comes next.
Step two Your one-word cue. The word you wrote before the game. Say it. It moves you from emotional to analytical instantly.
Step three Next play. Let go. Move forward.
The standard: your teammates should not be able to tell what play caused the panic.
Feel it. Reset. Move. That is composure in action.

AFTER THE GAME SIXTY MINUTES FIRST
Before you open your journal give yourself sixty minutes of nothing.
No group text. No replaying mistakes. No film. No opinions from anyone else.
Eat. Hydrate. Walk. Shower. Rest.
Let the emotion move through you without trying to analyze it. When you feel reset not perfect, just reset then open the journal.
Reacting is not reflecting. Give your brain the space to know the difference.

AFTER THE GAME BEFORE YOU SLEEP
Three triumphs. Three things you did well today. Physical and mental both count. Resetting after an error is a triumph. Communicating in a hard moment is a triumph. Find three. Every game. No matter how it went.
Three areas to improve. Specific. Name the moment. Name the adjustment. Not I need to play better what specifically happened and what would you do differently.
Satisfaction check. Am I satisfied with how I competed today? Not the score. How you competed.
If yes what specifically contributed to that? If no what one thing would you change?

THE RULE TO REMEMBER
Games are not for fixing. They are for applying.
Trust your preparation. Compete with what you have. Learn from what happens.
One game is one data point. The pattern of how you compete all season is who you are becoming.`;

const PRACTICE_TIME_HOW_TO_COPY = `Your journal is open to a Practice Time page. Here is exactly what to do before and after every session.

BEFORE PRACTICE THREE INTENTIONS
Write three intentions before warmup starts. Not one. Three.
They need to be active from the very first rep. Warmup is your first measuring stick not a formality. If composure is an intention, your first missed pass in warmup is where it starts.
One breath before you step on the court. That is the transition from the person who walked in to the athlete who is about to train.
If you cannot think of three look at your Execution Map. Your three focus skills are always a valid source.

AFTER PRACTICE TWO QUESTIONS
Question one What did my coach tell me today?
Write three individual instructions. Their exact words. Not team instruction what they told you specifically.
These are your cue candidates. If your coach keeps repeating the same thing turn it into a one-word cue before your next game.

Question two Did I achieve my pre-practice intentions?
Yes or no for each of your three intentions.
Not kind of. Not mostly. Yes or no.
This is the accountability habit. You said you were going to do something before you stepped on the court. Did you?

THE HONEST REFLECTION
Did I do what I said I was going to do?
If yes how hard was it and what made it possible?
Easy means the habit is forming. Hard but yes means you are building mental strength. Write down what conditions helped so you can recreate them.
If no how hard was it and what got in the way?
Was it the drill? The energy in the gym? Something internal?
Whatever the answer that is exactly what you practice next time to make it easier.
You are not grading yourself. You are training yourself to be more intentional every session until showing up with purpose is just who you are.

THE RULE TO REMEMBER
Practice is permission to learn. Urgency starts at rep one.
The rep that stays with you is the one you actually paid attention to.`;

const ACCOUNTABILITY_CHECKLIST_COPY = `Accountability does not mean pressure.

It means structure.

And here is the difference. Pressure comes from outside from expectations, from judgment, from the fear of what happens if you do not measure up. Structure comes from inside from a clear agreement you made with yourself about what showing up actually looks like.

The accountability checklist is structure. Nothing more.

It shows you what honoring your commitment to this journal looks like in practice. Not in theory. In the actual daily and weekly pattern of your life during a season.

HERE IS WHAT IS ON IT

Journal before and after practice. Not a long entry. Three intentions before. Three reflections after. Five to ten minutes total. This is the habit that turns practice from something you just show up to into something you actually develop from.

Reflect after games. Before you go to sleep on game nights open your journal. Three things you did well. Three areas to improve. Your honest answer to how you competed. This keeps you in a learning relationship with your own performance instead of just reacting to results.

Communicate with your coaches. This means using your focus skills in conversations with your coach not just waiting for feedback to come to you. Proactive. Intentional. Ongoing.

Use your habit tracker daily. Thirty seconds. Every day. This is the one that most athletes let slip first. And it is the one that shows you the most about your patterns over time.

HERE IS WHAT I WANT YOU TO UNDERSTAND ABOUT THIS CHECKLIST

When athletes say this system worked for them when they come back at the end of a season and say something real changed this year it is almost always because they followed this list. Consistently. Even on the days they did not feel like it. Even on the weeks when everything was hard.

Not perfectly. Consistently.

The checklist is not asking you to be perfect. It is asking you to keep showing up.

Miss a day start the next one. Have a week where everything falls apart come back to the checklist on Monday. The athletes who benefit from this program most are not the ones with the best talent or the clearest goals. They are the ones who keep coming back.

Use this checklist as a support. Not as a scorecard. It is there to make showing up easier not to give you one more thing to feel bad about when you miss.

At the end of each week take two minutes with this checklist. Not to grade yourself. To see what you followed through on and what needs attention next week.

Then pick one thing to tighten up. Not four things. One.

That is how this stays sustainable across a whole season.`;

const CHECK_POINTS_HOW_TO_COPY = `Use this page every time you do a checkpoint weekly, monthly, mid-season, and end of season. Same three questions every time.

AM I ON TRACK?
Before anything else look at your habit tracker and your practice and game pages. Use that data to answer honestly. Not a feeling. Not a hope. What does the data actually show?

CHECK IN WITH YOUR PEOPLE
These are conversations not pages you fill in alone.
Talk to your accountability buddy. Talk to your parent. Talk to your coach. Check in with yourself.
The checkpoint only works when your ecosystem is in it with you.

THE THREE QUESTIONS ASK THEM EVERY TIME
What got better?
Look at your data. Name one specific thing that is actually improving.

What got harder?
Name what is struggling. A habit falling off. An intention not showing up. No judgment just honest.

What is the one change I will make next week?
Not five. One. The adjustment that directly addresses what got harder.

THE AUDIT THREE AREAS
Your habits.
Is a habit getting easy? It may be time to swap it for something you are still building.
Is a habit consistently falling off? Adjust the approach not the standard.

Your cues.
Is your mantra still landing? Is it still your voice?
Are your one-word cues still the right words for where your skills are right now?
Update anything that has gone flat.

Your ecosystem.
How are conversations going with your coach, your parent, your teammates, and yourself?
Is your coach still giving you individual feedback you are capturing?
Is your inner voice getting quieter or louder?
Tighten what has loosened. Adjust what has drifted.

THE RULE TO REMEMBER
Adjust what is not working. Keep doing what is. Then go back to work.`;

const REFLECTION_HOW_TO_COPY = `Your season is coming to an end. And before you close this journal and move on to whatever comes next stop and actually look at what you built. Not quickly. Not with the pressure to feel a certain way about it. With honest eyes and a full breath.

Because here is the truth about progress. You have been in it every single day. You cannot always see progress when you are standing inside it. You need to step back. That is what the reflection section is for.

This is not about judging the season. It is about acknowledging it. Celebrating what grew. Understanding what did not. And carrying everything you learned into the next chapter of your journey.

That is what great athletes do. They do not start over. They build forward. And they trust that the work they put in even when the results were not what they hoped was never wasted.

YOUR THREE FOCUS SKILLS
Go back to your three focus skills. You chose these at the beginning of the season in Zero In. You built your whole Execution Map around them. Now you are looking at them one final time.
For each skill circle the percentage that honestly reflects how much you feel you accomplished or progressed. Twenty percent. Forty. Sixty. Eighty. A hundred.
This is not a grade. It is a snapshot. An honest picture of where each skill landed at the end of this season.
Then for each skill put a plus sign next to what worked. The specific habit, the approach, the mental tool, the conversation that actually moved that skill forward. Write it down. Because that plus is something you take into next season. It is part of your foundation.
Then a negative sign next to what did not work. The thing that kept getting in the way. The habit that kept falling off. The moment that kept derailing you. Not to feel bad about it. To acknowledge it clearly so you do not repeat it next season without understanding why.

THE SATISFACTION WHEEL
Go back to the satisfaction wheel. When you started this program you rated yourself in each of the eight categories. Now you rescore.
For each category give yourself a new satisfaction rating from one to ten. Write it next to your original score. Look at the distance between where you started and where you are now.
That distance is your growth. It belongs to you. Own it.
For each category not just the three you focused on, all eight write three insights you gained this season. Something you learned about that area of your game. Something you noticed. Something a coach told you that changed how you see it. Something that surprised you.
Three insights per category. Some of them will be small. Some of them will change how you train next season. Write them all.
This is the most valuable page in your entire journal. Not because of the scores. Because of the insights. They are your personal development data built from a full season of showing up.

KEY LESSONS FOUR QUESTIONS
Answer them honestly.
Who was helpful during this journey? Name the people. Your coach. Your parent. A teammate. Your accountability buddy. Whoever showed up for you. Write their name and one sentence about the role they played and why it mattered.
What will you keep doing next season? The habits, the mental tools, the approaches that worked. Write them here.
What will you improve upon? The skills and habits that showed promise but are not there yet.
What will you start doing? Something you know you need but did not build this season. Name it.
What will you stop doing? The habit, the behavior, the pattern that you now know is costing you. Name it specifically. Because naming it is the first step to actually leaving it behind.
When you have answered all four share this with your ecosystem. Your parent. Your coach. Your accountability buddy. Not because you need their approval. Because the people who supported your journey deserve to know what you learned from it.

WHAT YOU ARE TAKING WITH YOU
Not just memories of the season. The actual tools. The actual system.
New pages. Same compass. Your journal starts fresh next season. The foundation underneath it does not. You know how to use it now. You know what to write before practice and after games. You know what the pre-game protocol feels like. You know how to reflect instead of react. The pages are blank. You are not.
What you tracked this season becomes your baseline for next. Every habit you built, every pattern you identified that is your starting point. You are not guessing where to begin next season. You have data. Use it.
Your wheel resets. Your insights don't. The things you actually learned about each area of your game travel with you.
Your mantra. Your one-word cues. Your understanding of your inner voice. Your heroine. Your three focus skills and the intangibles behind them. Nobody can take any of that. It is yours.
The compass does not stop pointing when the season ends.
You completed the MAZE. That is real. Take a breath and let that land.`;

const BOLD_COMMITMENT_HOW_TO_COPY = `Before you write a single word in this journal, there is something you need to decide.

Not whether you want to get better. I already know you do. Not whether you care about your sport. I can see that you do.

The question is simpler than that. Are you choosing this for yourself?

Not because your parents signed you up. Not because your coach suggested it. Not because you are trying to fix something someone else identified as a problem.

This is about you deciding, right now, whether you want to take responsibility for your own journey. Because this system only works for athletes who choose it. And it is completely okay if today is not that day. That is not failure. That is honesty.

HERE IS WHAT COMPASS ATHLETES CHOOSE THREE THINGS
Responsibility over excuses.
Not perfection. Not always getting it right. Responsibility. When something goes wrong, you look at your part in it before you look anywhere else.

Process over emotion.
Your emotions are real. They matter. But Compass athletes learn to run their emotions, not be run by them. You feel it. Then you examine it. Then you decide.

Control over drift.
Drift is what happens when you just react to everything around you. The outcome. The coach's mood. Your parents' energy. The scoreboard. Drift takes athletes out of their own story and makes them passengers in someone else's.
Compass athletes choose to be the driver.
Responsibility. Process. Control. That is the choice.

If that is what you want keep going. If you are not ready, that is okay. Come back when you are.

NOW OPEN YOUR WORKBOOK TO THE BOLD COMMITMENT PAGE
You are going to write three things by hand. Not typed. Not in your head.

One why are you choosing to do this? Not why someone wants you to. Why are you choosing it? In your own words.

Two what you are tired of feeling. The specific thing that made you open this journal. The frustration. The inconsistency. The feeling of being out of control. Name it.

Three what you are taking responsibility for. One specific thing in your athletic journey that you are choosing to own from this point forward.

Write those three things. Then sign your name.

This is not a homework assignment. This is initiation. The signature matters. It changes the relationship between you and this journal from something someone gave you to something you chose. Do not skip it.

YOUR ACCOUNTABILITY BUDDY
Choose an accountability buddy. Not someone who will fix you. Not someone who is going to lecture you. Someone who is doing hard things themselves and who will ask you one question every week.
Did you do the work?
That is it. One question. It could be a parent. A teammate. A friend.
Write their name in your workbook right now, below your signature. Then go tell them. Tell them what you just committed to and ask them to check in with you.

When you have done that, you are ready for the MAZE. See you in Mindset.`;

const MINDSET_WORKBOOK_URL = "/MP_ATHLETE_COMPASS_WORKBOOK_v1.pdf";

const PARENT_ONBOARDING_HOW_TO_COPY = `THE MOST INTENTIONAL PARENTS RAISE THE MOST INTENTIONAL ATHLETES.

That is what you are building toward. Not perfection. Intentionality.

WHAT THIS SYSTEM IS FOR YOU

This is not a curriculum for your athlete. She has one. This is your framework for showing up alongside her process.

It is a training system — it only works if you do the work. It is data — your habits, your patterns, your behavior tracked honestly over a season. It is a daily practice — not something you open after hard games and close when things are fine. It is yours if you choose it.

YOUR FOUR OBJECTIVES THIS SEASON

Understand what your athlete is building so you can support it without duplicating it. Identify your own patterns and how they affect her performance environment. Build the shared language that makes your ecosystem conversations useful. Prepare your responses for the ecosystem form you will submit when she completes the MAZE.

THE TWO KINDS OF SPORTS PARENTS

The manager fills the gap. The collaborator creates conditions for her to fill it herself.

The manager produces an athlete who performs well when the parent is present. The collaborator produces an athlete who performs when no one is watching.

Which one are you choosing to be this season?

[JOURNAL PAGE NEEDED] — Manager vs. Collaborator self-assessment page. Visual: Two-column checklist. Parent circles which behaviors they recognize in themselves. Add visual to training when parent compass page is confirmed.

THE DAILY LOOP — YOUR SIDE

Show up with intention — know what she is working on before you arrive. Let her lead — observe, don't evaluate. Reflect with her — one experience question, then listen. Adjust and go again — one honest change per week.`;

const ATHLETE_SECTIONS: MSSection[] = makeSections("").map((s) => {
  if (s.id === "onboarding") {
    return {
      ...s,
      lessons: [
        { id: 1, title: "Overview", videoId: "6sSWsLJkML0" },
        { id: 2, title: "How to Fill In Your Journal", videoId: "iY2Sw26vJtc", description: ONBOARDING_HOW_TO_COPY },
      ],
    };
  }
  if (s.id === "mindset") {
    return {
      ...s,
      workbookUrl: MINDSET_WORKBOOK_URL,
      lessons: [
        { id: 1, title: "Overview", videoId: "sGaambx3JSs" },
        { id: 2, title: "How to Fill In Your Journal", videoId: "hmCPXBHayZA", description: MINDSET_HOW_TO_COPY },
      ],
    };
  }
  if (s.id === "analyze") {
    return {
      ...s,
      lessons: [
        { id: 1, title: "Overview", videoId: "5fAZHN0ltZo" },
        { id: 2, title: "How to Fill In Your Journal", videoId: "M-sAKRmuwuU", description: ANALYZE_HOW_TO_COPY },
      ],
    };
  }
  if (s.id === "zero-in") {
    return {
      ...s,
      lessons: [
        { id: 1, title: "Overview", videoId: "BCbvKpzq_ZE" },
        { id: 2, title: "How to Fill In Your Journal", videoId: "_Qb-2Ux---s", description: ZERO_IN_HOW_TO_COPY },
      ],
    };
  }
  if (s.id === "bold-commitment") {
    return {
      ...s,
      lessons: [
        { id: 1, title: "Overview", videoId: "cETyRfHBSp0" },
        { id: 2, title: "How to Fill In Your Journal", videoId: "8uzOVHKeLgI", description: BOLD_COMMITMENT_HOW_TO_COPY },
      ],
    };
  }
  if (s.id === "reflection") {
    return {
      ...s,
      lessons: [
        { id: 1, title: "Overview", videoId: "z3-BlvXUFgY" },
        { id: 2, title: "How to Fill In Your Journal", videoId: "DWYXZ4mogPE", description: REFLECTION_HOW_TO_COPY },
      ],
    };
  }
  if (s.id === "execute") {
    return {
      ...s,
      subSections: s.subSections!.map((ss) => {
        if (ss.id === "execution-map") {
          return {
            ...ss,
            lessons: [
              { id: 1, title: "Overview", videoId: "nIJwk7R1oyI" },
              { id: 2, title: "How to Fill In Your Journal", videoId: "KPftH1h-S20", description: EXECUTION_MAP_HOW_TO_COPY },
            ],
          };
        }
        if (ss.id === "habit-tracker") {
          return {
            ...ss,
            lessons: [
              { id: 1, title: "Overview", videoId: "26iIiDpAT7w" },
              { id: 2, title: "How to Fill In Your Journal", videoId: "DSh7w9SXfmM", description: HABIT_TRACKER_HOW_TO_COPY },
            ],
          };
        }
        if (ss.id === "game-time") {
          return {
            ...ss,
            lessons: [
              { id: 1, title: "Overview", videoId: "dgMyec-nDrI" },
              { id: 2, title: "How to Fill In Your Journal", videoId: "_eK1cQxc_zY", description: GAME_TIME_HOW_TO_COPY },
            ],
          };
        }
        if (ss.id === "practice-time") {
          return {
            ...ss,
            lessons: [
              { id: 1, title: "Overview", videoId: "EWQoIwfG_-g" },
              { id: 2, title: "How to Fill In Your Journal", videoId: "_eK1cQxc_zY", description: PRACTICE_TIME_HOW_TO_COPY },
            ],
          };
        }
        if (ss.id === "accountability-checklist") {
          return {
            ...ss,
            lessons: [
              { id: 1, title: "Overview", videoId: "PLACEHOLDER" },
              { id: 2, title: "How to Fill In Your Journal", videoId: "PLACEHOLDER", description: ACCOUNTABILITY_CHECKLIST_COPY },
            ],
          };
        }
        if (ss.id === "check-points") {
          return {
            ...ss,
            lessons: [
              { id: 1, title: "Overview", videoId: "GhNYORwl1is" },
              { id: 2, title: "How to Fill In Your Journal", videoId: "vIKmevNXd-o", description: CHECK_POINTS_HOW_TO_COPY },
            ],
          };
        }
        return ss;
      }),
    };
  }
  return s;
});

const removeHowTo = (lessons: MSLesson[] | undefined) =>
  lessons?.filter((l) => l.title !== "How to Fill In Your Journal");

const PARENT_SECTIONS: MSSection[] = makeSections("-parent").map((s) => {
  if (s.id === "onboarding-parent") {
    return {
      ...s,
      lessons: [
        { id: 1, title: "Overview", videoId: "AWZQfiMrrhk" },
      ],
    };
  }
  if (s.id === "analyze-parent") {
    return { ...s, lessons: [{ id: 1, title: "Overview", videoId: "0sIycpdgF2g" }] };
  }
  if (s.id === "mindset-parent") {
    return { ...s, lessons: [{ id: 1, title: "Overview", videoId: "oBVbkQDYCaU" }] };
  }
  if (s.id === "bold-commitment-parent") {
    return { ...s, lessons: [{ id: 1, title: "Overview", videoId: "LrFHZSqjkAc" }] };
  }
  if (s.id === "zero-in-parent") {
    return {
      ...s,
      lessons: [{ id: 1, title: "Overview", videoId: "w-xP2NDGtk8" }],
      benchGuideUrl: "bench-athlete-guide.pdf",
    };
  }
  if (s.subSections) {
    return {
      ...s,
      subSections: s.subSections.map((ss) => ({
        ...ss,
        lessons: removeHowTo(ss.lessons) ?? ss.lessons,
      })),
    };
  }
  return { ...s, lessons: removeHowTo(s.lessons) };
});

export const MINDSYSTEM_COURSE: MindSystemCourse = {
  id: "mindsystem",
  title: "MindSystem",
  description: "Video instructions for using your MindSystem journals and MAZE model.",
  gradientFrom: "#982FF7",
  gradientTo: "#FF2D78",
  lockedTiers: ["free", "courtside"],
  tracks: [
    { id: "athlete", title: "Athlete", sections: ATHLETE_SECTIONS },
    { id: "parent",  title: "Parent",  sections: PARENT_SECTIONS },
  ],
};
