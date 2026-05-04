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
  workbookUrl?: string;
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
Use it: Before the season starts and every time you need to remember what you are building. This page holds your season goal, team goal, individual contribution, three focus skills, and checkpoints. When things get hard this season — open this page first. Read it. Then decide what to do next.

THE HABIT TRACKER
Use it: Every single day. Thirty seconds before bed. Mark honestly. Completed, partial, or missed. No erasing. Review weekly to see patterns. Review monthly to adjust which habits you are tracking.

THE ACCOUNTABILITY CHECKLIST
Use it: Weekly. At the start of each week to set your intention and at the end to see how you did. This is your structure. Not your judge. It shows you what consistent commitment actually looks like in practice.

GAME TIME PAGES
Use it: Before and after every competition. Every single one. Before — three coach instructions, three one-word cues. After — three triumphs, three improvements, honest satisfaction check.

PRACTICE TIME PAGES
Use it: Before and after every practice session. Before — set three intentions. After — reflect on follow-through, write coach instructions, check in emotionally.

CHECKPOINTS
Use them: Early season to set your baseline. Mid-season to assess and adjust. End of season to close the loop and build forward. At each checkpoint — rescore your skills, look at what is working, identify one thing to change or carry forward. Great athletes do not start over every season. They build forward.

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

const ANALYZE_HOW_TO_COPY = `Your journal is open. Here is exactly what to do with each page.

YOUR SEASON GOALS PAGE
This is the first page in your Analyze section. Write two or three goals for this season.
If you wrote these in your workbook before your journal arrived — read them again. Have they changed? Are they still true? Write your final version here.
These do not need to be perfect yet. You are choosing direction, not making a promise. Write what you actually want — not what sounds impressive.

THE HABIT TABLE
This is the main page of the Analyze section. It has four columns.
Before you fill it in — read this.
You are not judging yourself here. You are not making a list of everything wrong with you. You are connecting dots. Habit to emotion to outcome to goal. That's it.
Start by choosing three to five habits that you know matter to your performance. Not ten. The honest three to five.
Column one — write the habit exactly as it actually is. Not how you want it to be. What you actually do.
Column two — write the emotion that habit creates. One word. Tired. Focused. Anxious. Sharp. Sluggish. Calm. Whatever is true.
Column three — write the outcome you see on the court because of this habit. Be specific. Not just good or bad. What actually happens.
Column four — yes or no. Does this habit support the goals you wrote on the previous page?
Fill in every row completely before you move to the next habit.

THE LANGUAGE RULE
Once your table is complete — look at every row where you wrote No in column four.
For each No habit — you are going to write a replacement. Not what you will stop doing. What you will start doing instead.
Not — stop staying up late. Write — I go to sleep by 9:30pm.
Not — stop eating junk before practice. Write — I eat a real meal two hours before practice.
Your brain works better with a target than a restriction. Give it something to move toward.
Write your positive replacement next to every No in the table.

YOUR CARRY-FORWARD LINE
At the bottom of the Analyze section you will see a carry-forward prompt.
Write this — hold onto your No habits. They become your building blocks in the next section.
You are not throwing them away. You are saving them. Zero In is where you decide which ones to work on first.

COMPLETING THIS SECTION
Before you move to Zero In — make sure both Analyze pages are complete.
Your season goals. Your habit table with all four columns filled in. Your positive replacement for every No habit.
Every row honest. Every answer yours.
When this section is done you know something most athletes never know. You know exactly what is helping you and exactly what is getting in your way.
That is your data. Now you get to use it.`;

