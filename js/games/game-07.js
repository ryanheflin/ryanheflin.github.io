window.seasonGames.push({

  id: 'game-07',

  gameNumber: 7,

  opponent: 'Calafell CF B',

  homeAway: 'away',

  date: '18 October 2026',

  competition: 'Liga',

  matchType: 'league',

  location: 'Calafell',

  goalsFor: 1,

  goalsAgainst: 3,

  /*
    Do not include this match in season trend graphs
    until the match data has been fully analyzed.
  */

  includeInTrends: false,


  /* ==========================================================
     MATCH SUMMARY
  ========================================================== */

  summary:
    'Un partido para aprender.',


  /* ==========================================================
     MATCH DATA
  ========================================================== */

  metrics: {

    'Resultado': '1–3',

    'Datos': 'En análisis'

  },


  /* ==========================================================
     MATCH REVIEW
  ========================================================== */

  analysis: `

<div
  class="my-6 p-5 rounded-xl border border-yellow-500/30 bg-yellow-500/10"
>

  <h3
    class="text-lg font-bold"
    style="color: var(--altafulla-yellow);"
  >
    Un Partido para Aprender
  </h3>

  <p class="mt-3 text-gray-300">
    Este partido es una oportunidad para aprender,
    entender qué pasó
    y seguir mejorando como equipo.
  </p>

</div>


<div
  class="my-6 p-4 rounded-xl border border-gray-700 bg-gray-900/60"
>

  <p class="text-sm text-gray-300">

    <strong class="text-white">
      Datos del partido:
    </strong>

    actualmente en análisis.

  </p>

</div>

`,


  /* ==========================================================
     MATCH VIDEOS
  ========================================================== */

  clips: [

    {

      title: 'Partido completo vs. Calafell',

      description:
        'Vídeos completos del partido. El análisis y los datos se añadirán cuando estén terminados.',

      embedUrl:
        'https://www.youtube.com/embed/W9DyVtWzGvY'

    }

  ]

});
