import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
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

const BrowseButton = ({ className = "" }: { className?: string }) => (
  <a
    href="#trainings"
    className={`group inline-flex items-center justify-center px-8 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(255,45,120,0.2)] hover:shadow-[0_0_40px_rgba(255,45,120,0.45)] ${className}`}
  >
    Browse Free Trainings
    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
  </a>
);

export default function Home() {
  const { isOpen, openModal, closeModal } = useReservationModal();

  useEffect(() => {
    document.title = "Free Trainings | Gabby Cole";
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navigation onReserveClick={openModal} />
      <ReservationModal isOpen={isOpen} onClose={closeModal} />

      <main id="main-content">

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${BASE}images/home-hero-v4.png`}
            alt="Young female athlete"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 25%' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,14,0.95) 0%, rgba(10,10,14,0.82) 24%, rgba(10,10,14,0.45) 44%, rgba(10,10,14,0.08) 57%, transparent 65%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,14,1) 0%, rgba(10,10,14,0.90) 22%, rgba(10,10,14,0.55) 38%, rgba(10,10,14,0.1) 52%, transparent 62%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,10,14,0.5) 0%, transparent 18%)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-28 pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-6xl md:text-8xl lg:text-9xl font-serif text-balance leading-[1.05] tracking-tight mb-8"
            >
              Stop <span className="italic text-primary/90">Guessing.</span><br />
              Start <span className="text-foreground">Guiding.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-light"
            >
              You already love watching her play. Now imagine loving the whole experience, not just the moments on the court but everything around them. The conversations. The car rides. The way your family moves through the hard parts together. That's not a fantasy. That's a system.
            </motion.p>

            <motion.div variants={fadeUp}>
              <BrowseButton />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── THIS IS FOR YOU ─────────────────────────────────────── */}
      <section className="bg-card border-t border-border/30 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
              This is for you if:
            </motion.h2>

            <motion.ul variants={fadeUp} className="space-y-5 mb-12">
              {[
                "You don't know what to say on the car ride home after a bad game",
                "You're not sure whether to push or give her space, and you're exhausted from guessing",
                "You've invested in privates, camps, and club fees and something still feels off",
                "When she's struggling, you're struggling, and you can't always explain why",
                "You love watching her compete and you have no idea what to do with everything around it",
                "You want this experience to build who she is, not just how she plays"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-4 mt-0.5" aria-hidden="true" />
                  <span className="text-muted-foreground text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
              This is also for you if you've been in club sports for years and still feel lost. If your athlete is thriving on the court and struggling everywhere else. If you've tried everything and nothing has fully landed. If you're not even sure this is your problem to solve.
            </motion.p>
            <motion.p variants={fadeUp} className="text-foreground text-lg font-medium leading-relaxed mb-10">
              It is. And you're in the right place.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg font-light leading-relaxed mb-12 border-l-2 border-primary pl-6 py-2">
              One rule before you dive in: no blame allowed. Not at the coach. Not at the club. Not at yourself. We're here to build something better, not relitigate everything that came before.
            </motion.p>

            <motion.div variants={fadeUp}>
              <BrowseButton />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── THE PROBLEM ─────────────────────────────────────────── */}
      <section className="bg-background border-t border-border/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
        >
          <img
            src={`${BASE}images/car-ride.png`}
            alt="Parent and child in the car ride home after a game"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 text-center px-6">
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm font-medium">
              The car ride home after a tough game
            </p>
          </div>
        </motion.div>

        <div className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
            >
              <div className="lg:col-span-5">
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif leading-tight sticky top-32">
                  Here's what <span className="italic text-primary">nobody</span> in youth sports is talking about.
                </motion.h2>
              </div>

              <div className="lg:col-span-7 space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                <motion.p variants={fadeUp}>
                  Everyone's focused on skill development. Playing time. College pathways. The next tournament. The next level.
                </motion.p>
                <motion.p variants={fadeUp} className="text-foreground font-normal text-xl md:text-2xl">
                  Nobody's talking about the process.
                </motion.p>
                <motion.p variants={fadeUp}>
                  The athlete who's losing confidence isn't failing because she lacks talent. The parent who doesn't know what to say on the car ride home isn't failing because they don't care. The family that shows up every single weekend and still leaves feeling like something is off isn't failing because they're not committed enough.
                </motion.p>
                <motion.p variants={fadeUp}>
                  They're measuring the wrong thing. When every conversation, every decision, and every weekend is organized around outcomes nobody can control, the athlete stops trusting the process. The parent stops trusting themselves. And the family stops trusting each other.
                </motion.p>
                <motion.p variants={fadeUp} className="text-foreground italic font-serif text-2xl md:text-3xl border-l-2 border-primary pl-6 py-2 my-12">
                  The process is the point. The outcome is the byproduct.
                </motion.p>
                <motion.p variants={fadeUp}>
                  That's what our free trainings are built around. Pick your entry point below and start moving through the maze with something most families never have: a compass.
                </motion.p>
                <motion.div variants={fadeUp} className="pt-4">
                  <BrowseButton />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FREE TRAININGS HUB ──────────────────────────────────── */}
      <section id="trainings" className="bg-card border-t border-border/30 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: "#ff2d78" }}>
                Free Trainings
              </p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-4">
                Pick where you want to start.
              </h2>
              <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto">
                All of these are free. Each one is built for youth sports families who are ready to stop reacting and start moving with intention.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Training 1: The Missing Framework */}
              <motion.div
                variants={fadeUp}
                className="bg-background border border-border/50 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/70 to-transparent" />
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs uppercase tracking-widest font-semibold border border-primary/40 text-primary px-3 py-1 self-start mb-6">
                    Training Replay
                  </span>
                  <h3 className="text-2xl font-serif text-foreground mb-3">The Missing Framework</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm mb-8 flex-1">
                    A free replay of Gabby's training session pulling back the curtain on why misalignment, not talent, not effort, not playing time, is the real issue inside youth sports families. And what to do about it.
                  </p>
                  <a
                    href="https://www.mazeperformance.ai/missing-conversation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-xs font-bold tracking-widest uppercase w-full"
                  >
                    Watch the Replay, It's Free
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>

              {/* Training 2: The Reframe */}
              <motion.div
                variants={fadeUp}
                className="bg-background border border-border/50 relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00d4c8]/70 to-transparent" />
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs uppercase tracking-widest font-semibold border border-[#00d4c8]/40 text-[#00d4c8] px-3 py-1 self-start mb-6">
                    Video + Worksheet
                  </span>
                  <h3 className="text-2xl font-serif text-foreground mb-3">The Reframe</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm mb-8 flex-1">
                    The season just ended. Before you switch clubs, email the coach, or lock in next year's schedule, get the exact process to reframe before you respond. Not react.
                  </p>
                  <a
                    href="https://members.gabbycole.com/reframe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-6 py-4 bg-transparent border border-[#00d4c8] text-[#00d4c8] hover:bg-[#00d4c8] hover:text-black transition-all text-xs font-bold tracking-widest uppercase w-full"
                  >
                    Get the Free Training
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>

              {/* Training 3: Coming Soon */}
              <motion.div
                variants={fadeUp}
                className="bg-background border border-dashed border-border/30 relative overflow-hidden flex flex-col"
              >
                <div className="p-8 flex flex-col flex-1 items-center justify-center text-center">
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground px-3 py-1 border border-border/30 self-center mb-6">
                    Coming Soon
                  </span>
                  <h3 className="text-2xl font-serif text-muted-foreground mb-3">More Trainings</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm mb-8">
                    Additional free trainings are in development. Check back soon.
                  </p>
                  <a
                    href="https://www.videoask.com/fg4ocxw4e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-6 py-4 bg-transparent border border-border/40 text-muted-foreground hover:bg-muted/30 transition-all text-xs font-bold tracking-widest uppercase w-full"
                  >
                    Fill Out the Parent Survey
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}
