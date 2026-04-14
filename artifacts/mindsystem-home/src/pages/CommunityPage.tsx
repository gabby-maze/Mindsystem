import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TEAL = "#00d4c8";
const PAY_LINK = "https://link.fastpaydirect.com/payment-link/69c704f5fb727d9c905d2f06";

const WHATS_INSIDE = [
  {
    title: "The Inside Game Library",
    body: "Every long format video. Every lesson. Every takeaway. The social media content you love, expanded, deepened, and organized so you can actually apply it. This is where the reels become a roadmap.",
  },
  {
    title: "Tournament Day Nutrition",
    body: "Recipes and fueling strategies built specifically for tournament days, pre-practice days, and recovery days. Because what she eats is part of how she performs, and nobody is talking about that either.",
  },
  {
    title: "Visualization Techniques",
    body: "Simple, practical tools your athlete can use before practice, before games, and in the moments when the pressure is highest. Not theory. Techniques she can actually use.",
  },
  {
    title: "The Reading List",
    body: "A curated book club built for sports parents. The books Gabby recommends to understand your role in the ecosystem, and how to show up in it better. Every recommendation comes with context for why it matters and what to look for as you read.",
  },
  {
    title: "Parent Education Sessions",
    body: "Deep dives into the topics that matter most to the families navigating youth sports right now. Built around the real questions parents are asking, and the answers most programs aren't giving.",
  },
  {
    title: "Coaches Corner",
    body: "Gabby in conversation with coaches and relevant voices from across the country. Real conversations about what's happening inside the ecosystem, from the people who are living it every day. This is the perspective most parents never get access to.",
  },
  {
    title: "MindSystem Programs",
    body: "This is home base for all MindSystem content. Everything lives here, organized, accessible, and always updated as the program grows.",
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

        <p className="text-base text-gray-400 max-w-2xl mb-12 leading-relaxed">
          This is Gabby's digital studio, a living, growing resource built for the parent who is ready to stop scrolling and start understanding. The how behind the what. The depth behind the content. The community behind the conversation.
        </p>

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
