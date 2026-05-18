import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TEAL = "#00d4c8";
const PAY_LINK = "https://link.fastpaydirect.com/payment-link/69c704f5fb727d9c905d2f06";

const WHATS_INSIDE = [
  {
    emoji: "🎬",
    title: "The Video Game Library",
    body: "Every video Gabby posts on social media, plus the breakdown that goes deeper than the reel. Not just what she said. How to apply it. What it looks like in your family. What to do with it this week.",
  },
  {
    emoji: "🧠",
    title: "MindSystem Courses",
    body: "This is the implementation layer. The courses inside Courtside Conversations take everything from conversation to action, turning the frameworks, the language, and the tools into daily habits for both your athlete and your family. This is where the concepts become a practice.",
  },
  {
    emoji: "🎭",
    title: "Pressure Practice",
    body: "Real situations. Real role plays. When parents ask Gabby, what do I say when this happens? The answer lives here. The car ride home. The coach conversation. The teammate conflict. The playing time talk. Practiced out loud so it is ready when you need it.",
  },
  {
    emoji: "🏐",
    title: "Volleyball Game IQ",
    body: "The game simplified. Position by position. Decision by decision. Gabby breaks down what is actually happening on that court, in plain language, so you stop watching with confusion and start watching with context. The more you understand the game, the better you can support the athlete playing it.",
  },
  {
    emoji: "🥗",
    title: "The Nutrition Library",
    body: "Fuel that works. A practical guide for families navigating game day nutrition, what to feed your athlete before tournaments, between matches, and after long days on the court. Food she will actually eat. Energy that actually performs.",
  },
  {
    emoji: "📚",
    title: "Book Club",
    body: "Gabby reads so you do not have to start from scratch. Every book in the club is relevant to the ecosystem conversation, athlete development, family performance, identity, resilience, communication. Gabby breaks each one down and pulls out exactly what applies to your world right now.",
  },
  {
    emoji: "🎙️",
    title: "Bold Conversations",
    body: "Gabby in conversation with coaches, directors, athletes, and experts who are working in the same arena. The conversations the industry is not having publicly, brought here, for you.",
  },
  {
    emoji: "🧭",
    title: "Starting Point",
    body: "No matter where you are in the season, beginning, middle, or end, this section tells you exactly where to start. No overwhelm. No guessing. Just a clear on-ramp into the process so you can begin building something real from wherever you are right now.",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
      <Navigation ctaText="Join Now" ctaHref={PAY_LINK} />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center text-center px-6 pt-32 pb-16">
        <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-6" style={{ color: TEAL }}>
          Courtside Conversations
        </p>
        <h1
          className="text-4xl md:text-6xl leading-tight mb-8 max-w-3xl"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          The conversation that should have started at the beginning of the season.
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mb-4">
          Courtside Conversations is the digital library where everything we talk about on Instagram goes deeper. The volleyball. The mental game. The ecosystem. The family. All of it, in one place, built for the families who are ready to stop watching the chaos and start navigating it.
        </p>
      </section>

      {/* ── VIDEO ─────────────────────────────────────────────────── */}
      <section className="px-6 pb-20 flex justify-center">
        <div className="w-full max-w-3xl">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/oiaDIpHZPFk"
              title="Courtside Conversations, Gabby Cole"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: `1px solid ${TEAL}30` }}
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 1: THE PROBLEM ───────────────────────────────── */}
      <section className="px-6 py-20 border-t border-white/10 max-w-3xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl mb-10"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          You've been watching the game. You haven't been seeing it.
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          There is a difference between sitting in the stands and actually understanding what is happening on that court.
        </p>
        <div className="flex flex-col gap-3 mb-8 pl-4 border-l-2" style={{ borderColor: TEAL }}>
          <p className="text-gray-300 leading-relaxed">The coaching decisions that confuse you.</p>
          <p className="text-gray-300 leading-relaxed">The playing time that frustrates you.</p>
          <p className="text-gray-300 leading-relaxed">The car ride home that goes sideways every time.</p>
        </div>
        <p className="text-gray-300 mb-6 leading-relaxed">
          None of that is random.
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          It is the result of a system, your family's ecosystem, that is either working for you or against you. And most families have never been given the tools to tell the difference.
        </p>
        <p className="text-xl font-semibold" style={{ color: TEAL }}>
          That ends here.
        </p>
      </section>

      {/* ── SECTION 2: WHAT IT IS ─────────────────────────────────── */}
      <section className="px-6 py-20 border-t border-white/10 max-w-3xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl mb-10"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          This is not a mindset course. This is a decoder.
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed">
          Everything you see on Instagram from Gabby is the surface level conversation. Courtside Conversations is where we go all the way in.
        </p>
        <div className="flex flex-col gap-6 mb-8">
          {[
            { label: "Position by position breakdowns", detail: "not just what each role does technically, but what it demands mentally and what your daughter needs to build inside herself to thrive in it." },
            { label: "The ecosystem explained", detail: "the volleyball desert, the mega hub, the misalignment between parents, coaches, and athletes, and exactly where your family fits inside it." },
            { label: "The home environment", detail: "what you are building at home every day that either supports or undermines everything happening in the gym." },
            { label: "The hard conversations", detail: "the car ride home, the playing time talk, the coach relationship, the teammate conflict, with actual language and actual frameworks, not vague advice." },
            { label: "The athlete's inner game", detail: "productive self talk, failure tolerance, emotional regulation, identity, taught in a way that makes it practical, not theoretical." },
          ].map(({ label, detail }) => (
            <div key={label} className="flex gap-5 items-start">
              <div className="w-1 shrink-0 mt-1 self-stretch" style={{ backgroundColor: TEAL, minHeight: "1.5rem" }} />
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">{label}</span>
                {" — "}{detail}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xl font-bold text-white leading-relaxed">
          This is the content that goes too deep for a three minute reel.
        </p>
      </section>

      {/* ── SECTION 3: WHAT'S INSIDE ─────────────────────────────── */}
      <section className="px-6 py-20 border-t border-white/10 max-w-5xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl text-center mb-4"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Everything the Instagram can't hold.
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto leading-relaxed">
          Courtside Conversations is organized into eight sections, each one designed to give your family a specific tool for a specific part of the journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {WHATS_INSIDE.map(({ emoji, title, body }) => (
            <div key={title} className="flex gap-5 items-start">
              <span className="text-2xl shrink-0 mt-0.5">{emoji}</span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: WHO IT'S FOR ───────────────────────────────── */}
      <section className="px-6 py-20 border-t border-white/10 max-w-3xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl mb-10"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          This is for the family that is ready to stop guessing.
        </h2>
        <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-6" style={{ color: TEAL }}>
          This is for you if:
        </p>
        <div className="flex flex-col gap-5">
          {[
            "You have been in youth sports for more than one season and something still feels off, and you cannot quite name what it is.",
            "You watch your daughter disappear on that court and you do not know how to reach her in those moments.",
            "You want to understand what your coach is actually seeing, and stop interpreting every decision through the lens of favoritism.",
            "You have tried switching clubs, adding privates, changing the schedule, and the same problems keep showing up.",
            "You are ready to look at your own role in the ecosystem, not to take blame, but to take ownership.",
            "You want the home environment to be working for your daughter, not against everything the gym is trying to build.",
          ].map(item => (
            <div key={item} className="flex gap-4 items-start">
              <span className="shrink-0 mt-1 font-bold" style={{ color: TEAL }}>✓</span>
              <p className="text-gray-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: WHO IT'S NOT FOR ──────────────────────────── */}
      <section className="px-6 py-20 border-t border-white/10 max-w-3xl mx-auto w-full">
        <p className="text-gray-400 uppercase tracking-widest text-xs font-semibold mb-6">
          This is not for you if:
        </p>
        <div className="flex flex-col gap-5">
          {[
            "You are still in a place where the coach, the club, or the program is entirely responsible for your experience.",
            "You want someone to fix your athlete without looking at the environment around her.",
            "You are looking for a volleyball skills program. This is not that.",
          ].map(item => (
            <div key={item} className="flex gap-4 items-start">
              <span className="text-gray-600 shrink-0 mt-1">✕</span>
              <p className="text-gray-500 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: ABOUT GABBY ───────────────────────────────── */}
      <section className="px-6 py-20 border-t border-white/10 max-w-3xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl mb-10"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          I have been on every side of this conversation.
        </h2>
        <div className="flex flex-col gap-5">
          <p className="text-gray-300 leading-relaxed">
            I played Division I volleyball at UC Berkeley.
            <br />My mother coached volleyball for 40 years.
            <br />I grew up watching the ecosystem from behind the curtain, the coach conversations, the parent drama, the invisible labor, the politics.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I spent 17 years in corporate America navigating high performance, high pressure environments where I learned, the hard way, what happens when you build your identity entirely around what you produce.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Now I am a mom. My twin daughters play at the highest levels of club volleyball in our region. And every single day I am living the exact ecosystem I built this work around.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I did not build Courtside Conversations to give you more content to consume.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I built it to give you the tools to actually do something different.
          </p>
          <p className="text-white font-semibold leading-relaxed">
            Because the families who understand this game, the whole game, not just the volleyball, have a completely different experience. And your family deserves that experience.
          </p>
        </div>
      </section>

      {/* ── SECTION 7: WHAT YOU GET ───────────────────────────────── */}
      <section className="px-6 py-20 border-t border-white/10 max-w-3xl mx-auto w-full">
        <div className="border p-10" style={{ borderColor: `${TEAL}40` }}>
          <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: TEAL }}>
            $30 / month
          </p>
          <div className="flex flex-col gap-4 mb-8">
            {[
              "Full access to the entire digital library, all series, all deep dives, all frameworks",
              "New content added every week directly from what we are building in real time on Instagram and beyond",
              "The position series in full, every position, both the parent and athlete takeaway documents",
              "Access to the Inside Game Library as it grows, this is a living resource, not a static course",
            ].map(item => (
              <div key={item} className="flex gap-4 items-start">
                <span className="shrink-0 mt-1 font-bold" style={{ color: TEAL }}>+</span>
                <p className="text-gray-300 leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">No contracts. Cancel anytime.</p>
        </div>
      </section>

      {/* ── SECTION 8: THE QUESTION ───────────────────────────────── */}
      <section className="px-6 py-20 border-t border-white/10 text-center max-w-3xl mx-auto w-full">
        <h2
          className="text-3xl md:text-5xl mb-10"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          The season is already happening.
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          The question is whether your family is navigating it, or just surviving it.
        </p>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Every week that passes without a shared framework is another week of car rides that go sideways, playing time conversations that go nowhere, and a daughter absorbing the gap between what everyone around her wants and needs, without the tools to find her own footing.
        </p>
        <p className="text-gray-300 mb-3 leading-relaxed">You do not need more information.</p>
        <p className="text-gray-300 mb-3 leading-relaxed">You need a system.</p>
        <p className="text-xl font-bold" style={{ color: TEAL }}>This is it.</p>
      </section>

      <Footer />
    </div>
  );
}
