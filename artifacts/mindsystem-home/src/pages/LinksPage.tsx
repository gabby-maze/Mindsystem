import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Instagram, Mail, ExternalLink } from "lucide-react";

const PINK   = "#FF1F8F";
const BLUE   = "#4FC3F7";
const TEAL   = "#00C9B1";
const PURPLE = "#9B59B6";
const ORANGE = "#FF6B35";

export default function LinksPage() {
  useEffect(() => {
    document.title = "Gabby Cole | Links";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-[480px] flex flex-col gap-5">

        {/* ── AVATAR + BIO ──────────────────────────────────────── */}
        <div className="flex flex-col items-center text-center gap-3 pb-2">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: `${PINK}18`,
              border: `2px solid ${PINK}`,
              boxShadow: `0 0 30px ${PINK}40`,
            }}
            aria-label="Gabby Cole avatar"
            role="img"
          >
            <span className="text-3xl font-serif font-bold tracking-tight" style={{ color: PINK }}>GC</span>
          </div>
          <h1 className="text-2xl font-serif text-foreground tracking-tight">Gabby Cole</h1>
          <p className="text-muted-foreground text-sm font-light leading-snug max-w-[300px]">
            Performance Coach · Youth Sports Family Strategist
          </p>
        </div>

        {/* ── FEATURED CARD — hot pink ──────────────────────────── */}
        <a
          href="https://www.mazeperformance.ai/live-registration"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-card p-6 relative overflow-hidden transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          style={{
            border: `1px solid ${PINK}66`,
            boxShadow: `0 0 40px ${PINK}25`,
            ["--tw-ring-color" as string]: PINK,
          }}
          aria-label="Featured event: The Missing Conversation in Youth Sports — Reserve your spot"
        >
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(to right, ${PINK}, ${PINK}60, transparent)` }}
            aria-hidden="true"
          />
          <span
            className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold mb-3"
            style={{ color: PINK }}
          >
            Featured · Free Event
          </span>
          <h2 className="text-xl font-serif text-foreground leading-snug mb-1">
            The Missing Conversation in Youth Sports
          </h2>
          <p className="text-muted-foreground text-sm mb-5">
            Sunday, April 5 · 6PM Pacific
          </p>
          <span
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-widest uppercase transition-colors min-h-[44px]"
            style={{ backgroundColor: PINK, color: "#fff" }}
          >
            Reserve Your Spot — It's Free
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </a>

        {/* ── LINK CARDS ────────────────────────────────────────── */}
        <div className="flex flex-col gap-3" role="list" aria-label="Links">

          {/* Explore — electric blue */}
          <a
            href="https://www.gabbycole.com"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            className="flex items-center justify-between bg-card px-5 py-4 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[72px]"
            style={{
              border: `1px solid ${BLUE}40`,
              ["--tw-ring-color" as string]: BLUE,
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${BLUE}90`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${BLUE}40`)}
            aria-label="Explore the MindSystem — Visit the Website"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: BLUE }}>Explore</p>
              <p className="text-foreground font-semibold text-sm">The MindSystem</p>
              <p className="text-muted-foreground text-xs">The compass for youth sports families</p>
            </div>
            <ExternalLink className="w-4 h-4 shrink-0 ml-3 transition-colors" style={{ color: BLUE }} aria-hidden="true" />
          </a>

          {/* Community — teal */}
          <a
            href="https://link.fastpaydirect.com/payment-link/69c704f5fb727d9c905d2f06"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            className="flex items-center justify-between bg-card px-5 py-4 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[72px]"
            style={{
              border: `1px solid ${TEAL}40`,
              ["--tw-ring-color" as string]: TEAL,
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${TEAL}90`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${TEAL}40`)}
            aria-label="Join the Community on Mighty Networks — $30 per month"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: TEAL }}>Community</p>
              <p className="text-foreground font-semibold text-sm">Join the Community</p>
              <p className="text-muted-foreground text-xs">Tools, frameworks &amp; resources · $30/month</p>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0 ml-3" style={{ color: TEAL }} aria-hidden="true" />
          </a>

          {/* Coaches — purple */}
          <Link
            href="/coaches"
            role="listitem"
            className="flex items-center justify-between bg-card px-5 py-4 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[72px]"
            style={{
              border: `1px solid ${PURPLE}40`,
              ["--tw-ring-color" as string]: PURPLE,
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${PURPLE}90`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${PURPLE}40`)}
            aria-label="Coach Certification — Join the waitlist"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: PURPLE }}>Coaches</p>
              <p className="text-foreground font-semibold text-sm">Coach Certification</p>
              <p className="text-muted-foreground text-xs">Be the first to know when enrollment opens</p>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0 ml-3" style={{ color: PURPLE }} aria-hidden="true" />
          </Link>

          {/* ── SURVEYS DIVIDER ───────────────────────────────────── */}
          <div className="flex items-center gap-3 pt-2 pb-1" aria-hidden="true">
            <div className="flex-1 h-px" style={{ background: `${ORANGE}30` }} />
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold" style={{ color: ORANGE }}>Surveys</span>
            <div className="flex-1 h-px" style={{ background: `${ORANGE}30` }} />
          </div>

          {/* Anonymous Parent Survey */}
          <a
            href="#"
            role="listitem"
            className="flex items-center bg-card overflow-hidden transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[80px]"
            style={{
              border: `1px solid ${ORANGE}40`,
              ["--tw-ring-color" as string]: ORANGE,
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${ORANGE}90`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${ORANGE}40`)}
            aria-label="Anonymous Parent Survey — Ask the questions you are scared to ask the coach"
          >
            <div className="w-20 h-20 shrink-0 overflow-hidden">
              <img
                src="/images/survey-parent.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: ORANGE }}>Survey · Parents</p>
              <p className="text-foreground font-semibold text-sm leading-snug">Anonymous Parent Survey</p>
              <p className="text-muted-foreground text-xs leading-snug mt-0.5">Ask the questions you're scared to ask the coach</p>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0 mr-4" style={{ color: ORANGE }} aria-hidden="true" />
          </a>

          {/* Anonymous Coach Survey */}
          <a
            href="#"
            role="listitem"
            className="flex items-center bg-card overflow-hidden transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[80px]"
            style={{
              border: `1px solid ${ORANGE}40`,
              ["--tw-ring-color" as string]: ORANGE,
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${ORANGE}90`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${ORANGE}40`)}
            aria-label="Anonymous Coach Survey — Tell us what nobody ever asks you about coaching"
          >
            <div className="w-20 h-20 shrink-0 overflow-hidden">
              <img
                src="/images/survey-coach.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: ORANGE }}>Survey · Coaches</p>
              <p className="text-foreground font-semibold text-sm leading-snug">Anonymous Coach Survey</p>
              <p className="text-muted-foreground text-xs leading-snug mt-0.5">Tell us what nobody ever asks you about coaching</p>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0 mr-4" style={{ color: ORANGE }} aria-hidden="true" />
          </a>

          {/* Anonymous Athlete Survey */}
          <a
            href="#"
            role="listitem"
            className="flex items-center bg-card overflow-hidden transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[80px]"
            style={{
              border: `1px solid ${ORANGE}40`,
              ["--tw-ring-color" as string]: ORANGE,
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${ORANGE}90`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${ORANGE}40`)}
            aria-label="Anonymous Athlete Survey — Tell us what nobody ever asks you about playing"
          >
            <div className="w-20 h-20 shrink-0 overflow-hidden">
              <img
                src="/images/survey-athlete.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: ORANGE }}>Survey · Athletes</p>
              <p className="text-foreground font-semibold text-sm leading-snug">Anonymous Athlete Survey</p>
              <p className="text-muted-foreground text-xs leading-snug mt-0.5">Tell us what nobody ever asks you about playing</p>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0 mr-4" style={{ color: ORANGE }} aria-hidden="true" />
          </a>

        </div>

        {/* ── FOOTER ────────────────────────────────────────────── */}
        <footer className="flex flex-col items-center gap-3 pt-4 border-t border-border/30 mt-2">
          <p className="text-muted-foreground text-xs">
            © 2026 Gabby Cole ·{" "}
            <a
              href="https://www.gabbycole.com"
              className="underline underline-offset-2 transition-colors"
              style={{ color: PINK }}
            >
              gabbycole.com
            </a>
          </p>

          <nav aria-label="Social links" className="flex items-center gap-5">
            <Link
              href="/"
              className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              MindSystem
            </Link>
            <a
              href="https://www.instagram.com/gabbycole_maze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Follow Gabby Cole on Instagram @gabbycole_maze"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:info@mazeperformance.ai"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email info@mazeperformance.ai"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </nav>
        </footer>

      </div>

      <div className="mt-6 pb-8">
        <Link href="/" className="text-xs text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors tracking-wide">
          Visit our website →
        </Link>
      </div>

    </div>
  );
}
