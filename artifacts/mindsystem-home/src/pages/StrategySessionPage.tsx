import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PURPLE = "#9B59B6";
const BOOK_LINK = "#";

export default function StrategySessionPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
      <Navigation />

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p
          className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ color: PURPLE }}
        >
          1:1 Session
        </p>

        <h1
          className="font-display text-5xl md:text-7xl leading-none mb-6"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Mindsystem Strategy Session
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
          Your copy goes here. Describe what this session is, who it's for, and what they'll walk away with.
        </p>

        <p className="text-base text-gray-400 max-w-xl mb-12 leading-relaxed">
          Additional supporting copy goes here — what's included, how long it is, what to expect.
        </p>

        <a
          href={BOOK_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{ backgroundColor: PURPLE, color: "#fff" }}
        >
          Book Your Session
        </a>
      </section>

      {/* What to Expect section */}
      <section className="px-6 py-20 border-t border-white/10 max-w-5xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl text-center mb-16"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          What to Expect
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {[
            { title: "Point One", body: "Replace this with your first session detail or benefit." },
            { title: "Point Two", body: "Replace this with your second session detail or benefit." },
            { title: "Point Three", body: "Replace this with your third session detail or benefit." },
          ].map(({ title, body }) => (
            <div key={title} className="text-center">
              <div
                className="w-10 h-1 mx-auto mb-5"
                style={{ backgroundColor: PURPLE }}
              />
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={BOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest border-2 transition-all hover:opacity-80"
            style={{ borderColor: PURPLE, color: PURPLE }}
          >
            Book Your Session
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
