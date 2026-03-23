import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
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

const mazeItems = [
  {
    letter: "M",
    title: "Mindset",
    body: "Who is she becoming as a competitor? What does she stand for? What drives her? Most athletes move through entire seasons — entire careers — without ever being asked these questions. MindSystem starts here."
  },
  {
    letter: "A",
    title: "Analyze",
    body: "What habits and behaviors are shaping her outcomes? Sleep. Nutrition. Focus. Emotional patterns. The things nobody tracks until they become problems. MindSystem makes them visible before they do."
  },
  {
    letter: "Z",
    title: "Zero In",
    body: "What are the three skills she is hyper focused on developing this season? Once identified, those three skills get turned into trackable habits — measurable metrics and milestones she can monitor at practice, in games, and off the court. When the athlete, the parent, and the environment are all focused on the same targets — everything aligns."
  },
  {
    letter: "E",
    title: "Execute",
    body: "How does she reflect on real performance? What worked. What didn't. How did she respond emotionally. This is where the process becomes a habit. And habits become identity."
  }
];

const tiers = [
  {
    name: "MindSystem Independent",
    tag: "Self-Paced",
    description: "This is for you if you're ready to stop winging it and start moving through this season with intention — on your own terms and at your own pace.",
    items: [
      "The MindSystem athlete journal — your athlete's physical compass for the full 6 months",
      "The MindSystem digital family journal — a shared compass for the family unit",
      "Guided video instruction for navigating both journals",
      "A DIY family onboarding session to get everyone oriented and moving in the same direction",
      "6 months of access from the day you purchase"
    ],
    note: "This is not a course you sit and watch. It's a process you move through — together."
  },
  {
    name: "MindSystem Supported",
    tag: "Group Experience",
    description: "This is for you if you want the tools AND the reassurance that you're using them right — with a community of families navigating the exact same maze beside you.",
    items: [
      "Everything in MindSystem Independent",
      "The MindSystem physical family journal — your family's shared compass for the season",
      "Biweekly live group athlete calls — where your athlete reflects, recalibrates, and connects with other athletes",
      "Biweekly live group parent calls — where you get support, clarity, and confidence",
    ],
    note: "You're not being coached. You're being supported as you build."
  },
  {
    name: "MindSystem Inner Circle",
    tag: "Direct Access",
    description: "This is for you if you want Gabby in your corner — not just the system, but the person who built it walking alongside your family for the full 12 weeks.",
    items: [
      "Everything in MindSystem Supported",
      "A private family onboarding call with Gabby — to get your family oriented, aligned, and moving in the same direction from day one",
      "Direct Voxer access to Gabby for the full 12 weeks — voice and text",
      "24 hour response time — for the moments that can't wait"
    ],
    note: "This is not crisis management. This is having the person who built the compass beside you as you use it."
  }
];

