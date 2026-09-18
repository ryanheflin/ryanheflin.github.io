window.seasonGames.push({

  id: 'game-03',

  gameNumber: 3,

  matchType: 'friendly',

  opponent: 'San Pere i San Pau S15 (Amistoso)',

  homeAway: 'home',

  date: '13 September 2026',

  competition: 'Pretemporada',

  location: 'Altafulla',

  goalsFor: 3,

  goalsAgainst: 3,


  /* ==========================================================
     MATCH SUMMARY
  ========================================================== */

  summary:
    'Fue un partido bastante mejor de lo que quizá dice el resultado. Tuvimos más balón, hicimos más pases y seguimos intentando jugar nuestro fútbol durante mucho más tiempo. Todavía cometimos errores importantes, sobre todo después de perder el balón, pero también mostramos que estamos empezando a entender cómo queremos jugar y cómo encontrar diferentes soluciones durante el partido.',


  /* ==========================================================
     FULL MATCH STATISTICS
  ========================================================== */

  metrics: {

    'Resultado': '3–3',

    'Posesión': '52%',

    'Pases': 265,

    'Toques': 849,

    'Pases / Posesión': '2,5',

    'Duración Media': '14,1s'

  },


  /* ==========================================================
     SEASON TREND DATA

     Effective solutions are different ways we successfully
     solved the opponent's defensive problem during the match.

     Possible values:
     inside
     outside
     behind
     switch
     carry
  ========================================================== */

  trendStats: {

    effectiveSolutions: [

      'inside',

      'outside',

      'behind',

      'switch',

      'carry'

    ]

    /*
      Set-piece effectiveness is intentionally not included yet.

      Once we use the same definition for every match,
      we can add:

      setPieces: {
        effective: 0,
        total: 0
      }
    */

  },


  /* ==========================================================
     THROW-INS
  ========================================================== */

  throwIns: {

    oursTotal: 19,

    oursRetained: 8,

    theirsTotal: 39,

    theirsWonByUs: 14

  },
