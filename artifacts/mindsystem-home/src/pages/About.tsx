import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";
import { useReservationModal } from "@/hooks/use-reservation";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const BASE = import.meta.env.BASE_URL;

export default function About() {
  const { isOpen, openModal, closeModal } = useReservationModal();

  useEffect(() => {
    document.title = "About Gabby Cole | MindSystem";
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-accent/20">
      <Navigation onReserveClick={openModal} />
      <ReservationModal isOpen={isOpen} onClose={closeModal} />

      <main id="main-content">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gabby portrait as full-bleed background */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${BASE}images/about-hero-v2.png`}
            alt="Gabby Cole on the volleyball court"
            className="w-full h-full object-cover object-center"
            style={{ transform: 'scale(0.85) translateY(8%)', transformOrigin: 'center top' }}
          />
          {/* Left text area fade */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,14,0.97) 0%, rgba(10,10,14,0.88) 28%, rgba(10,10,14,0.55) 50%, rgba(10,10,14,0.15) 68%, transparent 80%)' }} />
          {/* Bottom fade */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,14,1) 0%, rgba(10,10,14,0.85) 18%, rgba(10,10,14,0.3) 35%, transparent 50%)' }} />
          {/* Top nav vignette */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,14,0.6) 0%, transparent 20%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-32 pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-accent uppercase tracking-[0.3em] text-sm font-medium mb-6"
            >
              About Gabby Cole
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance leading-[1.05] tracking-tight mb-10"
            >
              I grew up <span className="italic text-accent">behind the curtain.</span>
            </motion.h1>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
              <motion.p variants={fadeUp}>
                My mother coached volleyball for forty years. And from the time I was old enough to sit in a gym I was watching, not from the stands like everyone else, but from the inside.
              </motion.p>
              <motion.p variants={fadeUp}>
                I saw the whole ecosystem, the athlete, the parent, the coach, the program, from an angle most people never get access to.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground font-normal">
                And then I became the athlete.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HERO CONTINUED, full copy ───────────────────────────── */}
      <section className="bg-background border-t border-border/20 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="lg:sticky lg:top-32"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={`${BASE}images/gabby-portrait.png`}
                    alt="Gabby Cole"
                    className="w-full h-full object-cover object-top relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-7 text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
            >
              <motion.p variants={fadeUp}>
                I saw the hours she put in that nobody ever noticed. I heard the conversations coaches have when parents aren't in the room. I watched what happened when programs overpromised and underdelivered. I saw the gap between what families were told and what was actually happening.
              </motion.p>
              <motion.p variants={fadeUp}>
                I sat on the bus with the athletes. I heard what they said to each other when the adults weren't listening. I watched young women carry pressure that nobody was acknowledging and perform confidence they didn't actually feel.
              </motion.p>
              <motion.p variants={fadeUp}>
                I earned a Division I scholarship to UC Berkeley and stepped onto the court carrying everything I had watched and absorbed for years. I was competitive. Assertive. Resilient. On that court I knew exactly who I was.
              </motion.p>
              <motion.p variants={fadeUp}>
                And then the sport ended. And I walked into the rest of my life carrying a system that was built entirely around outcomes, and nothing else.
              </motion.p>
              <motion.p variants={fadeUp}>
                The career. The title. The next level. I chased every external marker I could find because that's what the system had taught me to do. Not because anyone failed me. Because those questions, who are you becoming, what do you want, what do you stand for, were never part of the equation to begin with.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground font-medium border-l-2 border-accent pl-6 py-2 my-8 text-xl md:text-2xl font-serif italic">
                The system I grew up in developed what I could produce. It never developed who I was.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE REALIZATION ──────────────────────────── */}
      <section className="bg-card border-y border-border/40 py-24 md:py-32 overflow-hidden">
        {/* Full-width athlete image as cinematic banner */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden mb-20 md:mb-28"
        >
          <img
            src={`${BASE}images/cal-team-banner.png`}
            alt="Female athlete"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 42%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-card/70 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center pb-12 px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="text-3xl md:text-5xl font-serif text-center text-foreground leading-tight max-w-3xl"
            >
              The system wasn't broken. <span className="italic text-accent">It was built for someone else.</span>
            </motion.h2>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
          >
            <motion.p variants={fadeUp}>
              The system that youth sports was built on, outcomes, performance, winning, production, was not designed with your daughter in mind. It was designed for a world that rewarded a very specific kind of person. And that person was not her.
            </motion.p>
            <motion.p variants={fadeUp}>
              We live in a society that has been conditioning girls from birth to be smaller. Softer. Quieter. More agreeable. To take up less space. To make other people comfortable at the expense of their own voice. To smile through the hard parts. To be likeable before they are respected.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground font-medium text-xl md:text-2xl">
              Sport is one of the only places in your daughter's life where that conditioning gets interrupted.
            </motion.p>
            <motion.p variants={fadeUp}>
              On the court she is not asked to be smaller. She is coached to be bigger. Louder. More assertive. More competitive. She is taught to fail publicly and come back. To lead when it's uncomfortable. To take up every inch of space available to her and then demand more.
            </motion.p>
            <motion.p variants={fadeUp}>
              Those are not just athletic skills. Those are survival skills for a world that will spend the rest of her life asking her to be less than she is.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground font-medium border-l-2 border-accent pl-6 py-2 my-10 text-xl md:text-2xl font-serif italic">
              The court is where she learns to fight back against everything society is quietly teaching her to accept. But only if someone teaches her to see it that way.
            </motion.p>
            <motion.p variants={fadeUp}>
              If all we do is focus on the outcome, the playing time, the ranking, the scholarship, we hand her the medal and send her back into a world that will immediately start asking her to shrink again. And she will. Because nobody showed her what she was really building on that court.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground font-normal text-xl">
              I was that girl. I don't want your daughter to be.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: WHO I AM NOW ─────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* ── RIGHT: heading + text ── */}
              <div className="lg:col-span-6 space-y-7 text-lg md:text-xl text-muted-foreground leading-relaxed font-light order-2 lg:order-2">
                <motion.h2
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl md:text-4xl font-serif text-accent leading-tight mb-10"
                >
                  I walked through fire to get here. I'm building the shortcut so she doesn't have to.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-foreground font-medium text-xl md:text-2xl">
                  I am the most authentic version of myself that I have ever been. It took me until my forties to say that.
                </motion.p>
                <motion.p variants={fadeUp}>
                  For the last five years I have been unbuilding a life that was constructed by a former version of me. A version that was trained to chase outcomes, perform confidence, and measure worth by external markers. A version that was good at fitting into rooms that weren't built for her because she had spent a lifetime learning how.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Most people I know would not have taken the risks I have taken. Would not have faced the accountability I have faced. Would not have made the shifts I have made. Because unbuilding a life you worked hard to construct, even when you know it isn't really yours, is one of the hardest things a person can do.
                </motion.p>
                <motion.p variants={fadeUp} className="text-foreground font-medium">
                  But I did it. Because I had to. And because on the other side of it was the person I had been on that court all along, just finally living off it too.
                </motion.p>
                <motion.p variants={fadeUp}>
                  And then I had daughters. Twin girls. Fourteen years old. Competing at the highest levels of club volleyball in our region. Moving through the exact same system I grew up in. Being shaped by the exact same forces I was shaped by.
                </motion.p>
                <motion.p variants={fadeUp} className="text-foreground font-serif italic text-2xl md:text-3xl border-l-2 border-accent pl-6 py-2 my-10">
                  The cycle stops here.
                </motion.p>
                <motion.p variants={fadeUp}>
                  I started this work with mothers. Women trying to find themselves on the other side of motherhood, and what I discovered broke my heart a little. Most of them wouldn't do the work. Not because they didn't want to. But because they had already been so deeply conditioned to sacrifice themselves that they had convinced themselves they were okay with it.
                </motion.p>
                <motion.p variants={fadeUp}>
                  They were not okay. They just didn't have permission to say so.
                </motion.p>
                <motion.p variants={fadeUp} className="text-foreground font-medium text-xl">
                  So I went upstream.
                </motion.p>
                <motion.p variants={fadeUp}>
                  If the conditioning starts early, and it does, then the interruption has to start early too. Before the patterns calcify. Before the identity gets handed over piece by piece to everyone else's expectations.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Be ten. Be twelve. Be exactly where you are, fully, unapologetically, without rushing toward the next thing. Just be it intentionally. Notice what lights you up. Notice how you feel after a great practice versus a hard loss. Notice the moments when you feel most like yourself.
                </motion.p>
                <motion.p variants={fadeUp} className="text-foreground font-medium border-l-2 border-accent pl-6 py-2 my-8">
                  Because the young woman who has been building that self awareness since she was ten does not get to forty three and wonder where she went. She already knows. That is what MindSystem is built to do.
                </motion.p>
              </div>

              {/* ── LEFT: sticky photo stack, plain div so sticky isn't broken by transforms ── */}
              <div className="lg:col-span-6 order-1 lg:order-1 lg:sticky lg:top-24 space-y-4">
                <div className="w-full overflow-hidden aspect-[3/4]">
                  <img
                    src={`${BASE}images/about-hero.png`}
                    alt="Gabby Cole with family at a volleyball court"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full overflow-hidden aspect-[3/4]">
                  <img
                    src={`${BASE}images/gabby-daughters-3.png`}
                    alt="Gabby with her daughters at volleyball practice"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* ── DIVIDER IMAGE ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden"
      >
        <img
          src={`${BASE}images/gabby-bus-banner.png`}
          alt="Gabby Cole on the team bus, reflecting on the journey"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* ── SECTION 4: PHILOSOPHY ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/6 via-background to-background z-0" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-serif mb-14 text-balance leading-tight"
            >
              Everyone's been talking about it. <span className="italic text-accent">This is what you do about it.</span>
            </motion.h2>

            <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <motion.p variants={fadeUp}>
                There is no shortage of conversations about youth athlete mental health. About confidence. About pressure. About the importance of process over outcome. About balance and burnout and how to raise resilient kids in a high stakes sports environment.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground font-medium text-xl">
                The conversation has been happening for years. What hasn't existed, until now, is a system that actually does something about it.
              </motion.p>
              <motion.p variants={fadeUp}>
                Not a podcast episode you listen to on the way to practice. Not a book you read and feel inspired by and then put down. Not a therapist your athlete sees once a week who has never sat on a bench before a big match. Not another camp or clinic that addresses her skills and sends her back to the same family environment unchanged.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground font-serif italic text-2xl md:text-3xl border-l-2 border-accent pl-6 py-2 my-10">
                A system. Something your whole family moves through, together.
              </motion.p>
              <motion.p variants={fadeUp}>
                MindSystem is not built around awareness. Awareness is where most programs stop. MindSystem is built around action. Specific. Repeatable. Season long action that develops who your athlete is, not just what she produces.
              </motion.p>
              <motion.p variants={fadeUp}>
                This is not therapy. This is not coaching. This is not another thing to add to the schedule. This is the infrastructure your family has been missing.
              </motion.p>

              {/* 3 outcome cards */}
              <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                {[
                  { label: "The Athlete", body: "Knows herself better. Knows what she stands for. Knows how to reset when things go wrong. Knows, at ten, at twelve, at fourteen, who she is becoming." },
                  { label: "The Parent", body: "Stops guessing. Stops reacting. Stops absorbing her stress without knowing why. Starts guiding from inside the process." },
                  { label: "The Family", body: "Moves through a season with a shared process. A common framework for the hard moments, the quiet moments, the moments nobody prepares you for." },
                ].map(({ label, body }) => (
                  <div key={label} className="bg-card border border-border/60 p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent/60 to-transparent" />
                    <h3 className="text-xl font-serif text-accent mb-4">{label}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed font-light">{body}</p>
                  </div>
                ))}
              </motion.div>

              <motion.p variants={fadeUp} className="text-foreground font-medium text-xl md:text-2xl text-center py-4">
                That is what MindSystem does. That is what nothing else has done.
              </motion.p>
            </div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-16 text-center">
              <p className="text-muted-foreground text-lg mb-8">
                Ready to see it in action?
              </p>
              <a
                href="https://www.mazeperformance.ai/missing-conversation"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 bg-accent text-accent-foreground hover:bg-accent/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(0,212,200,0.2)] hover:shadow-[0_0_50px_rgba(0,212,200,0.45)] w-full sm:w-auto"
              >
                Join The Missing Conversation in Youth Sports, Free
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
