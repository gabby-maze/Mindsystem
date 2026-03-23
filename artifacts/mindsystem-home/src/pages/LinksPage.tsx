import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Instagram, Mail, ExternalLink } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

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
            className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(255,45,120,0.25)]"
            aria-label="Gabby Cole avatar"
            role="img"
          >
            <span className="text-3xl font-serif text-primary font-bold tracking-tight">GC</span>
          </div>
          <h1 className="text-2xl font-serif text-foreground tracking-tight">Gabby Cole</h1>
          <p className="text-muted-foreground text-sm font-light leading-snug max-w-[300px]">
            Performance Coach · Youth Sports Family Strategist
          </p>
        </div>

        {/* ── FEATURED CARD ─────────────────────────────────────── */}
        <a
          href="#webinar-placeholder"
          className="block bg-card border border-primary/40 p-6 relative overflow-hidden shadow-[0_0_40px_rgba(255,45,120,0.15)] hover:shadow-[0_0_55px_rgba(255,45,120,0.3)] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Featured event: The Missing Conversation in Youth Sports — Reserve your spot"
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

          <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold text-primary mb-3">
            Featured · Free Event
          </span>
          <h2 className="text-xl font-serif text-foreground leading-snug mb-1">
            The Missing Conversation in Youth Sports
          </h2>
          <p className="text-muted-foreground text-sm mb-5">
            Sunday, April 5 · 6PM Pacific
          </p>
          <span className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase group-hover:bg-primary/90 transition-colors min-h-[44px]">
            Reserve Your Spot — It's Free
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </a>

        {/* ── LINK CARDS ────────────────────────────────────────── */}
        <div className="flex flex-col gap-3" role="list" aria-label="Links">

          {/* Explore */}
          <a
            href="https://www.gabbycole.com"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
            className="flex items-center justify-between bg-card border border-border/60 px-5 py-4 hover:border-primary/50 hover:bg-card/80 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[72px]"
            aria-label="Explore the MindSystem — Visit the Website"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-0.5">Explore</p>
              <p className="text-foreground font-semibold text-sm">The MindSystem</p>
              <p className="text-muted-foreground text-xs">The compass for youth sports families</p>
            </div>
            <span className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-3" aria-hidden="true">
              <ExternalLink className="w-4 h-4" />
            </span>
          </a>

          {/* Community */}
          <a
            href="https://community.gabbycole.com"
            role="listitem"
            className="flex items-center justify-between bg-card border border-border/60 px-5 py-4 hover:border-primary/50 hover:bg-card/80 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[72px]"
            aria-label="Join the Community on Mighty Networks — $30 per month"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-0.5">Community</p>
              <p className="text-foreground font-semibold text-sm">Join the Community</p>
              <p className="text-muted-foreground text-xs">Tools, frameworks &amp; resources · $30/month</p>
            </div>
            <span className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-3" aria-hidden="true">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {/* Coaches */}
          <a
            href="#waitlist-placeholder"
            role="listitem"
            className="flex items-center justify-between bg-card border border-border/60 px-5 py-4 hover:border-primary/50 hover:bg-card/80 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-[72px]"
            aria-label="Coach Certification — Join the waitlist"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-0.5">Coaches</p>
              <p className="text-foreground font-semibold text-sm">Coach Certification</p>
              <p className="text-muted-foreground text-xs">Be the first to know when enrollment opens</p>
            </div>
            <span className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-3" aria-hidden="true">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>

        </div>

        {/* ── FOOTER ────────────────────────────────────────────── */}
        <footer className="flex flex-col items-center gap-3 pt-4 border-t border-border/30 mt-2">
          <p className="text-muted-foreground text-xs">
            © 2026 Gabby Cole ·{" "}
            <a
              href="https://www.gabbycole.com"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              gabbycole.com
            </a>
          </p>

          <nav aria-label="Social links" className="flex items-center gap-5">
            <Link
              href="/"
              className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              MindSystem
            </Link>
            <a
              href="https://www.instagram.com/gabbycole_maze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow Gabby Cole on Instagram @gabbycole_maze"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="mailto:info@mazeperformance.ai"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email info@mazeperformance.ai"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </nav>
        </footer>

      </div>

      <div className="mt-6 pb-8">
        <Link href="/" className="text-xs text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors tracking-wide">
          Visit our website →
        </Link>
      </div>

    </div>
  );
}
