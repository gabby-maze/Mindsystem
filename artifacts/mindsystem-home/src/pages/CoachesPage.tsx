import { useEffect } from "react";
import { Link } from "wouter";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const TEAL = "#00C9B1";

function WaitlistCTA() {
  return (
    <div className="mt-10">
      <a
        href="https://api.leadconnectorhq.com/widget/form/lA7mrUxIYvAItRA4uliG"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-7 py-4 font-bold tracking-widest uppercase text-sm transition-opacity hover:opacity-90 min-h-[44px]"
        style={{ backgroundColor: TEAL, color: "#0a0a0a" }}
      >
        I'm In — Add Me to the Waitlist
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}

export default function CoachesPage() {
  useEffect(() => {
    document.title = "Coach Certification | Gabby Cole";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main id="main-content">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-border/30">
          <div
            className="absolute inset-0 z-0"
            style={{ background: `radial-gradient(ellipse at 60% 50%, ${TEAL}12 0%, transparent 65%)` }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-24">
            <p
              className="text-xs uppercase tracking-[0.3em] font-semibold mb-6"
              style={{ color: TEAL }}
            >
              Coach Certification · Coming Soon
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight mb-8 text-balance">
              You've been doing the work.{" "}
              <span className="italic" style={{ color: TEAL }}>
                It's time to get paid for it.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl mb-12">
              The MindSystem Coach Certification is coming. It's built for coaches who are done being undervalued — and ready to build something that compensates them for the labor they've always given away for free.
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/form/lA7mrUxIYvAItRA4uliG"
              className="inline-flex items-center gap-3 px-8 py-5 font-bold tracking-widest uppercase text-sm transition-opacity hover:opacity-90 min-h-[44px]"
              style={{ backgroundColor: TEAL, color: "#0a0a0a" }}
            >
              I'm In — Add Me to the Waitlist
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ── SECTION 1 ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-card border-b border-border/30">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
              Let's say what nobody in youth sports is willing to say.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                Coaching sits in the same category as two other roles in our culture — motherhood and teaching. Three roles that are historically undervalued and underpaid. Three roles that come with an enormous workload. And most of that workload is invisible.
              </p>
              <p>
                You spend hours building practice plans nobody sees. You rebuild those plans on the fly when three athletes cancel an hour before. You manage the emotions of 14 young humans while simultaneously managing their parents from the sideline. You carry the team culture home with you. You answer the messages after 10pm. You become the easiest person to blame when something goes wrong — even when you've been holding the entire system together.
              </p>
              <p className="text-foreground font-medium">
                And then someone hands you a gift card at the end of the season and calls it appreciation.
              </p>
              <p>
                That's not appreciation. That's a system that doesn't understand what you actually do.
              </p>
            </div>
            <WaitlistCTA />
          </div>
        </section>

        {/* ── SECTION 2 ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-background border-b border-border/30">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
              Purpose and compensation{" "}
              <span className="italic" style={{ color: TEAL }}>
                are not opposites.
              </span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                Most coaches didn't get into this for the money. That's the truth. They got into it because they love the sport. Because they love watching a young athlete figure herself out on the court. Because they remember what it felt like to have a coach who changed their life — and they wanted to give that back.
              </p>
              <p className="text-foreground font-medium">
                That is beautiful. And it has been used against you.
              </p>
              <p>
                The youth sports industry has built an entire business model on the premise that coaches who truly care won't demand fair compensation. That passion is a substitute for pay. That if you really love it, you'll keep showing up whether the economics make sense or not.
              </p>
              <p>
                You can love what you do and be compensated for it. You can be purpose-driven and profitable. You can give everything to your athletes and still build something that works for your life.
              </p>
              <p
                className="text-xl md:text-2xl font-serif italic border-l-2 pl-6 py-2 my-8"
                style={{ borderColor: TEAL, color: TEAL }}
              >
                The missing piece isn't motivation. It isn't skill. It's a system.
              </p>
            </div>
            <WaitlistCTA />
          </div>
        </section>

        {/* ── SECTION 3 ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-card border-b border-border/30">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 leading-tight">
              The MindSystem Coach Certification.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 font-light">
              This is not a weekend clinic. This is not another certification you hang on a wall and never use. This is not a replay library you watch alone and never apply.
            </p>

            <p className="text-foreground font-medium text-lg mb-8">
              It is a complete professional framework for coaches who are ready to build something real.
            </p>

            <ul className="space-y-4 mb-10" aria-label="What the certification includes">
              {[
                { label: "The Framework", desc: "The full MindSystem methodology — athlete identity, family alignment, season-long development — taught so you can deliver it." },
                { label: "The Language", desc: "How to talk to athletes, parents, and programs in a way that creates buy-in, builds trust, and positions you as the expert you already are." },
                { label: "The Business", desc: "How to package, price, and sell your coaching so that your skills are compensated at the level they deserve." },
                { label: "The Community", desc: "A cohort of coaches building the same thing, led by Gabby — not a Facebook group you check once a month, but an active professional community." },
              ].map(({ label, desc }) => (
                <li key={label} className="flex items-start gap-4 bg-background border border-border/50 p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0.5 h-full" style={{ backgroundColor: TEAL }} aria-hidden="true" />
                  <div className="pl-2">
                    <p className="font-semibold text-foreground mb-1" style={{ color: TEAL }}>{label}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-sm italic mb-0">
              Details still being finalized. Waitlist members get first access — and first pricing.
            </p>
            <WaitlistCTA />
          </div>
        </section>

        {/* ── SECTION 4 ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-background border-b border-border/30">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif mb-12 leading-tight">
              This is for you if —
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Yes */}
              <div className="bg-card border border-border/50 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(to right, ${TEAL}, transparent)` }} aria-hidden="true" />
                <h3 className="text-xl font-serif mb-6" style={{ color: TEAL }}>Yes, this is for you:</h3>
                <ul className="space-y-4">
                  {[
                    "You're a youth sports coach who knows you're giving more than you're getting back",
                    "You believe in developing the whole athlete — not just the player on the court",
                    "You've been looking for a framework that actually matches how you already think",
                    "You want to build something sustainable — a practice, a business, a legacy",
                    "You're done waiting for someone else to validate what you already know",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: TEAL }} aria-hidden="true" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* No */}
              <div className="bg-card/40 border border-border/30 p-8">
                <h3 className="text-xl font-serif mb-6 text-muted-foreground">
                  This is <span className="italic">not</span> for you if:
                </h3>
                <ul className="space-y-4 opacity-70">
                  {[
                    "You're looking for shortcuts or a badge to collect without doing the work",
                    "You believe coaching is purely about X's and O's and nothing else",
                    "You're not willing to invest in your own development as a professional",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 shrink-0 mt-0.5 text-muted-foreground" aria-hidden="true" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <WaitlistCTA />
          </div>
        </section>

        {/* ── SECTION 5: GABBY'S STORY ─────────────────────────────── */}
        <section className="py-24 md:py-32 bg-card border-b border-border/30">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
              I've been on both sides of this.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                My mother coached volleyball for forty years. She gave everything to that gym. She poured herself into every athlete who walked through those doors — stayed late, showed up early, built programs from nothing, and changed more lives than she will ever know.
              </p>
              <p>
                And for four decades, she was compensated the way youth sports coaches are always compensated: with gratitude. With gift cards. With the knowledge that she had made a difference. She built something extraordinary. She was never paid like it.
              </p>
              <p>
                I watched that. And then I spent seventeen years in pharmaceutical, medical device, and technology sales — building a quarter-million dollar income by doing exactly what my mother had always done. Showing up. Reading the room. Developing relationships. Getting the people in front of me to believe in something they couldn't yet see.
              </p>
              <p className="text-foreground font-medium">
                The skills were identical. The compensation was not.
              </p>
              <p>
                The difference was a framework. A business system. A structure that made the invisible labor visible and assigned it a value.
              </p>
              <p
                className="text-xl md:text-2xl font-serif italic border-l-2 pl-6 py-2 my-10"
                style={{ borderColor: TEAL, color: TEAL }}
              >
                I built MindSystem because the system that youth sports runs on has always needed a refresh. I built the Coach Certification because the people who deliver that system deserve to be compensated like the professionals they are.
              </p>
              <p>
                If that's you — if you've been doing this work and you know there's a better way to build a career around it — I want you on this waitlist.
              </p>
            </div>
          </div>
        </section>

        {/* ── WAITLIST FORM ────────────────────────────────────────── */}
        <section id="waitlist-form" className="py-24 md:py-32 bg-background">
          <div className="max-w-xl mx-auto px-6 text-center">
            <p
              className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: TEAL }}
            >
              Waitlist
            </p>
            <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
              Add Me to the Waitlist — I'm Ready
            </h2>
            <p className="text-muted-foreground text-lg mb-10 font-light">
              Waitlist members get first access and first pricing when the certification opens.
            </p>

            <a
              href="https://api.leadconnectorhq.com/widget/form/lA7mrUxIYvAItRA4uliG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 font-bold tracking-widest uppercase text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL, color: "#0a0a0a" }}
            >
              Add Me to the Waitlist
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <div className="mt-16">
              <Link
                href="/links"
                className="text-xs text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors tracking-wide"
              >
                ← Back to Links
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
