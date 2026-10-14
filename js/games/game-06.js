window.seasonGames.push({

  id: 'game-06',

  gameNumber: 6,

  opponent: 'San Pere i San Pau',

  homeAway: 'home',

  date: '10 October 2026',

  competition: 'Liga',

  location: 'Altafulla',

  goalsFor: 2,

  goalsAgainst: 4,


  /* ==========================================================
     MATCH SUMMARY
  ========================================================== */

  summary:
    'Perdimos 2–4 en un partido que estaba ahí para nosotros. Nuestra presión funcionó bastante bien y tuvimos momentos buenos con el balón, especialmente en la segunda parte. Pero regalamos demasiadas posesiones y defendimos demasiadas situaciones como individuos. Llegamos al 2–2 y después cometimos errores que el rival aprovechó. Hay mucho que mejorar, pero las soluciones no son complicadas.',


  /* ==========================================================
     FULL MATCH STATISTICS
  ========================================================== */

  metrics: {

    'Resultado': '2–4',

    'Posesión': '40%',

    'Pases': 185,

    'Toques': 603,

    'Pases / Posesión': '1,6',

    'Duración Media': '11,0s'

  },


  /* ==========================================================
     SEASON TREND DATA
  ========================================================== */

  trendStats: {

    opponentPasses: 185,


    /* ========================================================
       POSSESSION EFFICIENCY — WITH BALL

       Successful possession =
       the possession becomes dangerous OR establishes
       our attack in the opponent's final third.

       38 / 115 = 33.0%
    ======================================================== */

    possessionEfficiency: {

      effective: 38,

      total: 115

    },


    /* ========================================================
       POSSESSION EFFICIENCY — WITHOUT BALL

       Successful defensive possession =
       we stop the opponent before they create a dangerous
       action or establish a dangerous attack in our final third.

       78 / 129 = 60.5%
    ======================================================== */

    defensivePossessionEfficiency: {

      effective: 78,

      total: 129

    },


    /* ========================================================
       SET-PIECE EFFECTIVENESS

       20 / 49 = 40.8%
    ======================================================== */

    setPieces: {

      effective: 20,

      total: 49,

      breakdown: {

        throwIns: {
          effective: 7,
          total: 22
        },

        goalKicks: {
          effective: 8,
          total: 13
        },

        freeKicks: {
          effective: 4,
          total: 13
        },

        corners: {
          effective: 1,
          total: 1
        }

      }

    }

  },


  /* ==========================================================
     THROW-INS
  ========================================================== */

  throwIns: {

    oursTotal: 22,

    oursRetained: 7,

    theirsTotal: 44,

    theirsWonByUs: 15

  },


  /* ==========================================================
     MISSED CONTROL OPPORTUNITIES
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
    src="images/game-06-stats.png"
    alt="Estadísticas completas CE Altafulla vs San Pere i San Pau"
    class="w-full rounded-xl border border-gray-700 shadow-lg"
  >

</div>


<h3
  class="text-lg font-bold text-white mt-6 mb-2"
>
  Un Partido Que Podíamos Ganar
</h3>

<p>
Este partido fue muy diferente al de Valls.
San Pere nos creó problemas,
pero nunca sentimos que el partido estuviera fuera de nuestro alcance.
</p>

<p>
Nuestra presión funcionó bastante bien.
Muchas veces les obligamos a jugar hacia atrás
y después a golpear el balón largo.
El problema fue que, después de recuperar,
demasiadas veces devolvimos el balón enseguida.
</p>

<p>
Hubo muchos malos controles,
balones que podíamos controlar pero despejamos,
pases forzados
y jugadores intentando resolver la jugada solos.
Por eso tuvimos solamente
<strong>1,6 pases por posesión.</strong>
</p>

<p>
Aun así, llegamos al <strong>2–2</strong>
y durante algunos momentos de la segunda parte
jugamos buen fútbol.
Cuando controlamos primero,
dimos apoyo
y combinamos con calma,
fuimos mucho mejores.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Nos Castigaron Nuestros Errores
</h3>

<p>
Los cuatro goles eran evitables.
No fueron cuatro grandes jugadas del rival.
Fueron situaciones en las que nuestra posición,
nuestra cobertura
o nuestra reacción podía haber sido mejor.
</p>

<p>
Defendemos demasiadas veces intentando robar el balón inmediatamente.
Un jugador sale,
otro también va hacia el balón
y dejamos espacio detrás.
</p>

<p>
No necesitamos ganar cada duelo.
Primero tenemos que proteger la portería,
evitar el tiro
y ayudar al compañero que está presionando.
</p>

<p>
Perder 2–4 es frustrante
porque el partido estaba 2–2.
Pero también nos deja bastante claro
qué tenemos que mejorar.
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
      No necesitamos hacer cosas más complicadas.
      Necesitamos hacer mejor las cosas básicas.
    </strong>
  </p>

</div>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Con Balón
</h3>

<p>
Tenemos que convertir más balones sueltos
en posesiones nuestras.
</p>

<p>
Controlar cuando podemos controlar.
Dar al jugador con balón una opción sencilla.
No correr todos hacia delante.
No intentar forzar el ataque antes de tener realmente el balón.
</p>

<p>
Cuando hicimos esto en la segunda parte,
jugamos algunas de nuestras mejores posesiones del partido.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Sin Balón
</h3>

<p>
Nuestra presión alta fue una parte positiva del partido
y la queremos mantener.
</p>

<p>
Pero detrás de la presión
tenemos que defender mejor como grupo.
Uno presiona,
otro cubre
y los demás protegen el espacio peligroso.
</p>

<p>
La prioridad no es robar el balón.
La prioridad es proteger la portería
y evitar el tiro.
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
No necesitamos cambiar completamente nuestra manera de jugar.
Necesitamos ser mejores en las acciones básicas
que permiten que nuestra manera de jugar funcione.
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
      Controlar el balón cuando tenemos tiempo.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Dar una solución sencilla al compañero.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Presionar, cubrir y proteger la portería.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Jugar como un equipo, no como once individuos.
    </strong>
  </div>

</div>


<div
  class="mt-6 p-4 rounded-xl border border-gray-700 bg-gray-900/60"
>

  <p>
    El partido estaba <strong>2–2.</strong>
    No estábamos lejos.
  </p>

  <p class="mt-2">
    El siguiente paso es sencillo:
    menos caos,
    mejores decisiones
    y hacer nuestro trabajo antes de intentar hacer el trabajo de otro.
  </p>

</div>

`,


  /* ==========================================================
     MATCH VIDEOS
  ========================================================== */

  clips: [

    {
      title: 'Partido',
      description: 'Partido Completo',
      embedUrl: 'https://www.youtube.com/embed/uygDUd_ykGA'
    }

  ]

});
