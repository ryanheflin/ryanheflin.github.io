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
    'Perdimos 2–4 en un partido que podíamos haber ganado. Nuestra presión funcionó muchas veces y tuvimos momentos en los que jugamos con calma, combinamos y progresamos juntos. El problema fue que regalamos demasiadas posesiones, defendimos demasiadas situaciones como individuos y cometimos errores evitables cerca de nuestra portería. Llegamos al 2–2. El partido estaba ahí. Para dar el siguiente paso necesitamos hacer mejor las cosas básicas: controlar, apoyar, defender con prioridades y jugar juntos.',


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

       Only true opponent possessions are counted.

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

     San Pere i San Pau: 24
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
Este partido fue muy diferente al partido contra Valls.
</p>

<p>
San Pere i San Pau no nos dominó.
Tuvimos oportunidades,
nuestra presión les creó problemas
y durante algunos momentos
<strong>jugamos mejor fútbol.</strong>
</p>

<p>
Llegamos al descanso con <strong>1–1</strong>
y en la segunda parte conseguimos volver al partido
para poner el marcador <strong>2–2.</strong>
</p>

<p>
En ese momento,
<strong>el partido estaba ahí para nosotros.</strong>
</p>

<p>
Pero perdimos 2–4
porque cometimos demasiados errores
que nosotros mismos podemos controlar.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Nuestra Presión Funcionó
</h3>

<p>
Una de las cosas positivas
fue nuestra presión alta.
</p>

<p>
Muchas veces obligamos al rival
a jugar hacia atrás
y después a golpear el balón largo.
</p>

<p>
Eso es exactamente
lo que queremos conseguir.
</p>

<p>
<strong>
Presionamos,
les quitamos las opciones cortas
y les obligamos a jugar un balón
que podíamos competir.
</strong>
</p>

<p>
El problema normalmente llegó después.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Ganábamos el Balón... y Lo Devolvíamos
</h3>

<p>
Demasiadas veces hicimos
la parte difícil bien:
</p>

<div
  class="my-5 p-4 rounded-xl border border-gray-700 bg-gray-900/60"
>

  <p>
    <strong>
      PRESIONAR → OBLIGARLES A JUGAR LARGO → GANAR EL BALÓN
    </strong>
  </p>

</div>

<p>
Y después,
en uno o dos segundos,
volvíamos a perderlo.
</p>

<p>
Un mal control.
Un balón golpeado sin mirar.
Un regate cuando había un pase sencillo.
Un pase forzado.
Un despeje cuando podíamos controlar.
</p>

<p>
Tuvimos <strong>115 posesiones</strong>
y solamente hicimos
<strong>185 pases.</strong>
</p>

<p>
Eso son solamente
<strong>1,6 pases por posesión.</strong>
</p>

<p>
No podemos jugar nuestro fútbol
si perdemos el balón
antes de que el equipo tenga tiempo
para organizarse.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Cuando Controlamos y Jugamos Juntos, Se Nota
</h3>

<p>
También vimos momentos
que demuestran que podemos hacerlo.
</p>

<p>
En la segunda parte
hubo varias posesiones
en las que controlamos el primer balón,
dimos una solución al compañero,
jugamos hacia atrás cuando era necesario
y después encontramos el espacio para avanzar.
</p>

<p>
<strong>
Cuando hacemos eso,
el partido cambia.
</strong>
</p>

<p>
No necesitamos que un jugador
supere a tres rivales.
</p>

<p>
No necesitamos un pase perfecto
de treinta metros.
</p>

<p>
Necesitamos controlar,
mirar,
apoyar al compañero
y jugar la siguiente acción juntos.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Defender No Significa Robar el Balón
</h3>

<p>
Nuestro problema defensivo
no fue solamente la formación.
</p>

<p>
Demasiadas veces defendimos
como jugadores individuales.
</p>

<p>
Un jugador saltaba hacia el balón.
Otro llegaba tarde.
Otro estaba demasiado lejos.
Y aparecían espacios
delante de nuestra portería.
</p>

<p>
Tenemos que cambiar
nuestra idea de lo que significa defender.
</p>

<div
  class="my-5 p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10"
>

  <p>
    <strong style="color: var(--altafulla-yellow);">
      El trabajo de un defensor
      no es robar el balón.
      Es proteger la portería
      y evitar el tiro.
    </strong>
  </p>

</div>

<p>
Si el rival va hacia fuera,
va hacia atrás
o necesita más tiempo,
<strong>estamos defendiendo bien.</strong>
</p>

<p>
No necesitamos entrar
cada vez que vemos el balón.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Presión y Cobertura
</h3>

<p>
Cuando un compañero presiona,
otro jugador tiene que cubrir.
</p>

<p>
Si el primer defensor es superado,
el segundo tiene que estar preparado
para parar al atacante.
</p>

<p>
No podemos tener dos jugadores
atacando el mismo balón
y dejar el espacio detrás.
</p>

<p>
La relación es sencilla:
</p>

<p>
<strong>
Uno presiona.
Otro cubre.
Los demás protegen el espacio peligroso.
</strong>
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  Los Cuatro Goles Eran Evitables
</h3>

