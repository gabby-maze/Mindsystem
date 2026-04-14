import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PURPLE = "#9B59B6";
const BOOK_LINK = "https://link.fastpaydirect.com/payment-link/69dd9455557558e89e51f497";

export default function StrategySessionPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
      <Navigation />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-3xl mx-auto w-full">
        <p
          className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ color: PURPLE }}
        >
          1:1 Session · $250
        </p>

        <h1
          className="text-5xl md:text-7xl leading-none mb-6"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          MindSystem Strategy Session
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-3 leading-relaxed">
          A private 60-minute strategy session with Gabby Cole. Designed for families who want direct guidance on navigating their youth sports situation — before committing to a full program.
        </p>

        <p className="text-base text-gray-400 max-w-xl mb-10 leading-relaxed">
          If you move forward with any MindSystem tier, your $250 is applied in full toward your purchase.
        </p>

        <a
          href={BOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{ backgroundColor: PURPLE, color: "#fff" }}
        >
          Book Your Session — $250
        </a>
      </section>

      {/* Full Description */}
      <section className="px-6 py-16 border-t border-white/10 max-w-3xl mx-auto w-full">
        <p className="text-xl text-gray-200 italic mb-8 leading-relaxed">
          Sometimes you just need an hour with someone who has seen this from every angle.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          The MindSystem Strategy Session is a private 60-minute call with Gabby Cole — former D1 athlete, daughter of a 40-year coach, performance professional, and volleyball mom of twin girls competing at the highest levels of club volleyball in their region.
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          This session is for the family that has a specific situation they need help navigating. Maybe you're not sure which program is right for you. Maybe you want Gabby's eyes on what's happening in your family's sports experience before making a bigger commitment. Maybe you just need an hour of clarity from someone who understands the full ecosystem.
        </p>

        <h2
          className="text-2xl md:text-3xl mt-12 mb-6"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Here's How It Works
        </h2>

        <div className="flex flex-col gap-5 mb-12">
          {[
            { step: "01", text: "You book the session and pay $250 to reserve your time." },
            { step: "02", text: "Gabby reviews your situation before the call so you're not spending the first 20 minutes getting her up to speed." },
            { step: "03", text: "You come ready to talk. She comes ready to help." },
            { step: "04", text: "At the end of the session you'll have a clear picture of what's happening in your family's ecosystem and what to do about it." },
          ].map(({ step, text }) => (
            <div key={step} className="flex gap-5 items-start">
              <span
                className="text-xs font-bold tracking-widest shrink-0 mt-1"
                style={{ color: PURPLE }}
              >
                {step}
              </span>
              <p className="text-gray-300 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          If you decide to move forward with any MindSystem program — Independent, Supported, or Inner Circle — your $250 is applied in full toward your purchase.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          If you don't — you still walk away with an hour of direct guidance from someone who has been inside this world her entire life.
        </p>
        <p className="text-gray-200 font-semibold mb-12 leading-relaxed">
          Either way your time is not wasted.
        </p>

        <p
          className="text-xl font-bold tracking-wide"
          style={{ color: PURPLE }}
        >
          This is not a sales call. It is a strategy session. There is a difference.
        </p>
      </section>

      {/* Who it's for / not for */}
      <section className="px-6 py-16 border-t border-white/10 max-w-3xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Who This Is For
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Families who want direct guidance before committing to a full program",
                "Families navigating a specific situation that needs immediate attention",
                "Families who want Gabby's perspective on their unique ecosystem",
              ].map(item => (
                <li key={item} className="flex gap-3 items-start">
                  <span style={{ color: PURPLE }} className="mt-1 shrink-0">✓</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl md:text-3xl mb-6"
              style={{ fontFamily: "'Permanent Marker', cursive", color: "#aaa" }}
            >
              Who This Is Not For
            </h2>
            <ul className="flex flex-col gap-4">
              {[
                "Families looking for a free consultation",
                "Families who want someone to fix their athlete in 60 minutes",
                "Families who aren't willing to look honestly at their own role in the ecosystem",
              ].map(item => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-gray-500 mt-1 shrink-0">✕</span>
                  <p className="text-gray-500 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What happens after you book */}
      <section className="px-6 py-16 border-t border-white/10 max-w-3xl mx-auto w-full">
        <h2
          className="text-2xl md:text-3xl mb-10"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          What Happens After You Book
        </h2>

        <div className="flex flex-col gap-6 mb-16">
          {[
            "You'll receive a confirmation email with a short pre-session questionnaire",
            "Gabby reviews your responses before the call",
            "You meet for 60 minutes via Zoom",
            "You walk away with clarity and a clear next step",
          ].map((item, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span
                className="text-xs font-bold tracking-widest shrink-0 mt-1"
                style={{ color: PURPLE }}
              >
                0{i + 1}
              </span>
              <p className="text-gray-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div
          className="border p-8 text-center mb-12"
          style={{ borderColor: `${PURPLE}40` }}
        >
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: PURPLE }}>Investment</p>
          <p className="text-3xl font-bold mb-1">$250</p>
          <p className="text-gray-400 text-sm">Applied in full toward any MindSystem program purchase</p>
        </div>

        <div className="text-center">
          <a
            href={BOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
            style={{ backgroundColor: PURPLE, color: "#fff" }}
          >
            Book Your Session — $250
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
