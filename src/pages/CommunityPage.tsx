import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TEAL = "#00d4c8";
const PAY_LINK = "https://link.fastpaydirect.com/payment-link/69c704f5fb727d9c905d2f06";

const WHATS_INSIDE = [
  {
    title: "Video Game Library",
    body: "Full access to every deep-dive lesson on the topics that matter most — emotional regulation, favoritism, perceived coachability, teachable moments, coaching from the sideline, and more. The content you see on social, expanded into a roadmap you can actually use.",
  },
  {
    title: "Your Starting Point",
    body: "Season-specific training guides for every phase of the year — Summer Camp Season, Tryouts, Preseason, In Season, Tournament Season, and Postseason. Wherever you are in the year, there is a guide built for that exact moment.",
  },
  {
    title: "Volleyball Game IQ + Position Series",
    body: "Position-by-position breakdowns for every role on the court — Setter, Libero, Outside Hitter, Middle Blocker, Opposite, Defensive Specialist, and Serving Specialist. For athletes and parents. Watch together.",
  },
  {
    title: "Nutrition Library",
    body: "Athlete fuel plans and recipe cards built for tournament days, practice days, and recovery. Because what she eats is part of how she performs — and nobody else is covering it in this space.",
  },
  {
    title: "Pressure Practice",
    body: "Mental reps designed to carry from practice into games. Simple, specific techniques your athlete can use before practice, before games, and in the moments when the pressure is highest.",
  },
  {
    title: "Bold Conversations",
    body: "The conversations every youth sports family needs to have — but most never do. The coach conversation. The bench conversation. The comparison conversation. Frameworks for all of it.",
  },
  {
    title: "Book Club",
    body: "A curated reading list for athletes and parents. Every recommendation comes with context for why it matters and what to look for as you read. Built around the ecosystem, not the highlight reel.",
  },
  {
    title: "Monthly Live with Gabby + Full Replay Library",
    body: "Every month Gabby goes live for an open Q&A. Submit your questions in advance or bring them live. Miss it — the replay is always there. The library never stops growing.",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
      <Navigation
        ctaText="Join Now"
        ctaHref={PAY_LINK}
      />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <p
          className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ color: TEAL }}
        >
          Courtside Conversations
        </p>

        <h1
          className="text-5xl md:text-7xl leading-none mb-8"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          This is where the conversation goes deeper.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6 leading-relaxed">
          You've seen the content. You've watched the reels. You've read the captions and thought, okay, but what do I actually do with this?
        </p>

        <p className="text-base text-gray-400 max-w-xl mb-4 leading-relaxed">
          Courtside Conversations is where we answer that question.
        </p>

        <p className="text-base text-gray-400 max-w-2xl mb-10 leading-relaxed">
          This is Gabby's digital studio, a living, growing resource built for the parent who is ready to stop scrolling and start understanding. The how behind the what. The depth behind the content. The community behind the conversation.
        </p>

        {/* ── VIDEO EMBED ───────────────────────────────────────── */}
        <div className="w-full max-w-2xl mb-12">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/Hyt-h0cuHwE"
              title="Courtside Conversations — Gabby Cole"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: `1px solid ${TEAL}30` }}
            />
          </div>
        </div>

        <a
          href={PAY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{ backgroundColor: TEAL, color: "#0a0a0a" }}
        >
          Join Now · $30/month
        </a>
      </section>

      {/* What's Inside */}
      <section className="px-6 py-20 border-t border-white/10 max-w-5xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl text-center mb-4"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          What's Inside
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto leading-relaxed">
          Everything you get when you join Courtside Conversations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {WHATS_INSIDE.map(({ title, body }) => (
            <div key={title} className="flex gap-5 items-start">
              <div
                className="w-1 shrink-0 mt-1"
                style={{ backgroundColor: TEAL, alignSelf: "stretch", minHeight: "1.5rem" }}
              />
              <div>
                <h3 className="text-base font-bold uppercase tracking-wider mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Always Happening */}
      <section className="px-6 py-20 border-t border-white/10 max-w-3xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl mb-8"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          What's Always Happening
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Every month Gabby goes live inside Courtside Conversations for an open Q&A. Submit your questions in advance or bring them live. This is your chance to get answers, in detail, from someone who has seen this ecosystem from every angle.
        </p>
        <p className="text-gray-400 leading-relaxed">
          And the library never stops growing. New content. New conversations. New resources. Every month.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 border-t border-white/10 text-center">
        <p
          className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ color: TEAL }}
        >
          $30 / month
        </p>
        <h2
          className="text-3xl md:text-5xl mb-8"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Ready to go deeper?
        </h2>
        <a
          href={PAY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest border-2 transition-all hover:opacity-80"
          style={{ borderColor: TEAL, color: TEAL }}
        >
          Join Now · $30/month
        </a>
      </section>

      <Footer />
    </div>
  );
}
