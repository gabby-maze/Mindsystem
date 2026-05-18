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

        {/* ── THREE FEATURED TILES ──────────────────────────────── */}
        <div className="flex flex-col gap-4">

          {/* 1 · The Missing Framework */}
          <a
            href="https://www.mazeperformance.ai/live-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card p-6 relative overflow-hidden transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              border: `1px solid ${PINK}66`,
              boxShadow: `0 0 40px ${PINK}25`,
              ["--tw-ring-color" as string]: PINK,
            }}
            aria-label="The Missing Framework, Free Live Training"
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
              The Missing Framework
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              A Live Training for Youth Sports Families
            </p>
            <span
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-widest uppercase transition-colors min-h-[44px]"
              style={{ backgroundColor: PINK, color: "#fff" }}
            >
              Reserve Your Spot, It's Free
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </a>

          {/* 2 · MindSystem Strategy Session */}
          <a
            href="/strategy-session"
            className="block bg-card p-6 relative overflow-hidden transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              border: `1px solid ${PURPLE}66`,
              boxShadow: `0 0 40px ${PURPLE}25`,
              ["--tw-ring-color" as string]: PURPLE,
            }}
            aria-label="MindSystem Strategy Session, Book a private session"
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(to right, ${PURPLE}, ${PURPLE}60, transparent)` }}
              aria-hidden="true"
            />
            <span
              className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold mb-3"
              style={{ color: PURPLE }}
            >
              1:1 Session
            </span>
            <h2 className="text-xl font-serif text-foreground leading-snug mb-1">
              MindSystem Strategy Session
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Book a private session with Gabby
            </p>
            <span
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-widest uppercase transition-colors min-h-[44px]"
              style={{ backgroundColor: PURPLE, color: "#fff" }}
            >
              Book Now
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </a>

          {/* 3 · Courtside Conversation */}
          <a
            href="/community"
            className="block bg-card p-6 relative overflow-hidden transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            style={{
              border: `1px solid ${TEAL}66`,
              boxShadow: `0 0 40px ${TEAL}25`,
              ["--tw-ring-color" as string]: TEAL,
            }}
            aria-label="Courtside Conversation, Join the community"
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: `linear-gradient(to right, ${TEAL}, ${TEAL}60, transparent)` }}
              aria-hidden="true"
            />
            <span
              className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold mb-3"
              style={{ color: TEAL }}
            >
              Community · $30/month
            </span>
            <h2 className="text-xl font-serif text-foreground leading-snug mb-1">
              Courtside Conversation
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Tools, frameworks &amp; resources for youth sports families
            </p>
            <span
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-widest uppercase transition-colors min-h-[44px]"
              style={{ backgroundColor: TEAL, color: "#fff" }}
            >
              Join the Community
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </a>

        </div>

        {/* ── SMALLER LINK TILES ────────────────────────────────── */}
        <div className="flex flex-col gap-3" role="list" aria-label="Links">

          {/* Explore the MindSystem */}
          <a
            href="https://www.gabbycole.com"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            className="flex items-center justify-between bg-card px-5 py-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[64px]"
            style={{ border: `1px solid ${BLUE}40`, ["--tw-ring-color" as string]: BLUE }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${BLUE}90`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${BLUE}40`)}
            aria-label="Explore the MindSystem, Visit the Website"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: BLUE }}>Explore</p>
              <p className="text-foreground font-semibold text-sm">The MindSystem</p>
            </div>
            <ExternalLink className="w-4 h-4 shrink-0 ml-3" style={{ color: BLUE }} aria-hidden="true" />
          </a>

          {/* Coach Certification */}
          <Link
            href="/coaches"
            role="listitem"
            className="flex items-center justify-between bg-card px-5 py-4 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[64px]"
            style={{ border: `1px solid ${PURPLE}40`, ["--tw-ring-color" as string]: PURPLE }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${PURPLE}90`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${PURPLE}40`)}
            aria-label="Coach Certification, Join the waitlist"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-0.5" style={{ color: PURPLE }}>Coaches</p>
              <p className="text-foreground font-semibold text-sm">Coach Certification</p>
            </div>
            <ArrowRight className="w-4 h-4 shrink-0 ml-3" style={{ color: PURPLE }} aria-hidden="true" />
          </Link>

          {/* ── SURVEYS ───────────────────────────────────────────── */}
          <div
            className="p-5"
            style={{ border: `1px solid ${ORANGE}30`, background: `${ORANGE}06` }}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: ORANGE }}>Surveys</p>
            <h2 className="text-lg font-serif text-foreground leading-snug mb-3">
              Help us build the missing system.
            </h2>
            <p className="text-muted-foreground text-xs leading-relaxed mb-5">
              Your struggles, questions, and vision for what youth sports could look like. That's the data that builds a shared language. Take two minutes. Tell us the truth. You'll receive free lifetime access to The Inside Game Library as a thank you.
            </p>

            <div className="grid grid-cols-3 gap-2" role="list" aria-label="Survey links">
              <a
                href="https://www.videoask.com/fg4ocxw4e"
                target="_blank" rel="noopener noreferrer"
                role="listitem"
                className="flex flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                style={{ border: `1px solid ${ORANGE}50`, ["--tw-ring-color" as string]: ORANGE }}
                aria-label="The Parent Survey"
              >
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "140%" }}>
                  <img src="/images/survey-parent.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
                </div>
                <div className="p-2 bg-card flex-1">
                  <p className="text-[8px] uppercase tracking-[0.1em] font-semibold mb-0.5" style={{ color: ORANGE }}>Parents</p>
                  <p className="text-foreground font-semibold text-[11px] leading-snug mb-1">The Parent Survey</p>
                  <p className="text-muted-foreground leading-snug" style={{ fontSize: "10px" }}>Ask the questions you're too scared to ask the coach.</p>
                </div>
              </a>

              <a
                href="https://www.videoask.com/fp373gpc5"
                target="_blank" rel="noopener noreferrer"
                role="listitem"
                className="flex flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                style={{ border: `1px solid ${ORANGE}50`, ["--tw-ring-color" as string]: ORANGE }}
                aria-label="The Coach Survey"
              >
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "140%" }}>
                  <img src="/images/survey-coach.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
                </div>
                <div className="p-2 bg-card flex-1">
                  <p className="text-[8px] uppercase tracking-[0.1em] font-semibold mb-0.5" style={{ color: ORANGE }}>Coaches</p>
                  <p className="text-foreground font-semibold text-[11px] leading-snug mb-1">The Coach Survey</p>
                  <p className="text-muted-foreground leading-snug" style={{ fontSize: "10px" }}>Tell us what nobody ever asks you about coaching.</p>
                </div>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScvxMoiaBtWjhEyB6M8MbqNceiHp9ezILT5Rt0eIQQsqBFS4A/viewform?usp=header"
                target="_blank" rel="noopener noreferrer"
                role="listitem"
                className="flex flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                style={{ border: `1px solid ${ORANGE}50`, ["--tw-ring-color" as string]: ORANGE }}
                aria-label="The Athlete Survey"
              >
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "140%" }}>
                  <img src="/images/survey-athlete.png" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
                </div>
                <div className="p-2 bg-card flex-1">
                  <p className="text-[8px] uppercase tracking-[0.1em] font-semibold mb-0.5" style={{ color: ORANGE }}>Athletes</p>
                  <p className="text-foreground font-semibold text-[11px] leading-snug mb-1">The Athlete Survey</p>
                  <p className="text-muted-foreground leading-snug" style={{ fontSize: "10px" }}>Tell us what nobody ever asks you about playing.</p>
                </div>
              </a>
            </div>

            <p className="text-xs leading-relaxed mt-4 pt-4" style={{ color: `${ORANGE}bb`, borderTop: `1px solid ${ORANGE}20` }}>
              Complete any survey and receive free lifetime access to The Inside Game Library. No credit card, no expiration date, no catch.
            </p>
          </div>

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
              target="_blank" rel="noopener noreferrer"
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
