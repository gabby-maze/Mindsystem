import { motion } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
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

export default function Home() {
  const { isOpen, openModal, closeModal } = useReservationModal();

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navigation onReserveClick={openModal} />
      <ReservationModal isOpen={isOpen} onClose={closeModal} />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed hero image with seamless fade into dark bg */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${BASE}images/hero-athlete.png`}
            alt="Young female athlete"
            className="w-full h-full object-cover object-center"
          />
          {/* Left fade - gentle bleed so image fills left but text stays readable */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,10,14,0.82) 0%, rgba(10,10,14,0.55) 30%, rgba(10,10,14,0.15) 55%, transparent 75%)' }} />
          {/* Bottom fade - seamless transition into next section */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,14,1) 0%, rgba(10,10,14,0.35) 12%, transparent 28%)' }} />
          {/* Subtle top vignette for nav area */}
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
              You already love watching her play. Now imagine loving the whole experience - not just the moments on the court but everything around them. The conversations. The car rides. The way your family moves through the hard parts together. That's not a fantasy. That's a system.
            </motion.p>

            <motion.button
              variants={fadeUp}
              onClick={openModal}
              className="group inline-flex items-center justify-center px-8 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm md:text-base font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] w-full sm:w-auto"
            >
              Reserve Your Spot - The Missing Conversation [FREE]
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── THE PROBLEM ─────────────────────────────────────────── */}
      <section className="bg-background border-t border-border/30">
        {/* Car ride image - full width, cinematic */}
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
                  Nobody's talking about misalignment.
                </motion.p>
                <motion.p variants={fadeUp}>
                  The athlete who's losing confidence isn't failing because she lacks talent. The parent who doesn't know what to say on the car ride home isn't failing because they don't care. The family that shows up every single weekend and still leaves feeling like something is off isn't failing because they're not committed enough.
                </motion.p>
                <motion.p variants={fadeUp}>
                  They're operating without a shared system. And when there's no shared system, everyone absorbs everyone else's stress - and nobody can figure out why.
                </motion.p>
                <motion.p variants={fadeUp} className="text-foreground italic font-serif text-2xl md:text-3xl border-l-2 border-primary pl-6 py-2 my-12">
                  That's the missing conversation. And it's the one we're going to have.
                </motion.p>
                <motion.div variants={fadeUp} className="pt-4">
                  <button
                    onClick={openModal}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-bold tracking-widest uppercase text-sm group"
                  >
                    Join The Missing Conversation - It's Free
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ─────────────────────────────────────── */}
      <section className="bg-card border-y border-border/30 overflow-hidden">
        {/* Athlete blue image as cinematic banner */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden"
        >
          <img
            src={`${BASE}images/athlete-blue.png`}
            alt="Female athlete with determination"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-transparent to-transparent" />
          {/* Overlay headline */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="text-4xl md:text-6xl font-serif text-center text-foreground leading-tight max-w-3xl"
            >
              You don't have to relate to all of this. <span className="italic text-primary">One is enough.</span>
            </motion.h2>
          </div>
        </motion.div>

        <div className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* For You */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="bg-background border border-border/50 p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />
                <h3 className="text-2xl font-serif mb-8 text-foreground">This is for you if:</h3>
                <ul className="space-y-6">
                  {[
                    "The car ride home after a tough game is the hardest part of your weekend",
                    "You love watching her compete and you have no idea what to say when it goes wrong",
                    "You've tried privates, camps, and changing clubs - and something still feels off",
                    "You never know whether to push or give her space - and you're tired of guessing",
                    "When she's struggling you're struggling - and you can't always explain why",
                    "You want this experience to build who she is - not just how she plays",
                    "You're showing up every weekend and wondering if you're doing your part right",
                    "You want to be the parent she needs - you're just not always sure what that looks like"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mr-4 mt-0.5" />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Not For You */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="bg-secondary/30 border border-border/30 p-8 md:p-12"
              >
                <h3 className="text-2xl font-serif mb-8 text-muted-foreground">This is <span className="italic">not</span> for you if:</h3>
                <ul className="space-y-6 opacity-70 hover:opacity-100 transition-opacity">
                  {[
                    "You're looking for someone to fix your athlete so you don't have to look at your own role",
                    "You'd rather hold onto the problem than work toward a solution",
                    "You believe the problem lives entirely outside your family",
                    "You're not willing to be part of the process - just the audience for the results"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <XCircle className="w-6 h-6 text-muted-foreground shrink-0 mr-4 mt-0.5" />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MISSING PIECE ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-12 text-balance leading-tight">
              Most families in youth sports are focused on the <span className="italic text-primary">wrong thing.</span>
            </motion.h2>

            <div className="space-y-8 text-lg md:text-2xl text-muted-foreground font-light leading-relaxed text-left max-w-4xl mx-auto">
              <motion.p variants={fadeUp}>
                Not because they don't care - because nobody told them where to look. Everyone is watching the scoreboard. The playing time. The college pathway. The next level.
              </motion.p>
              <motion.p variants={fadeUp} className="text-foreground font-medium">
                Nobody is watching the ecosystem around the athlete.
              </motion.p>
              <motion.p variants={fadeUp}>
                The family system. The shared language. The way everyone processes a tough weekend together - or doesn't. That's where the real development happens. Not just in her. In all of you.
              </motion.p>
              <motion.p variants={fadeUp}>
                When a family moves through a season with a shared process - a common framework for the hard moments, the quiet moments, the moments nobody prepares you for - everything changes. The athlete gets clearer. The parent gets confident. The family gets connected.
              </motion.p>
              <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-serif text-primary italic text-center py-8">
                The process is the point. The outcome is the byproduct.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="mt-12">
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center px-8 py-5 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-bold tracking-widest uppercase w-full sm:w-auto"
              >
                Learn More - Join The Missing Conversation
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MEET GABBY ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-card border-y border-border/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative lg:sticky lg:top-28"
            >
              <div className="aspect-[3/4] relative">
                <div className="absolute inset-4 border border-primary/30 translate-x-4 translate-y-4 z-0" />
                <img
                  src={`${BASE}images/gabby-portrait.png`}
                  alt="Gabby Cole"
                  className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-10 text-primary">
                I was your daughter once
              </motion.h2>

              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <motion.p variants={fadeUp}>
                  I played Division I volleyball at UC Berkeley. I grew up watching my mother coach for 40 years. I spent 17 years in pharmaceutical, medical device, and technology sales - high performance, high pressure, high stakes.
                </motion.p>
                <motion.p variants={fadeUp}>
                  On the court I knew exactly who I was. Competitive. Assertive. Resilient. I knew how to fail and come back. How to lead. How to stay when it got hard. How to perform under pressure without falling apart.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Off the court? I performed a version of that person. Because here's the truth about the system I grew up in - it wasn't built around who I was becoming. It was built around what I was producing. Winning. Effort. Outcomes. You put your head down. You worked hard. You chased the result. Nobody asked what kind of person you were building yourself into along the way. Nobody asked what you wanted. What you stood for. Who you were becoming beyond the sport.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Those questions weren't part of the equation. Not because anyone failed me. That was coaching and parenting of the times. And for the world we were living in - it made sense. But I carried that system with me into everything that came after. The career. The relationships. The decisions. Always chasing the external marker. The title. The association. The next level. Always performing the version of myself that looked most like winning.
                </motion.p>
                <motion.p variants={fadeUp}>
                  It took me decades to realize I had been so focused on the outcome that I had missed the entire process. And the process was the thing that was supposed to tell me who I was. I spent years trying to prove I was more than just a volleyball player. Years navigating an identity I didn't fully recognize as my own.
                </motion.p>
                <motion.p variants={fadeUp}>
                  Here's what I know now that I didn't know then. The world has changed. Kids have changed. Parenting has changed. The pressures our daughters are navigating - on the court, on their phones, in their friendships, in their own heads - are more complex than anything we faced at their age. But the system hasn't caught up.
                </motion.p>
                <motion.p variants={fadeUp}>
                  We are still coaching outcomes. Still parenting outcomes. Still measuring success by the scoreboard, the playing time, the scholarship offer. And our daughters are moving through one of the richest development environments of their lives - and walking away with half of what's available to them. I don't want that for your daughter.
                </motion.p>
                <motion.p variants={fadeUp} className="text-foreground font-medium border-l-2 border-primary pl-6 py-2 my-8">
                  I built MindSystem because the system needs a refresh. Because this generation of athletes deserves a framework that develops who they are - not just what they produce. And because the families around them deserve the tools to be part of that development. Not from the stands. From inside the process. Together.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="mt-10">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-foreground text-background hover:bg-primary transition-all text-sm font-bold tracking-widest uppercase w-full sm:w-auto"
                >
                  Hear the Full Story - Join The Missing Conversation
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MINDSET DIVIDER IMAGE ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden"
      >
        <img
          src={`${BASE}images/mindset-branded.png`}
          alt="MindSystem - Mindset, Compass Journal & M.A.Z.E. Model Mastery"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
      </motion.div>

      {/* ── WHAT TO EXPECT ──────────────────────────────────────── */}
      <section className="pb-24 md:pb-32 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background z-0" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="bg-card/80 backdrop-blur-md border border-border/60 p-8 md:p-16 shadow-2xl"
          >
            <div className="text-center mb-16">
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-4 text-primary">
                The Missing Conversation in Youth Sports
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-muted-foreground uppercase tracking-widest font-semibold">
                A free live session with Gabby Cole
              </motion.p>
            </div>

            <div className="space-y-16">
              {/* Part 1 */}
              <motion.div variants={fadeUp}>
                <h3 className="text-2xl font-serif mb-6">Stop me when this resonates:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "You don't know what to say on the car ride home after a bad game",
                    "You're not sure whether to push or give her space - and you're exhausted from guessing",
                    "You've invested in privates, camps, and club fees and something still feels off",
                    "When she's struggling, you're struggling - and you can't always explain why",
                    "You love watching her compete and you have no idea what to do with everything around it",
                    "You want this experience to build who she is - not just how she plays"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start bg-background/50 p-4 border border-border/30">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Part 2 */}
              <motion.div variants={fadeUp}>
                <h3 className="text-2xl font-serif mb-6">Here's what we're covering:</h3>
                <ol className="space-y-6">
                  {[
                    { title: "Why misalignment", desc: "— not pressure, not talent, not playing time - is the real reason families struggle in youth sports" },
                    { title: "What the ecosystem", desc: "around your athlete actually looks like - and what your role in it really is" },
                    { title: "Why everything you've tried", desc: "hasn't fully worked - and what's been missing" },
                    { title: "What a shared family", desc: "performance system looks like in practice" },
                    { title: "How to walk away", desc: "from this season with more than a tournament record" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary font-serif italic text-2xl mr-4 leading-none">{i + 1}.</span>
                      <span className="text-muted-foreground text-lg">
                        <strong className="text-foreground font-medium">{item.title}</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ol>
              </motion.div>

              {/* Callout */}
              <motion.div variants={fadeUp} className="bg-primary/5 border border-primary/20 p-8 text-center">
                <p className="text-lg md:text-xl font-serif text-foreground/90 leading-relaxed">
                  "This is not a webinar. It's the conversation the youth sports industry hasn't been willing to have. And when you stay to the end - there's an opportunity to take the next step with Gabby directly."
                </p>
              </motion.div>

              {/* Part 3 */}
              <motion.div variants={fadeUp}>
                <h3 className="text-2xl font-serif mb-6">This works even if:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "You're in your first club season and have no idea what you're doing",
                    "You've been in club sports for years and still feel lost",
                    "Your athlete is thriving on the court and struggling everywhere else",
                    "Your athlete is struggling on the court and you don't know how to help",
                    "You've tried everything and nothing has fully landed",
                    "You're not sure this is even your problem to solve"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Final Callout + CTA */}
              <motion.div variants={fadeUp} className="text-center pt-8 border-t border-border/50">
                <p className="text-xl font-serif mb-8 text-foreground">
                  <span className="text-primary">One rule before you join:</span> No blame allowed. Not at the coach. Not at the club. Not at yourself. We're here to build something better - not relitigate everything that came before. See you inside.
                </p>
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-lg font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] w-full sm:w-auto"
                >
                  Reserve My Spot - It's Free
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="py-12 border-t border-border/30 bg-background text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-foreground mb-4">MindSystem</h2>
          <p className="text-muted-foreground tracking-widest uppercase text-sm mb-8">
            Built for the families behind the athlete.
          </p>
          <div className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} MindSystem. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
