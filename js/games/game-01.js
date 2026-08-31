window.seasonGames.push({

  id: 'game-01',

  gameNumber: 1,

  opponent: 'Sant Pau s16 (Amistoso)',

  homeAway: 'away',

  date: 'August 2026',

  competition: 'Pretemporada',

  location: 'Camp Clar',

  goalsFor: 1,

  goalsAgainst: 2,


  /* ==========================================================
     MATCH SUMMARY
  ========================================================== */

  summary:
    'A positive opening friendly match. We showed a solid understanding of the first phase of possession, and showed marked improvement in our ability to retain possession and find open space. Defensively we pressed higher and condensed space, forcing the opponent into direct play.',


  /* ==========================================================
     GENERAL MATCH STATISTICS
  ========================================================== */

  metrics: {

    'Possession': '0%',

    'Shots': 0,

    'Shots on Target': 0,

    'Big Chances': 0

  },


  /* ==========================================================
     THROW-INS

     Our Throw-Ins Retained:
     We take the throw and maintain clear possession after
     the first action.

     Opponent Throw-Ins Won:
     They take the throw and we regain clear possession
     after the first action.
  ========================================================== */

  throwIns: {

    oursTotal: 0,

    oursRetained: 0,

    theirsTotal: 0,

    theirsWonByUs: 0

  },


  /* ==========================================================
     PURPOSELESS TURNOVERS

     A purposeless turnover is an avoidable loss where the
     player had a reasonable opportunity to make a controlled
     football action but instead gave the ball away through
     a rushed, hopeful, or thoughtless action.

     Do NOT count:
     - Purposeful passes that are intercepted
     - Bad touches after a good decision
     - Crosses or through balls attempting to create
     - Necessary clearances under genuine pressure
     - Legitimate attempts to beat an opponent
  ========================================================== */

  purposelessTurnovers: {

    total: 0,

    kicks: 0,

    carries: 0

  },


  /* ==========================================================
     MATCH ANALYSIS
  ========================================================== */

  analysis: `

<p> In possession, the first step was very positive. When the goalkeeper or central defenders had the ball, we consistently found our shape and gave ourselves options to build out. The central defenders found midfielders in space, we generally stayed calm instead of simply clearing the ball, and we were able to build the first layer before looking to get behind the defense. </p>

<p> We were also mostly calm in tighter spaces, although there were still a few moments when we had an opportunity to find feet and instead panicked or cleared the ball. The standard here will be very high. I don't mind purposeful passes that don't work. What I don't want is giving the ball away without an idea behind the action. </p>

<p> Defensively, our press did a good job of forcing Sant Pau inside or into the air when they tried to build from the back. Just as importantly, our defensive line stepped forward and condensed the space behind the press. We spent long periods in the attacking half and gave the opponent much less space than we did last season. </p>

<p> Our biggest area for improvement was transition. Our reactions were decent early, but slowed as the match went on. When we win the ball, we need to recognize the opponent's disorganization and move the ball into space immediately. When we lose it, we need to compress the space just as quickly, press the ball and force the opponent backward while we reorganize. </p>

`,

/* ==========================================================
CONNECTION TO GAME MODEL
========================================================== */

gameModel: `

<p> This was a very good first step in implementing our game model. After only three practices with a mixed group, we already saw the beginnings of the structure we want: organized build-up, players looking for solutions instead of kicking the ball away, a higher defensive line, and a team trying to control where the game is played. </p>

<p> This was only stage one. From here we will begin adding more structure, rotations and options higher up the field so that everyone sees the same problems and understands the solutions available. The goal is eventually to have a team that controls the match together while still giving individual players the freedom to recognize and create solutions. </p>

`,

/* ==========================================================
NEXT STEPS
========================================================== */

nextSteps: `

<p> We will continue building on our structure in possession while becoming even more demanding about purposeful use of the ball. Technical mistakes are fine. A pass with the right idea can fail. What we want to eliminate are moments when we panic and give possession away without trying to solve the problem. </p>

<p> We also need to improve the speed of our reactions during changes of possession. When we win it, play quickly into the space the opponent has left. When we lose it, immediately compress, press and prevent the opponent from playing forward. Those transition moments need to become automatic. </p>

`,


/* ==========================================================
   VIDEO CLIPS
========================================================== */

clips: [

  {
    title: 'Playing Out From the Back',

    description:
      'Ball starts with the goalkeeper playing short. Everyone in good shape. Joel finds Gio in space between the lines. He turns and drives at the defense, and we move forward. Gio sees all forward options run away from him and the defense collapse, so he turns and plays wide. Yael is in a good spot, and calmly drops the ball back. The opponent presses, and Gio is once again in a good spot and we have good shape. Gio receives another pass between the lines, turns, and drives forward again. This time, our winger drops back to help. Gio breaks the next line with a pass, and then we have 1v1 on the wing. Drive into the attacking third and play a dangerous ball central, and everyone stays high to press on defense. Perfect play.',

    embedUrl:
      'https://www.youtube.com/embed/Azffxndlee0'
  }

]

});
