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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const BASE = import.meta.env.BASE_URL;

const compassItems = [
  {
    title: "A Shared Language",
    body: "Most families are speaking two different languages about the same sport. When your athlete can tell you exactly how she's feeling and you actually understand what she means, something shifts. That's where the real conversation starts."
  },
  {
    title: "A Shared Definition of Success",
    body: "If your daughter thinks success means improvement and you think it means a roster spot, you're both working hard toward different finish lines. MindSystem aligns your family around one definition before the season starts so everyone is measuring the same thing."
  },
  {
    title: "A Shared Way to Track It",
    body: "Knowing what success looks like isn't enough if nobody is tracking whether it's happening. We build a simple, consistent system for marking progress, milestones your athlete owns, wins your family recognizes together, momentum you can both see in real time."
  }
];


export default function MindSystemPage() {
  const { isOpen, openModal, closeModal } = useReservationModal();

  useEffect(() => {
    document.title = "MindSystem Program | Gabby Cole";
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/20">
      <Navigation onReserveClick={openModal} />
      <ReservationModal isOpen={isOpen} onClose={closeModal} />

      <main id="main-content">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${BASE}images/mindsystem-hero-bg2.png`}
            alt="MindSystem youth sports family coaching program"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,14,0.97) 0%, rgba(10,10,14,0.88) 30%, rgba(10,10,14,0.60) 55%, rgba(10,10,14,0.2) 75%, transparent 88%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,14,1) 0%, rgba(10,10,14,0.85) 18%, rgba(10,10,14,0.3) 35%, transparent 52%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,14,0.7) 0%, transparent 20%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-32 pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-secondary uppercase tracking-[0.3em] text-sm font-medium mb-6"
            >
              The MindSystem
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-balance leading-[1.05] tracking-tight mb-8"
            >
              The chaos of youth sports isn't random. It's a{" "}
              <span className="italic text-secondary">maze.</span> And mazes have a way out.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-light max-w-2xl"
            >
              MindSystem is the compass that orients your whole family, so you stop reacting to the maze and start moving through it with intention.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="/free-trainings"
              className="group inline-flex items-center justify-center px-8 py-5 bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.15)] hover:shadow-[0_0_40px_rgba(155,47,247,0.4)] w-full sm:w-auto"
            >
              Not sure where to start? Browse our free trainings
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 1: WHAT MINDSYSTEM IS ───────────────────────── */}
      <section className="py-24 md:py-32 bg-background border-t border-border/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-20 text-center border border-border/40 divide-y md:divide-y-0 md:divide-x divide-border/40">
              {[
                { label: "Surviving", desc: "White-knuckling every weekend. Absorbing every result. Making it to the end and calling that a win." },
                { label: "vs.", desc: "" },
                { label: "Moving Through", desc: "Clarity. Connection. A family that knows where they are, where they're going, and how they're getting there, together." }
              ].map(({ label, desc }, i) => (
                <div key={i} className={`p-8 md:p-10 ${i === 1 ? "flex items-center justify-center bg-secondary/10" : ""}`}>
                  {i === 1 ? (
                    <span className="text-4xl font-serif text-secondary italic">{label}</span>
                  ) : (
                    <>
                      <h3 className={`text-2xl font-serif mb-4 ${i === 2 ? "text-secondary" : "text-muted-foreground"}`}>{label}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">{desc}</p>
                    </>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-serif text-foreground/90 italic">
              MindSystem is the difference.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── BANNER: MAZE ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${BASE}images/maze-banner2.png)`,
            backgroundSize: '140% auto',
            backgroundPosition: '70% center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-card/70 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-center text-white leading-tight max-w-4xl"
          >
            You've been in the <span className="text-secondary">maze</span> this whole time. <span className="italic text-white">Now it has a name.</span>
          </motion.h2>
        </div>
      </motion.div>

      {/* ── SECTION 2: THE FRAMEWORK, M.A.Z.E. ─────────────────── */}
      <section className="py-24 md:py-32 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <div className="max-w-3xl mb-20">
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                Every family in youth sports is caught inside the same ecosystem. Three roles. Three sets of expectations. Almost no shared language between them. That gap, between what everyone wants, what everyone experiences, and what nobody is naming, is the maze.
              </motion.p>
            </div>

            {/* Compass Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {compassItems.map(({ title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-background border border-border/50 p-8 md:p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary/70 to-transparent" />
                  <h3 className="text-xl md:text-2xl font-serif text-secondary mb-4">{title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="space-y-6 max-w-4xl mx-auto text-center">
              <p className="text-2xl md:text-3xl font-serif text-secondary italic">
                MindSystem is the compass.
              </p>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                We have two free trainings that pull back the curtain on what these patterns look like in real families, why they create the friction you're already experiencing, and what becomes possible when your family has a framework.
              </p>
              <div className="pt-4">
                <a
                  href="/free-trainings"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-secondary text-white hover:bg-secondary/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.2)] hover:shadow-[0_0_50px_rgba(155,47,247,0.45)]"
                >
                  Browse Free Trainings
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: THE THREE TIERS ───────────────────────────── */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background z-0" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Ready to move through the maze with a <span className="italic text-secondary">compass?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light mb-10 leading-relaxed">
              There are different ways to work with Gabby depending on where your family is right now and how much support you're looking for.
            </motion.p>

            <motion.div variants={fadeUp} className="bg-card border border-secondary/20 p-10 md:p-14 relative overflow-hidden mb-6">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary via-secondary/50 to-transparent" />
              <p className="text-xl font-serif text-foreground mb-8 leading-relaxed">
                The best place to start is a conversation.
              </p>
              <a
                href="https://calendly.com/gabby-mazeperformance/clarity-call-with-gabby"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-10 py-5 bg-secondary text-white hover:bg-secondary/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.2)] hover:shadow-[0_0_50px_rgba(155,47,247,0.45)]"
              >
                Book a Clarity Call
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
              <p className="text-muted-foreground font-light">
                Want to learn more about Gabby and how she works first?
              </p>
              <a
                href="/about"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-secondary/50 text-secondary hover:bg-secondary hover:text-white transition-all text-sm font-bold tracking-widest uppercase"
              >
                Meet Gabby
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: WHO IT'S FOR ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-16 text-center leading-tight">
              MindSystem is for the family that <span className="italic text-secondary">believes.</span>
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* For */}
              <motion.div variants={fadeUp} className="bg-background border border-border/50 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary/60 to-transparent" />
                <h3 className="text-2xl font-serif text-secondary mb-8">MindSystem is for you if:</h3>
                <ul className="space-y-5">
                  {[
                    "Sport is more than a game",
                    "Development matters more than outcomes",
                    "Your athlete is capable of more than she currently believes",
                    "The family environment is part of the performance equation",
                    "You are willing to be part of the process, not just watch it from the stands"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 shrink-0" />
                      <span className="text-muted-foreground font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Not For */}
              <motion.div variants={fadeUp} className="bg-muted/30 border border-border/30 p-8 md:p-12 opacity-70 hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-serif text-muted-foreground mb-8">MindSystem is <span className="italic">not</span> for you if:</h3>
                <ul className="space-y-5">
                  {[
                    "You want someone to fix your athlete",
                    "You expect results without reflection",
                    "You are not willing to look at your own role in the ecosystem"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2.5 shrink-0" />
                      <span className="text-muted-foreground font-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: WHERE TO START ────────────────────────────── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${BASE}images/champions-bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 z-0 bg-background/85" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Not sure where to start?
            </motion.h2>

            <motion.div variants={fadeUp} className="bg-card border border-secondary/20 p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary via-secondary/50 to-transparent" />
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Browse our free trainings and find your entry point into the maze.
              </p>
              <a
                href="/free-trainings"
                className="group inline-flex items-center justify-center px-10 py-5 bg-secondary text-white hover:bg-secondary/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.2)] hover:shadow-[0_0_50px_rgba(155,47,247,0.45)] w-full sm:w-auto"
              >
                Browse Free Trainings
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-card border-t border-border/40 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="text-3xl md:text-4xl font-serif text-foreground mb-4 leading-tight">
              The season is already happening.
            </motion.p>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground font-light mb-12">
              The question is whether your family is moving through it, or just surviving it.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="/free-trainings"
              className="group inline-flex items-center justify-center px-10 py-5 bg-secondary text-white hover:bg-secondary/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.2)] hover:shadow-[0_0_50px_rgba(155,47,247,0.45)] w-full sm:w-auto"
            >
              Browse Free Trainings
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
