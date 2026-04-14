import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TEAL = "#00d4c8";
const PAY_LINK = "https://link.fastpaydirect.com/payment-link/69c704f5fb727d9c905d2f06";

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0a0a", color: "#fff" }}>
      <Navigation />

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <p
          className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ color: TEAL }}
        >
          Community
        </p>

        <h1
          className="font-display text-5xl md:text-7xl leading-none mb-6"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Join the Community
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
          Your copy goes here. Describe what the community is, who it's for, and why they should join.
        </p>

        <p className="text-base text-gray-400 max-w-xl mb-12 leading-relaxed">
          Additional supporting copy goes here, benefits, what's included, what they'll get access to.
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

      {/* Feature / Benefits section */}
      <section className="px-6 py-20 border-t border-white/10 max-w-5xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl text-center mb-16"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          What You Get
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {[
            { title: "Benefit One", body: "Replace this with your first community benefit or feature." },
            { title: "Benefit Two", body: "Replace this with your second community benefit or feature." },
            { title: "Benefit Three", body: "Replace this with your third community benefit or feature." },
          ].map(({ title, body }) => (
            <div key={title} className="text-center">
              <div
                className="w-10 h-1 mx-auto mb-5"
                style={{ backgroundColor: TEAL }}
              />
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={PAY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-widest border-2 transition-all hover:opacity-80"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            Join Now · $30/month
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
