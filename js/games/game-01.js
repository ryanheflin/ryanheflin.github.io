window.seasonGames.push({

  id: 'game-01',

  gameNumber: 1,

  opponent: 'Opponent Name',

  homeAway: 'home',

  date: 'September 2026',

  competition: 'League',

  location: 'Altafulla',

  goalsFor: 2,

  goalsAgainst: 1,


  /* ==========================================================
     MATCH SUMMARY
  ========================================================== */

  summary:
    'A positive opening game with good moments of control and progression. We created chances consistently, but still had moments where pressure caused us to abandon possession too easily.',


  /* ==========================================================
     GENERAL MATCH STATISTICS
  ========================================================== */

  metrics: {

    'Possession': '55%',

    'Shots': 12,

    'Shots on Target': 6,

    'Big Chances': 4

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

    oursTotal: 14,

    oursRetained: 11,

    theirsTotal: 12,

    theirsWonByUs: 5

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

    total: 7,

    kicks: 5,

    carries: 2

  },


  /* ==========================================================
     MATCH ANALYSIS
  ========================================================== */

  analysis: `

    <p>
      We showed good moments of control in possession and were able
      to progress through pressure several times. Our best attacking
      moments came when we remained patient enough to recognize the
      available space before accelerating forward.
    </p>

    <p>
      We retained 11 of our 19 throw-ins. We also regained possession
      from 5 of the opponent's 12 throw-ins. Our organization around
      throw-ins was generally positive, although there were still
      opportunities to improve our movement before the restart.
    </p>

    <p>
      We recorded seven purposeless turnovers. Five came from kicking
      the ball away without a clear target or tactical reason, while
      two came from carrying directly into pressure without a realistic
      advantage.
    </p>

  `,


  /* ==========================================================
     CONNECTION TO GAME MODEL
  ========================================================== */

  gameModel: `

    <p>
      Our strongest moments reflected the habits we are trying to build:
      looking forward first, supporting the player on the ball, and
      moving together when the ball progressed.
    </p>

    <p>
      The seven purposeless turnovers are important because the issue
      was not simply that possession was lost. Players will make
      technical mistakes and purposeful forward actions will sometimes
      fail. The concern is when we stop trying to solve the problem and
      give possession away without a clear intention.
    </p>

  `,


  /* ==========================================================
     NEXT STEPS
  ========================================================== */

  nextSteps: `

    <p>
      We need to continue to take purposeful risks while
      reducing moments where pressure causes us to abandon the ball.
      We should not become afraid of turnovers. Instead, we want every
      action to have a recognizable football reason behind it.
    </p>

    <p>
     We need to improve our throw-in habits on both sides of the
      ball. Both create solutions when the throw is ours and become
      aggressive about winning the next action when the opponent
      restarts.
    </p>

  `,


  /* ==========================================================
     VIDEO CLIPS
  ========================================================== */

  clips: [

    /*
    {
      title: 'Example: Counterpress after loss',

      description:
        'Good reaction around the ball and immediate recovery of possession.',

      embedUrl:
        'YOUR_EMBED_URL_HERE'
    }
    */

  ]

});
