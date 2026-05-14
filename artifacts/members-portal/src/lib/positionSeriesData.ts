export interface Position {
  id: string;
  title: string;
  coreSkill: string;
  coreSkillDesc: string;
  youtubeId: string | null;
  athlete: {
    summary: string;
    takeaways: string[];
  };
  parent: {
    summary: string;
    takeaways: string[];
  };
}

export const POSITIONS: Position[] = [
  {
    id: "serving-specialist",
    title: "Serving Specialist",
    coreSkill: "Composure",
    coreSkillDesc:
      "The serving specialist is a chess move. She is deployed by her coach at a specific moment — to target a weak passer, to change momentum, to break the other team's rhythm — because her serve is a weapon that can shift the game. But she executes that weapon cold. No warm up. No runway. She steps onto the court in the middle of a live game and has to perform at full capacity immediately. What determines whether she delivers is almost entirely mental. The athlete who has a practiced pre-serve routine — a specific sequence she has repeated hundreds of times — arrives at the line already steady. The athlete without one arrives carrying the weight of the gym, the score, and the moment. Composure is the skill. And it is built long before she ever steps to that line.",
    youtubeId: "Xyzn8AUcaPA",
    athlete: {
      summary:
        "When your coach calls your name — they are not calling the easiest option. They are calling the player they trust to change the game in the highest pressure moment. That is an honor. Walk to that line like you know it. Your pre-serve routine is not a superstition — it is the tool that regulates your body and focuses your mind before you contact the ball. Build it. Practice it. Make it automatic. And when the moment comes — trust it.",
      takeaways: [
        "Your number one job is the ace. If your ace rate is higher than your error rate — you are valuable. Track that metric.",
        "Consistency is more important than power. An aggressive serve that lands in bounds every time is worth more than an occasional highlight that also produces errors.",
        "Develop a pre-serve routine and practice it in every low-stakes situation — warmups, practice serves, drills. Make it so automatic that it runs itself when the pressure is high.",
        "Know the other team. Know who struggles with float serves. Know who freezes against jump serves. Your coach is making a strategic decision when they call your name — be ready to execute the right serve for the moment.",
        "The walk to the service line is part of the performance. Head up. Shoulders back. Breathing. Walk like someone who has already decided the serve is going in.",
      ],
    },
    parent: {
      summary:
        "The serving specialist's role is one of the most pressure-concentrated in sport — one moment, maximum stakes, no warm up. What she needs from you is an environment that builds composure in everyday life long before she ever needs it in a match. The pre-serve routine she develops, the ability to narrow her focus under pressure, the confidence to walk to that line ready — all of it is built in the low-stakes moments that happen away from the gym.",
      takeaways: [
        "Do not evaluate your serving specialist by whether the serve goes in or out. Watch the walk to the service line. Does she walk with purpose and composure — or does she carry the weight of the moment onto the court with her?",
        "Help her develop a pre-performance routine for high stakes moments in everyday life — before a test, before a presentation, before any moment that requires her to perform under pressure. That practice transfers directly to the court.",
        "Celebrate the aggressive serve — even when it goes out. The willingness to go for it under pressure is the skill. The outcome is secondary.",
        "Ask after matches: \"Were you ready when your name was called?\" and \"Did you trust your routine?\"",
        "The serving specialist who knows her family sees her role as a position of trust — not a consolation — walks to that line differently. Reinforce that truth at home.",
      ],
    },
  },
  {
    id: "defensive-specialist",
    title: "Defensive Specialist",
    coreSkill: "Worth Independent of Playing Time",
    coreSkillDesc:
      "The defensive specialist is a tactical choice — not a gap filler. She is subbed in for roughly half the match to strengthen the back row in the rotations where her skill set gives the team the best chance to win. That means she also watches half the match. And what she does during that half determines everything about what she delivers during her half. The DS who treats bench time as waiting will always need two or three contacts to arrive when her name is called. The DS who treats bench time as active preparation — tracking the other team's tendencies, staying mentally engaged, keeping her body warm — shows up ready. Her value is not measured by how much she plays. It is measured by what she delivers with the time she has.",
    youtubeId: "NRmqXMBsO5Y",
    athlete: {
      summary:
        "Your role is not smaller because you do not play every rotation. It is more concentrated. When you are on that court — you are there because your coach made a deliberate decision that your skill set gives the team the best chance to win in that moment. That is trust. Honor it by being ready every single time your name is called. And build that readiness in the moments nobody is watching — on the bench, between rotations, in every practice.",
      takeaways: [
        "You play the most important rotations — not the most rotations. There is a difference. Own it.",
        "What you do on the bench is as important as what you do on the court. Study the game. Track patterns. Stay warm. Arrive ready.",
        "Your value is not determined by your playing time. It is determined by what you do with the time you have. Make every contact count.",
        "The DS who is mentally checked out on the bench trains herself to be slow when her moment arrives. Stay in the game — physically and mentally — even when you are not on the court.",
        "Readiness is a skill. It is built through practice, through discipline, and through choosing to be invested in every moment — not just your own.",
      ],
    },
    parent: {
      summary:
        "The most important thing you can do for your defensive specialist is protect how she sees her role. If she hears frustration about playing time at home, she brings that frustration to the bench — and it costs her the readiness that makes her valuable. The DS who believes her role is important, and whose family reinforces that belief, shows up differently. She impacts the game every time she enters. Not because the opportunity handed itself to her — because she was ready.",
      takeaways: [
        "Do not track the rotations she misses. Watch how she enters the game. Does she arrive sharp and ready — or does she take time to settle in? That transition tells you everything about how she is using her bench time.",
        "The way you talk about her playing time at home directly shapes her relationship with her role. Frustration at home becomes frustration on the bench.",
        "Help her see the bench as a classroom. What is she learning? What is she tracking? What does she know about the game by the time she enters that the starting players don't?",
        "Ask after matches: \"Were you ready when your name was called?\" — not \"Why didn't you play more?\"",
        "The DS who knows her family is proud of her role — not just tolerating it — plays like it. That belief starts at home.",
      ],
    },
  },
  {
    id: "setter",
    title: "Setter",
    coreSkill: "Trust",
    coreSkillDesc:
      "The setter makes a decision on almost every offensive play — in under one second — while tracking five other players, reading the block, managing the pass, and determining who on her team is ready to score right now. She cannot hesitate. A committed wrong call is more valuable to her team than a hesitant right one. But beyond the technical demand, the setter is the emotional thermostat of the team. When she is calm, the team is calm. When she is rattled, the team feels it. Her job is not just to run the offense — it is to hold the mental environment together while doing it.",
    youtubeId: "NfV1Rlrp6uw",
    athlete: {
      summary:
        "Your job is to make a decision and commit to it completely — every single time. The hitter is already moving. The offense is already running. Doubt has no place in that window. The setter who trusts herself under pressure — who can make the wrong call confidently and learn from it — is worth more to her team than a technically perfect setter who hesitates. Trust is the skill. Build it every day.",
      takeaways: [
        "A committed wrong call is more valuable than a hesitant right one. Commit. Learn. Adjust. Repeat.",
        "You are the emotional thermostat of your team. How you carry yourself after a bad set tells every player on that bench whether it is okay to stay confident. Be intentional about what you are communicating.",
        "Decision making is a muscle that fatigues over time. Develop routines between plays that reset your focus — so you perform in the fifth set the way you perform in the first.",
        "Your relationship with every hitter on your team is one of your most important assets. Know what they need. Know who is hot. Know when to go away from someone and when to bring them back.",
        "Leadership does not require perfection. It requires consistency. Show up the same way — composed, communicative, committed — regardless of the score.",
      ],
    },
    parent: {
      summary:
        "The setter carries the cognitive and emotional weight of the entire offense. Her performance is relational — every decision she makes is about someone else. What she needs from you at home is an environment that builds trust in her own judgment and models calm under pressure. The setter who has been taught to lead from steadiness — not from certainty — is the one who elevates her team in the moments that matter most.",
      takeaways: [
        "Do not evaluate your setter by assists or outcomes. Watch her face after a bad set. Does she stay composed and communicate — or does her body language pull inward?",
        "The setter who second-guesses her decisions at home will second-guess them on the court. Reinforce her judgment. Let her be right and wrong and learn from both without drama.",
        "Her leadership is built through the consistency of her presence — not through being told to lead. Model calm under pressure in your own life and she will absorb it.",
        "Ask after matches: \"Did you trust yourself tonight?\" — not \"Why did you keep setting the outside?\"",
        "The setter's relationship with her hitters is built in practice and in team culture. Support that culture at home by speaking positively about her teammates and her coach.",
      ],
    },
  },
  {
    id: "opposite-right-side",
    title: "Opposite / Right Side",
    coreSkill: "Identity",
    coreSkillDesc:
      "The opposite hitter is called upon most often when the system breaks down — when the pass is off, the setter is scrambling, and the ball arriving is not clean or ideal. She is the player her team turns to in the hardest moments. That requires more than confidence — it requires identity. The deep internal belief that this moment belongs to her regardless of the circumstances around it. An opposite who has not built that identity hesitates in exactly the moments her team needs her most.",
    youtubeId: "psGUXvJGfrk",
    athlete: {
      summary:
        "Your position asks you to be ready for the moment nobody else wants — cold, under pressure, with an imperfect ball. That is not a burden. That is the honor of your role. The opposite who walks to her approach knowing she was built for this moment — regardless of the score, regardless of the last play — is the player coaches trust with the game on the line. Build that belief deliberately. It does not come from skill alone.",
      takeaways: [
        "You do not pass — which means you watch a lot before you are called on. Use that time. Study the block. Study the setter's tendencies. Arrive at every opportunity already calibrated.",
        "Your most dangerous quality as a hitter is your angle of attack. You have access to shots most hitters cannot make from the right side. Know your toolbox and use it.",
        "The opposite who drifts mentally between her opportunities trains her brain to be absent when it matters most. Stay in every rally — physically, mentally, visibly.",
        "When you get the ugly ball in a high pressure moment — that is your resume. How you handle it determines whether your coach trusts you with the next one.",
        "Identity is built through the accumulation of small decisions to stay aggressive, stay present, and stay committed — even when the result is not what you wanted.",
      ],
    },
    parent: {
      summary:
        "The opposite hitter's value on the court is often invisible until the moment it isn't. She may have fewer obvious touches than the outside hitter — but what she does between those touches, and what she does when her moment arrives, is what defines her. Your job is to help her stay mentally present and engaged during the waiting — and to understand that her role is a position of trust, not limitation.",
      takeaways: [
        "Do not measure your right side by attempts or kills. Watch what she does when the ball is not coming to her. Is she engaged and ready — or has she checked out?",
        "The opposite who disengages between her opportunities trains herself to be slow when the moment arrives. Help her understand that the bench and the waiting are part of the performance.",
        "Her most common set arrives in broken situations — out of system, under pressure, imperfect. Celebrate the swing, not just the outcome. Aggressive in a hard moment is the job done right.",
        "Ask after matches: \"Were you ready every time your number was called?\" — not \"Why didn't you get set more?\"",
        "Build the habit of full engagement at home — in moments where she is not the center of attention but still has a role to play. That habit transfers directly to the court.",
      ],
    },
  },
  {
    id: "middle-blocker",
    title: "Middle Blocker",
    coreSkill: "Presence",
    coreSkillDesc:
      "The middle blocker's most valuable contribution to the game often happens when the ball never touches her. She closes space, influences hitters, and shapes offensive decisions — before contact is even made. Her decision window is the smallest of any position on the court. She reads the setter, reads the hitter, and moves — all in under a second. There is no time to think. There is only time to react. Which means her game depends almost entirely on what happens before conscious thought kicks in. The middle who is carrying the last play is always late — not because she doesn't know what to do, but because the mental noise got there first. Presence is the skill that separates a good middle from a great one.",
    youtubeId: null,
    athlete: {
      summary:
        "Your game lives in this moment — not the last one, not the next one. The fastest path to becoming a better middle blocker is not more reps on your footwork. It is learning to clear your mind completely between plays so your instincts can work without interference. The middle who is fully present on every rally — even when the ball isn't coming to her — is the one the offense has to plan around.",
      takeaways: [
        "Your impact on the game is often invisible from the stands. Trust that. The other team adjusting their offense because of your positioning is you doing your job.",
        "After a missed block — reset immediately. The time you spend replaying it is the time your setter is already making the next decision. Be ready.",
        "Stay engaged on every rally, not just the ones where you get set. Your presence on the court affects what the other team believes they can do — even when you don't touch the ball.",
        "Quick attack timing is a relationship between you and your setter. Build it in practice. The more you run it, the more automatic it becomes — and automatic is what survives pressure.",
        "When your mind is clear, the game slows down. That is not luck. That is what presence produces.",
      ],
    },
    parent: {
      summary:
        "The middle blocker's stats will often look lighter than other positions — fewer kills, fewer obvious moments. This is not a reflection of her contribution. It is a reflection of how her position works. Your job is to help her understand that her value on the court is not always visible, and that the most important thing you can observe is not her block count — it is how quickly she recovers and resets after a missed one.",
      takeaways: [
        "Do not measure your middle blocker by blocks or kills. Watch how fast she recovers after a missed block — that is the real indicator of her mental development.",
        "If her body language collapses after an error and stays down for more than one play — that is the pattern worth addressing at home, not the error itself.",
        "Ask after tournaments: \"Were you present tonight?\" — not \"Did you get set enough?\" That question tells her what actually matters.",
        "The middle who gets frustrated about not being set is focused on the wrong thing. Help her understand that her job is to be ready every single rally — and that readiness is always rewarded over time.",
        "Build presence at home by creating moments where she practices staying focused on what is in front of her — not what just happened or what might happen next.",
      ],
    },
  },
  {
    id: "outside-hitter",
    title: "Outside Hitter",
    coreSkill: "Failure Tolerance",
    coreSkillDesc:
      "The outside hitter is the primary attacker — which means she is also the most visible when things go wrong. She is set the most, targeted the most, and scrutinized the most. The mental demand of this position is not just confidence — it is failure tolerance. The deep, practiced ability to let go of the last ball completely and bring full aggression to the next one. An outside hitter who has not built this skill starts managing how she looks instead of competing. She tips when she should swing. She protects herself instead of attacking. The best outside hitters are not the ones who never make errors — they are the ones who make errors and come back harder.",
    youtubeId: null,
    athlete: {
      summary:
        "Your job is to be aggressive. Every single time. The error does not change that. The block does not change that. The score does not change that. Your value on this team is not measured play by play — it is measured by your willingness to keep competing when it would be easier to shrink. The outside hitter who stays aggressive through a rough stretch is worth more to her team than a perfect hitter who disappears under pressure.",
      takeaways: [
        "Your position demands that you fail publicly and keep swinging. That is not a bug — it is the job description.",
        "Watch what you do after you get blocked. Do you come back aggressive or do you start protecting yourself? That pattern tells you everything about where your development is right now.",
        "You have access to the entire court — line, angle, cut shot, high hands off the block. But you can only see those options when your mind is clear. Clear comes from releasing the last play completely.",
        "The goal is a short memory and a long commitment. Let it go fast. Come back harder every time.",
        "Smart hitters adjust. After an error, ask yourself: what did the block take away, and what did it leave open? Use the information. That is game IQ developing in real time.",
      ],
    },
    parent: {
      summary:
        "The outside hitter carries more visible pressure than any other position on the court. What she needs from you is not analysis of her performance — it is a home environment that does not attach her worth to her last swing. The parent who separates outcome from identity gives their outside hitter the internal infrastructure to stay aggressive when everything is on the line.",
      takeaways: [
        "Do not evaluate your outside hitter by kills. Watch what she does after she gets blocked. Does she stay aggressive or does she go passive? That is the real indicator.",
        "The conversation after a tough match is not about what went wrong technically. It is about how she responded emotionally. That is where the development lives.",
        "If she hears at home that her value is tied to her performance — she will play not to fail instead of playing to score. Those produce completely different athletes.",
        "Ask her: \"Did you stay aggressive tonight?\" — not \"How many kills did you get?\" That question tells her what you are actually watching for.",
        "The outside hitter who knows her family believes in her regardless of the outcome swings differently. Give her that foundation and watch what it produces.",
      ],
    },
  },
  {
    id: "libero",
    title: "Libero",
    coreSkill: "Emotional Regulation + Ball Control Mastery",
    coreSkillDesc:
      "The libero is a ball control specialist — and that specialty is the foundation that everything else is built on. Serve receive, defense, coverage, out of system plays, placement — every contact she makes is an expression of that one core skill. But the libero position demands more than technical excellence. She is the vocal leader of the back row, reading the offense on the other side of the net and organizing her defenders in real time. None of those intangibles — the leadership, the quick reset, the court vision — become available until ball control is mastered. When the contact becomes automatic and trusted, her mind frees up to play the game instead of just reacting to it.",
    youtubeId: "MawGAHPDMd4",
    athlete: {
      summary:
        "Your one job is ball control — and it is the key that unlocks everything else you are capable of as a libero. The leadership, the communication, the ability to reset quickly after a mistake — none of it is accessible until passing and digging become automatic. Put your reps in. Trust the process. When you stop thinking about the contact, you start seeing the game.",
      takeaways: [
        "Ball control is your foundation. Every other skill you want to develop lives on top of it.",
        "You have approximately two seconds between a mistake and the next ball. Practice your reset — not just your technique.",
        "Your job doesn't stop at passing. You are the leader of the back row. Call the shots. Be loud. Organize the people around you.",
        "The goal is to make ball control so automatic that your brain is free to read the game before it happens — not react to it after.",
        "Mastery takes time. Every rep — even in a bad practice — is building toward the moment when it all clicks.",
      ],
    },
    parent: {
      summary:
        "The most important thing you can do for your libero is give her the patience and environment to build her foundation. Ball control mastery is not a weekend achievement — it is built contact by contact over time. When she struggles, she is not failing. She is in the process. Your job is to protect that process, not rush it.",
      takeaways: [
        "Do not evaluate your libero by passing percentage alone. Watch what happens after a mistake — does she reset quickly or carry it?",
        "The intangibles you want to see — leadership, communication, composure — are locked behind ball control. They emerge naturally when the foundation is solid.",
        "Your energy around her errors shapes how she relates to mistakes. If errors feel catastrophic at home, they will feel catastrophic on the court.",
        "Ask after practice: \"What did you learn today?\" — not \"How did it go?\" That shift tells her that process matters more than outcome.",
        "The libero who knows her coach trusts her to figure it out — and her parent trusts the same — develops faster than any amount of extra reps can produce.",
      ],
    },
  },
];
