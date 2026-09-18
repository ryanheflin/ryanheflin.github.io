window.seasonGames.push({

  id: 'game-03',

  gameNumber: 3,

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

     Set-piece effectiveness includes all four attacking
     restart types: throw-ins, goal kicks, free kicks and
     corners.
  ========================================================== */

  trendStats: {

  opponentPasses: 236,


  /* ========================================================
     POSSESSION EFFICIENCY

     Efficient possession = attacking possession
     rated 7/10 or higher in the match log.

     31 / 106 = 29.2%
  ======================================================== */

  possessionEfficiency: {

    effective: 31,

    total: 106

  },


  /* ========================================================
     SET-PIECE EFFECTIVENESS
  ======================================================== */

  setPieces: {

    effective: 27,

    total: 46,

    breakdown: {

      throwIns: {
        effective: 8,
        total: 19
      },

      goalKicks: {
        effective: 8,
        total: 8
      },

      freeKicks: {
        effective: 7,
        total: 12
      },

      corners: {
        effective: 4,
        total: 7
      }

    }

  }

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


  /* ==========================================================
     PURPOSELESS TURNOVERS

     Full-match retrospective count.

     Count:
     - unnecessary kicks / clearances when a controlled
       option was available
     - head-down carries that directly surrendered possession

     Do NOT count:
     - purposeful passes that were intercepted
     - bad touches after a good decision
     - crosses / through balls attempting to create
     - necessary clearances under genuine pressure
     - legitimate attempts to beat an opponent
  ========================================================== */

  purposelessTurnovers: {

    total: 9,

    kicks: 8,

    carries: 1

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
    src="images/game-03-stats.png"
    alt="Estadísticas completas CE Altafulla vs San Pere i San Pau"
    class="w-full rounded-xl border border-gray-700 shadow-lg"
  >

</div>



<h3
  class="text-lg font-bold text-white mt-6 mb-2"
>
  Un Partido Mejor de lo que Parece
</h3>

<p>
Fue un partido bastante mejor de lo que quizá dice el resultado.
</p>

<p>
Tuvimos aproximadamente un
<strong>52% de la posesión</strong>,
hicimos <strong>265 pases</strong>
por <strong>236</strong> de San Pere
y tuvimos <strong>849 toques</strong>
por <strong>710</strong> de ellos.
</p>

<p>
También tuvimos el balón durante más tiempo
cuando conseguíamos mantener la posesión.
</p>

<p>
Pero para mí lo más importante
no son esos números.
</p>

<p>
Lo más importante es que durante mucho más tiempo
seguimos intentando jugar nuestro fútbol.
No perdimos completamente nuestra estructura
ni volvimos simplemente a jugar directo
cuando el partido se complicó.
</p>



<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Lo que Hicimos Bien
</h3>

<p>
Estamos mejorando mucho
<strong>saliendo jugando desde atrás.</strong>
</p>

<p>
Usamos al portero,
movimos el balón entre los centrales,
encontramos a los pivotes,
jugamos por dentro,
atacamos por fuera,
cambiamos el juego
y también buscamos el espacio a la espalda
cuando realmente estaba disponible.
</p>

<p>
No intentamos solucionar cada problema
de la misma manera.
Y eso es exactamente lo que queremos.
</p>

<p>
Hubo varias posesiones
en las que movimos a San Pere de un lado al otro,
mantuvimos el balón cuando el primer camino estaba cerrado
y encontramos otra forma de avanzar.
</p>

<p>
<strong>Eso es una mejora importante.</strong>
</p>

<p>
Nuestra presión también fue mejor.
Forzamos balones largos,
recuperamos balones más arriba
y conseguimos crear ataques
directamente desde una buena defensa.
</p>

<p>
El tercer gol fue un buen ejemplo:
<strong>presión, recuperación, combinación rápida y gol.</strong>
</p>



<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Seguimos Dentro del Partido
</h3>

<p>
Quizá lo mejor de todo fue nuestra reacción.
</p>

<p>
Íbamos <strong>0–2</strong>.
Después <strong>1–3</strong>.
Y acabamos <strong>3–3</strong>.
</p>

<p>
No dejamos de intentar jugar.
No dejamos de competir.
Y encontramos la manera de volver al partido.
</p>

`,


  /* ==========================================================
     CONNECTION TO GAME MODEL
  ========================================================== */

  gameModel: `

<h3
  class="text-lg font-bold text-white mt-2 mb-2"
>
  Dos Cosas que Tenemos que Mejorar
</h3>

<p>
Hay dos cosas principales
que veo ahora mismo,
teniendo en cuenta dónde estamos
dentro de nuestro plan de entrenamiento de la temporada.
</p>



<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  1. Qué Pasa Cuando Perdemos el Balón
</h3>

<p>
Los primeros dos goles de San Pere
llegaron después de situaciones
en las que estábamos atacando,
perdimos el balón
y no estábamos suficientemente preparados detrás.
</p>

<p>
Si queremos atacar con muchos jugadores,
los jugadores que quedan detrás
tienen que estar preparados
<strong>antes</strong>
de que perdamos el balón.
</p>

<p>
Ya hemos hablado de nuestra estructura
<strong>3–2–5</strong>
cuando atacamos.
</p>

<p>
Eso significa que normalmente queremos tener
tres jugadores cerca de la línea del medio
y dos pivotes por delante de ellos,
preparados para mantener al rival encerrado,
ganar el segundo balón
y evitar que pueda salir por el centro.
</p>

<p>
No podemos pensar en defender
solamente después de perderla.
</p>

<p>
<strong>
Tenemos que estar preparados para defender
mientras estamos atacando.
</strong>
</p>



<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Presionar Juntos
</h3>

<p>
Todavía dejamos demasiado espacio
entre nuestras líneas cuando presionamos.
</p>

<p>
A veces un jugador va muy bien al balón,
pero los jugadores detrás llegan tarde.
Y con un solo pase,
el rival encuentra a un centrocampista libre.
</p>

<p>
Vimos varias veces
que los centrocampistas de San Pere
tenían demasiado espacio.
</p>

<p>
Lo hicimos mejor
a medida que avanzó el partido,
pero sigue siendo una parte importante
que tenemos que mejorar.
</p>

<p>
Si uno va,
<strong>los demás tienen que moverse con él.</strong>
</p>



<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  2. Encontrar la Siguiente Solución
</h3>

<p>
Con balón,
a veces encontramos una solución que funciona
y seguimos intentando la misma demasiado tiempo.
</p>

<p>
En el segundo periodo,
Othmane estaba siendo muy peligroso por la derecha.
Así que seguimos buscándolo
una y otra vez.
</p>

<p>
A veces era exactamente la decisión correcta.
</p>

<p>
Pero otras veces
San Pere ya había cambiado para defender ese espacio
y el espacio libre estaba en otra parte.
</p>

<p>
También necesitamos ser más creativos
cuando llegamos más arriba.
</p>

<p>
Estamos empezando a salir bien desde atrás.
Ahora necesitamos seguir avanzando
<strong>con estructura</strong>,
para que cuando lleguemos cerca del área
tengamos diferentes opciones
y no dependamos solamente
de una conducción,
un balón largo
o una jugada individual.
</p>



<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Ver el Problema
</h3>

<p>
Este es el siguiente paso:
</p>

<div
  class="my-5 p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10"
>

  <p>
    <strong style="color: var(--altafulla-yellow);">
      Ver el problema.
      Probar una solución.
      Y después ver cómo cambia el rival.
    </strong>
  </p>

</div>

<p>
Si cierran un lado,
<strong>usamos el otro.</strong>
</p>

<p>
Si nos presionan,
<strong>encontramos al jugador libre.</strong>
</p>

<p>
Si retroceden,
<strong>tomamos el espacio.</strong>
</p>

<p>
Si el pase hacia delante no está disponible,
<strong>mantenemos el balón.</strong>
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
Estamos mejorando mucho
en la primera parte de nuestro modelo de juego.
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
      Podemos salir jugando desde atrás.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Podemos mantener el balón.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Podemos combinar.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      Podemos presionar con agresividad.
    </strong>
  </div>

</div>


<p>
Ahora tenemos que conectar todo.
</p>


<ol
  class="space-y-4 pl-5 list-decimal mt-5"
>

  <li>

    <strong>
      Cuando atacamos, tenemos que estar preparados para defender.
    </strong>

    Nuestra estructura detrás del balón
    tiene que protegernos del contraataque.

  </li>


  <li>

    <strong>
      Cuando avanzamos, tenemos que avanzar con estructura.
    </strong>

    No queremos simplemente llegar arriba.
    Queremos llegar con jugadores conectados
    y con diferentes opciones cerca del área.

  </li>


  <li>

    <strong>
      Cuando recuperamos el balón, tenemos que leer el momento.
    </strong>

    A veces hay que atacar rápido.
    Otras veces hay que asegurar el balón
    y dejar que el equipo vuelva a conectarse.

  </li>


  <li>

    <strong>
      Cuando una solución deja de funcionar, buscamos otra.
    </strong>

    El rival también juega.
    Si cambia,
    nosotros tenemos que cambiar con él.

  </li>

</ol>


<div
  class="mt-6 p-4 rounded-xl border border-gray-700 bg-gray-900/60"
>

  <p>
    Estamos empezando a ver el equipo que queremos ser.
  </p>

  <p class="mt-2">
    Ahora tenemos que hacer
    que todas estas partes funcionen juntas
    durante más tiempo,
    con más velocidad
    y con mejores decisiones.
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
      embedUrl: 'https://www.youtube.com/embed/MYkE_AMBdpo'
    },

    {
      title: 'Segunda Parte',
      description: 'Próximos 20 minutos completos',
      embedUrl: 'https://www.youtube.com/embed/SuXON_gI5y4'
    },

    {
      title: 'Tercera Parte',
      description: 'Próximos 20 minutos completos',
      embedUrl: 'https://www.youtube.com/embed/RW9Hn4y2EdM'
    },

    {
      title: 'Parte Final',
      description: 'Últimos 20 minutos completos',
      embedUrl: 'https://www.youtube.com/embed/CVH72UBiNUE'
    }

  ]

});