export default function MindSystemPage() {
  const { isOpen, openModal, closeModal } = useReservationModal();

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/20">
      <Navigation onReserveClick={openModal} />
      <ReservationModal isOpen={isOpen} onClose={closeModal} />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${BASE}images/mindsystem-hero-bg2.png`}
            alt="MindSystem"
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
              MindSystem is the compass that orients your whole family — so you stop reacting to the maze and start moving through it with intention.
            </motion.p>

            <motion.button
              variants={fadeUp}
              onClick={openModal}
              className="group inline-flex items-center justify-center px-8 py-5 bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.15)] hover:shadow-[0_0_40px_rgba(155,47,247,0.4)] w-full sm:w-auto"
            >
              Not sure where to start? Join The Missing Conversation — Free
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
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
                { label: "Moving Through", desc: "Clarity. Connection. A family that knows where they are, where they're going, and how they're getting there — together." }
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

      {/* ── SECTION 2: THE FRAMEWORK — M.A.Z.E. ─────────────────── */}
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
                Every family in youth sports is caught inside the same ecosystem. Three roles. Three sets of expectations. Almost no shared language between them. That gap — between what everyone wants, what everyone experiences, and what nobody is naming — is the maze.
              </motion.p>
            </div>

            {/* M.A.Z.E. Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {mazeItems.map(({ letter, title, body }, i) => (
                <motion.div
                  key={letter}
                  variants={fadeUp}
                  className="bg-background border border-border/50 p-8 md:p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary/70 to-transparent" />
                  <div className="flex items-start gap-6">
                    <span className="text-7xl md:text-8xl font-serif text-secondary/20 leading-none select-none shrink-0">
                      {letter}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif text-secondary mb-4">{letter} — {title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">{body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="space-y-6 max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Most families are reacting to all four of these territories every single weekend without a shared framework for any of them. That's not a failure. That's what happens when you're in a maze without a compass.
              </p>
              <p className="text-2xl md:text-3xl font-serif text-secondary italic">
                MindSystem is the compass.
              </p>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                In The Missing Conversation in Youth Sports we pull back the curtain on all four walls of the maze — what they look like in real families, why they create the patterns you're already experiencing, and what becomes possible when your family has a compass.
              </p>
              <div className="pt-4">
                <button
                  onClick={openModal}
                  className="group inline-flex items-center justify-center px-8 py-5 bg-secondary text-white hover:bg-secondary/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.2)] hover:shadow-[0_0_50px_rgba(155,47,247,0.45)] w-full sm:w-auto"
                >
                  Reserve Your Spot — The Missing Conversation — Free
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: THE THREE TIERS ───────────────────────────── */}
      <section className="py-24 md:py-32 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-background to-background z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Three ways to move through <span className="italic text-secondary">the maze.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              All three tiers open after The Missing Conversation. Reserve your spot to get access.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map(({ name, tag, description, items, note }, i) => (
              <motion.div
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-card border border-border/60 relative overflow-hidden flex flex-col"
              >
                {/* Purple top stripe */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-transparent" />

                {/* Lock overlay */}
                <div className="absolute inset-0 z-20 bg-background/70 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-secondary/40 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-sm uppercase tracking-widest text-secondary font-semibold">Locked</p>
                  <p className="text-xs text-muted-foreground text-center max-w-[180px]">
                    Opens after The Missing Conversation
                  </p>
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <div className="mb-6 opacity-40">
                    <span className="text-xs uppercase tracking-widest text-secondary font-semibold border border-secondary/40 px-3 py-1">{tag}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-4">{name}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-8 opacity-40">{description}</p>
                  <ul className="space-y-3 mb-8 flex-1 opacity-40">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-foreground/60 italic font-serif border-t border-border/30 pt-6 opacity-40">{note}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
                    "You are willing to be part of the process — not just watch it from the stands"
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
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Not sure which tier is right for you?
            </motion.h2>

            <motion.div variants={fadeUp} className="bg-card border border-secondary/20 p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary via-secondary/50 to-transparent" />
              <p className="text-xl md:text-2xl font-serif text-foreground mb-6 leading-relaxed">
                Start with <span className="italic text-secondary">The Missing Conversation in Youth Sports.</span>
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                This is our free live session where Gabby pulls back the curtain on the maze — what it actually looks like inside real families, why it creates the patterns you're already experiencing, and what becomes possible when your family has a compass.
              </p>
              <p className="text-foreground font-medium text-lg mb-10">
                By the end of that session you won't be guessing which tier is right for you. You'll know.
              </p>
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center px-10 py-5 bg-secondary text-white hover:bg-secondary/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.2)] hover:shadow-[0_0_50px_rgba(155,47,247,0.45)] w-full sm:w-auto"
              >
                Reserve My Spot — It's Free
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
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
              The question is whether your family is moving through it — or just surviving it.
            </motion.p>
            <motion.button
              variants={fadeUp}
              onClick={openModal}
              className="group inline-flex items-center justify-center px-10 py-5 bg-secondary text-white hover:bg-secondary/90 transition-all text-sm font-bold tracking-widest uppercase shadow-[0_0_30px_rgba(155,47,247,0.2)] hover:shadow-[0_0_50px_rgba(155,47,247,0.45)] w-full sm:w-auto"
            >
              Reserve My Spot — The Missing Conversation [Free]
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