<p>
San Pere i San Pau hizo algunas cosas bien,
pero no necesitó crear cuatro grandes jugadas
para marcar cuatro goles.
</p>

<p>
En diferentes momentos
les ayudamos con:
</p>

<p>
mala posición defensiva,
falta de cobertura,
un despeje pobre,
una segunda jugada mal defendida,
una reacción lenta
o una pérdida cuando nuestro equipo
no estaba preparado para defender.
</p>

<p>
Eso es frustrante,
pero también es una buena noticia.
</p>

<p>
<strong>
Son cosas que podemos entrenar
y mejorar.
</strong>
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  El Partido Estaba 2–2
</h3>

<p>
Esto es importante.
</p>

<p>
Después de ir perdiendo dos veces,
volvimos al partido
y conseguimos el <strong>2–2.</strong>
</p>

<p>
No nos rendimos.
Seguimos intentando jugar.
Seguimos presionando.
Y tuvimos buenos momentos con el balón.
</p>

<p>
Pero desde el 2–2
no necesitábamos hacer más.
</p>

<p>
Necesitábamos hacer
<strong>mejor las cosas básicas.</strong>
</p>

<p>
Controlar el balón.
Dar apoyo.
No forzar la siguiente acción.
Defender la portería.
Cubrir al compañero.
Mantener la calma.
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
  1. Presionar Juntos
</h3>

<p>
Nuestra presión creó problemas.
</p>

<p>
Cuando presionamos juntos
y cerramos las opciones cortas,
el rival muchas veces
terminó jugando largo.
</p>

<p>
<strong>
Queremos mantener esto.
</strong>
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  2. Hacer Nuestro el Balón
</h3>

<p>
Ganar un duelo
o interceptar un pase
no termina la acción defensiva.
</p>

<p>
La siguiente pregunta es:
</p>

<p>
<strong>
¿Podemos hacer nuestro el balón?
</strong>
</p>

<p>
Si podemos controlar,
controlamos.
</p>

<p>
Si tenemos un pase sencillo,
lo usamos.
</p>

<p>
No necesitamos convertir
cada recuperación
en un contraataque inmediato.
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  3. Ángulo, Distancia y Momento
</h3>

<p>
El jugador con el balón
necesita ayuda.
</p>

<p>
Los compañeros tienen que crear
buenos ángulos de pase,
estar a una distancia útil
y moverse en el momento correcto.
</p>

<p>
Si todos corremos hacia delante
o esperamos quietos,
el jugador con balón
se queda solo.
</p>

<p>
<strong>
Jugar juntos significa
hacer más fácil
la siguiente acción del compañero.
</strong>
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  4. Defender por Prioridades
</h3>

<p>
Nuestra primera prioridad
es la portería.
</p>

<p>
Después,
evitar el tiro.
</p>

<p>
Después,
temporizar,
presionar
y cubrir.
</p>

<p>
Y cuando aparece
una oportunidad segura,
podemos robar el balón.
</p>

<p>
<strong>
No tenemos que ganar el balón
para defender bien.
</strong>
</p>


<h3
  class="text-lg font-bold text-white mt-8 mb-2"
>
  5. Mantener la Cabeza
</h3>

<p>
Cuando el partido se vuelve caótico,
no podemos convertirnos
en un equipo caótico.
</p>

<p>
No necesitamos discutir.
No necesitamos buscar peleas.
No necesitamos reaccionar
a cada decisión del árbitro
o del rival.
</p>

<p>
<strong>
Disciplina también forma parte
de nuestra manera de jugar.
</strong>
</p>

`,


  /* ==========================================================
     PLAYER TAKEAWAYS
  ========================================================== */

  nextSteps: `

<h3
  class="text-lg font-bold text-white mt-2 mb-3"
>
  Lo Que Trabajamos Ahora
</h3>

<p>
Este partido nos muestra
claramente dónde está
nuestro siguiente paso.
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
      CONTROLAR — hacer nuestro el balón antes de pensar en atacar.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      APOYAR — dar al compañero un pase sencillo y útil.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      DEFENDER — proteger la portería, temporizar, presionar y cubrir.
    </strong>
  </div>


  <div
    class="bg-gray-900/60 border border-gray-700 rounded-lg p-4"
  >
    <strong
      style="color: var(--altafulla-yellow);"
    >
      JUGAR JUNTOS — no intentar solucionar cada problema individualmente.
    </strong>
  </div>

</div>


<div
  class="mt-6 p-4 rounded-xl border border-gray-700 bg-gray-900/60"
>

  <p>
    <strong>
      Este partido estaba 2–2.
    </strong>
  </p>

  <p class="mt-2">
    No necesitamos convertirnos
    en otro equipo para ganar partidos como este.
    Necesitamos controlar mejor el balón,
    ayudarnos más,
    defender con prioridades
    y cometer menos errores evitables.
  </p>

  <p class="mt-2">
    Eso es lo que vamos a entrenar.
  </p>

</div>

`,


  /* ==========================================================
     MATCH VIDEOS

     Add YouTube embeds here when ready.
  ========================================================== */

  clips: []

});