const ZERO_IN_HOW_TO_COPY = `Your journal is open. Here is exactly what to do with each page.

THE SATISFACTION WHEEL
This is the first page in your Zero In section. You will see a wheel with performance categories around the outside.
Rate your satisfaction in each category from one to ten. Not your talent level. Your satisfaction — how confident and consistent you feel in that area right now.
Use a different color from any previous ratings so you can see the contrast clearly at mid-season and end of season.
When every category is rated — shade in the wheel from the center outward. Low scores get a little shading. High scores get more. Step back and look at the full picture.
Where is the wheel full? Where is it empty? Which empty areas — if filled in — would move you closest to your season goal?
That question is your filter for the next page.

YOUR THREE FOCUS AREAS
Look at your season goal from the Analyze section. Read it again before you write anything here.
Now choose three categories from your wheel. Not the three lowest scores. The three that matter most for your specific goal.
Write them here. These are your focus areas for this season.
Below each one — write one sentence about why this area matters for your goal. Not a long explanation. One honest sentence.

SKILLS AND ACTIONS
For each of your three focus areas — fill in two things.
First — your skill. The specific technical thing you are working to improve in practice. Be precise. Not just passing. What specifically about passing. The more specific you are here the more useful your practice time becomes.
Second — your actions. What you will do outside of practice to support this skill. Write only actions you can actually do. Vague does not count. Specific counts.
One to two skills per focus area. One to two actions per focus area. That is enough.

THE COACH CONVERSATION PAGE
This page has the script you will use to share your focus areas with your coach.
Fill in the blanks with your actual goal and your three actual focus areas.
Then practice saying it out loud before you have the conversation. Not reading it. Saying it. Your coach needs to hear it from you directly — not read it off a page.
Write the date when you had the conversation. That date matters. It is the moment your coach becomes a partner in your development instead of just the person running practice.

YOU VERSUS YOU
At the bottom of the Zero In section you will find the You vs. You reminder.
Write your beginning-of-season satisfaction scores for your three focus areas. These are your baseline. Everything from here is measured against this — not against anyone else in the gym.
At mid-season and at the end of the season you will come back to this page and re-rate the same three areas. The distance between where you started and where you are is your progress.
Nobody else's wheel. Nobody else's baseline. Yours.

COMPLETING THIS SECTION
Before you move to Execute — make sure all Zero In pages are complete.
Your wheel rated and shaded. Your three focus areas chosen and connected to your goal. Skills and actions written for each one. Coach conversation prepared. Beginning scores recorded.
When this is done you have a plan. Not a hope. A specific plan built around your specific goals with your specific coach aligned to it.
That is what Execute builds on.`;

const EXECUTION_MAP_HOW_TO_COPY = `SEASON GOAL
Write the goal you defined in Analyze. If it has become clearer or shifted since then — write the most current version. One sentence. Honest.

TEAM GOAL
Ask your coach if you do not know this yet. Write it here once you do. This is not optional. Your individual work needs to connect to something larger than your own stats.

YOUR INDIVIDUAL CONTRIBUTION
What does your team specifically need from you this season? Not just your position. Your actual contribution to the team reaching its goal. Write that.

YOUR THREE FOCUS SKILLS
Transfer from your Zero In section. For each one — the skill category, the specific technical focus inside it, and the intangible behind it. All three levels.

CHECKPOINTS
Three moments across the season — beginning, mid-season, and end. Each time you return to this page and rate your progress on each of your three focus skills from one to ten.
Where you started. Where you are. Where you finished. That distance is your growth.
Not to judge yourself. To see how far you came.

IF YOU ARE DOING THESE — YOU ARE BUILDING
This is the last section of the page. Return to it whenever you need to know if you are on track.

YOUR DAILY RECORD
Journal before and after every practice and game day. Set intentions before. Reflect after. Every session.

YOUR INNER VOICE
Say your mantra three times a day. Morning. Before practice. Before bed. Three reps. Every day. This is how you train the inner voice — the same way you train any skill.

YOUR TRIANGLE
Communicate with your ecosystem. Your parents. Your coach. Your teammates. Keep the lines open. Ask for feedback. Share what you are working on.

TRACK WHAT MATTERS
Use your habit tracker every single day. Thirty seconds before bed. Honest marks. No erasing.
If you are doing these four things — you are making progress. Even when it does not feel like it.
On the days nothing is working — come back to these four. That is enough.

HOW TO USE THIS PAGE ALL SEASON
Before games — read your mantra, team goal, and three skills. Thirty seconds.
Your mantra is your pause button. Your inner voice will show up after mistakes and in pressure moments. Your mantra is what you say back to it in those two seconds. It lives here so you never have to go looking for it.
After hard stretches — open this page before you open anything else. Read what you decided to build. Then get back to work.
At each checkpoint — rate yourself honestly. Update anything that has shifted.

YOUR WHY
This is your why. The real one. The one you wrote on page one of this workbook. When everything feels hard — your why is the thing that reminds you why you started.
This page does not expire. Come back here all season long.`;

