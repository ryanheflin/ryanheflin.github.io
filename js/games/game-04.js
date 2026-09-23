window.seasonGames.push({

  id: 'game-04',

  gameNumber: 4,

  opponent: 'CDC Torreforta S15 (Amistoso)',

  homeAway: 'away',

  date: '20 September 2026',

  competition: 'Pretemporada',

  location: 'Torreforta',

  goalsFor: 7,

  goalsAgainst: 2,


  /* ==========================================================
     MATCH SUMMARY
  ========================================================== */

  summary:
    'Ganamos 7–2, pero no fue un partido que reflejara cómo queremos jugar. Empezamos bien, con paciencia, combinaciones y buena presión, pero cuando vimos que el rival no nos castigaba bajamos nuestro nivel. Dejamos de jugar conectados, empezamos a jugar demasiado directo y el partido se volvió desordenado. La lección es sencilla: nuestro nivel no puede depender del rival.',


  /* ==========================================================
     FULL MATCH STATISTICS
  ========================================================== */

  metrics: {

    'Resultado': '7–2',

    'Posesión': '51%',

    'Pases': 223,

    'Toques': 593,

    'Pases / Posesión': '2,3',

    'Duración Media': '11,7s'

  },


  /* ==========================================================
     SEASON TREND DATA
  ========================================================== */

  trendStats: {

    opponentPasses: 154,


    /* ========================================================
       POSSESSION EFFICIENCY — WITH BALL

       Successful possession =
       the possession becomes dangerous OR establishes
       our attack in the opponent's final third.

       42 / 95 = 44.2%
    ======================================================== */

    possessionEfficiency: {

      effective: 42,

      total: 95

    },


    /* ========================================================
       POSSESSION EFFICIENCY — WITHOUT BALL

       Successful defensive possession =
       we stop the opponent before they create a dangerous
       action or establish a dangerous attack in our final third.

       Only true opponent possessions are counted.

       55 / 84 = 65.5%
    ======================================================== */

    defensivePossessionEfficiency: {

      effective: 55,

      total: 84

    },


    /* ========================================================
       SET-PIECE EFFECTIVENESS

       27 / 43 = 62.8%
    ======================================================== */

    setPieces: {

      effective: 27,

      total: 43,

      breakdown: {

        throwIns: {
          effective: 10,
          total: 17
        },

        goalKicks: {
          effective: 6,
          total: 8
        },

        freeKicks: {
          effective: 8,
          total: 14
        },

        corners: {
          effective: 3,
          total: 4
        }

      }

    }

  },


  /* ==========================================================
     THROW-INS
  ========================================================== */

  throwIns: {

    oursTotal: 17,

    oursRetained: 10,

    theirsTotal: 20,

    theirsWonByUs: 8

  },


  /* ==========================================================
     MISSED CONTROL OPPORTUNITIES

     Strict standard.

     Count when:
     - we have a reasonable opportunity to settle or possess
       an arriving or loose ball but kick it away instead
     - we clear when there is time to control
     - we launch a low-percentage ball without a real target
       when controlled possession is available
     - we turn a controllable situation into "tennis"
     - we immediately force the ball away instead of making
       it ours

     IMPORTANT:
     Count the missed opportunity even if another Altafulla
     player immediately recovers the ball afterward.

     Do NOT count:
     - necessary clearances under genuine pressure
     - purposeful passes attempting to create a real advantage
     - crosses / through balls in attacking situations
     - genuine 50/50 balls where control is unrealistic
     - technical mistakes after the correct decision

     Torreforta: 24
  ========================================================== */

  missedControlOpportunities: {

    total: 24

  },


  /* ==========================================================
     MATCH ANALYSIS
  ========================================================== */

  analysis: `

<!-- ==========================================================
     MATCH STAT GRAPHIC
========================================================== -->

<div class="my-6">

  <img
    src="images/game-04-stats.png"
    alt="Estadísticas completas CE Altafulla vs Torreforta"
    class="w-full rounded-xl border border-gray-700 shadow-lg"
  >

</div>


<h3
  class="text-lg font-bold text-white mt-6 mb-2"
>
  Empezamos Como Nosotros
</h3>

<p>
Durante el primer periodo
<strong>sí vimos nuestro fútbol.</strong>
</p>

<p>
Tuvimos paciencia,
movimos el balón,
volvimos atrás cuando era necesario,
cambiamos de lado,
combinamos por dentro
y presionamos bien después de perderlo.
</p>

<p>
Marcamos tres goles
y, más importante,
durante bastante tiempo
<strong>controlamos cómo se jugaba el partido.</strong>
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Después Bajamos Nuestro Nivel
</h3>

<p>
A partir de ahí,
el partido cambió demasiado.
</p>

<p>
Cuando vimos que el rival
no nos estaba castigando,
dejamos de hacer muchas de las cosas
que queremos hacer siempre.
</p>

<p>
Empezamos a despejar balones
que podíamos controlar,
a jugar demasiado directo,
a intentar solucionar situaciones individualmente
y a defender con menos intensidad.
</p>

<p>
Ganamos <strong>7–2</strong>,
pero un rival mejor
habría castigado muchos de esos errores.
</p>

<p>
No necesitamos analizar mucho más este partido.
</p>

<p>
<strong>
Sabemos cómo queremos jugar.
Ahora tenemos que hacerlo
sin importar quién esté enfrente.
</strong>
</p>

`,


  /* ==========================================================
     CONNECTION TO GAME MODEL
  ========================================================== */

  gameModel: `

<h3
  class="text-lg font-bold text-white mt-2 mb-2"
>
  La Lección
</h3>

<div
  class="my-5 p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10"
>

  <p>
    <strong style="color: var(--altafulla-yellow);">
      El rival no decide cómo jugamos.
      Nosotros decidimos nuestro nivel.
    </strong>
  </p>

</div>


<p>
Hay solamente dos detalles de este partido
que merece la pena llevar con nosotros.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Resolver la Presión Hombre a Hombre
</h3>

<p>
Cuando Torreforta nos marcó
hombre a hombre,
a veces nos quedamos demasiado quietos.
</p>

<p>
Si todos estamos marcados,
<strong>
tenemos que mover al rival
para crear al jugador libre.
</strong>
</p>

<p>
Un jugador se mueve,
otro ocupa el espacio
y seguimos buscando la siguiente solución.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Organización Defensiva
</h3>

<p>
También tenemos que estar mejor organizados
en algunas acciones defensivas,
especialmente en los córners.
</p>

<p>
Un equipo mejor
no nos dará una segunda oportunidad
si dejamos jugadores libres
cerca de nuestra portería.
</p>

`,


  /* ==========================================================
     PLAYER TAKEAWAYS
  ========================================================== */

  nextSteps: `

<h3
  class="text-lg font-bold text-white mt-2 mb-3"
>
  La Idea Principal
</h3>

<p>
Este partido no cambia
lo que hemos aprendido durante la pretemporada.
</p>


<div
  class="grid grid-cols-1 md:grid-cols-2 gap-3 my-5"
>

  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Controlar el balón cuando podemos controlarlo.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Dar siempre una solución al compañero.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Defender y presionar con la misma intensidad.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Mantener nuestro nivel sin importar el rival.
    </strong>
  </div>

</div>


<div
  class="mt-6 p-4 rounded-xl border border-gray-700 bg-gray-900/60"
>

  <p>
    <strong>
      La pretemporada termina aquí.
    </strong>
  </p>

  <p class="mt-2">
    Ahora empieza la liga.
    Sabemos qué tipo de equipo queremos ser.
    El siguiente paso es mantener ese nivel
    durante todo el partido.
  </p>

</div>

`,


  /* ==========================================================
     MATCH VIDEOS
  ========================================================== */

  clips: [

    {
      title: 'Primera Parte',
      description: 'Primeros 20 minutos completos',
      embedUrl: 'https://www.youtube.com/embed/hRcneMipg10'
    },

    {
      title: 'Segunda Parte',
      description: 'Próximos 20 minutos completos',
      embedUrl: 'https://www.youtube.com/embed/REPLACE_GAME4_CLIP_2'
    },

    {
      title: 'Tercera Parte',
      description: 'Próximos 20 minutos completos',
      embedUrl: 'https://www.youtube.com/embed/REPLACE_GAME4_CLIP_3'
    },

    {
      title: 'Parte Final',
      description: 'Últimos 20 minutos completos',
      embedUrl: 'https://www.youtube.com/embed/REPLACE_GAME4_CLIP_4'
    }

  ]

});