const HABIT_TRACKER_HOW_TO_COPY = `Your journal is open to the Habit Tracker page. Here is exactly how to set it up and use it every day.

SETUP — DO THIS ONCE PER MONTH
Write the month at the top of the page.
Choose your three colors — one for Completed, one for Partial, one for Missed. Write the key at the top so you do not forget which is which.
Choose no more than seven habits. Write each one in positive language — what you will do, not what you will stop doing.
Your habits should connect directly to your Zero In focus skills and intangibles. These are not random improvements. They are the daily behaviors that build what you are working on this season.

DAILY USE — THIRTY SECONDS BEFORE BED
Look at each habit. Mark the color that matches what actually happened today.
Completed — you did the full thing. Partial — you did some of it. Missed — you did not do it.
No erasing. No lying. The honest marks are the valuable ones.

WEEKLY REVIEW — TWO MINUTES
Look at the week. Which habits are consistent? Which keep falling off? Is there a pattern in when or why you miss?
No emotion. Just information.

MONTHLY REVIEW — FIVE MINUTES
Look at the full month. What is working? What keeps not sticking? Do any habits need to be rewritten to be more realistic? Do any need to be swapped for something more relevant right now?
The tracker is allowed to evolve. Your honesty is not.

THE RULE THAT MAKES THIS WORK
Progress does not come from being perfect. It comes from being honest.
Mark what happened. See what the data says. Adjust. Repeat.`;

const GAME_TIME_HOW_TO_COPY = `Your journal is open to a Game Time page. Here is exactly what to do before and after every competition.

BEFORE THE GAME — COMPLETE BEFORE YOU ARRIVE
Three coach instructions. Write the specific things your coach told you this week. Their exact words. Not general advice. What they specifically said to you.
Three one-word cues. Turn each instruction into one word. The word that puts that instruction in your body instantly. One word per instruction. That is all your brain needs under pressure.
Visualization. Two to three minutes. Eyes closed. See yourself walking into the gym. See yourself executing your three focus skills the way you have been training. Not perfectly — the way you have trained. Trust what you have built.

DURING THE GAME — THE MID-GAME RESET
When something goes wrong mid-competition — three steps.
Step one — Breathe. One intentional breath. That is the gap between what just happened and what comes next.
Step two — Your one-word cue. The word you wrote before the game. Say it. It moves you from emotional to analytical instantly.
Step three — Next play. Let go. Move forward.
The standard: your teammates should not be able to tell what play caused the panic.
Feel it. Reset. Move. That is composure in action.

AFTER THE GAME — SIXTY MINUTES FIRST
Before you open your journal — give yourself sixty minutes of nothing.
No group text. No replaying mistakes. No film. No opinions from anyone else.
Eat. Hydrate. Walk. Shower. Rest.
Let the emotion move through you without trying to analyze it. When you feel reset — not perfect, just reset — then open the journal.
Reacting is not reflecting. Give your brain the space to know the difference.

AFTER THE GAME — BEFORE YOU SLEEP
Three triumphs. Three things you did well today. Physical and mental both count. Resetting after an error is a triumph. Communicating in a hard moment is a triumph. Find three. Every game. No matter how it went.
Three areas to improve. Specific. Name the moment. Name the adjustment. Not I need to play better — what specifically happened and what would you do differently.
Satisfaction check. Am I satisfied with how I competed today? Not the score. How you competed.
If yes — what specifically contributed to that? If no — what one thing would you change?

THE RULE TO REMEMBER
Games are not for fixing. They are for applying.
Trust your preparation. Compete with what you have. Learn from what happens.
One game is one data point. The pattern of how you compete all season is who you are becoming.`;

const MINDSET_WORKBOOK_URL = "/MP_ATHLETE_COMPASS_WORKBOOK_v1.pdf";

const ATHLETE_SECTIONS: MSSection[] = makeSections("").map((s) => {
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
        return ss;
      }),
    };
  }
  return s;
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
    { id: "parent",  title: "Parent",  sections: makeSections("-parent") },
  ],
};
