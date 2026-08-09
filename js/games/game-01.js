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

  summary:
    'A short overall description of the match.',

  metrics: {
    'Possession': '55%',
    'Shots': 12,
    'Shots on Target': 6,
    'Big Chances': 4
  },

  analysis: `
    <p>
      Match analysis can go here.
    </p>

    <p>
      Because this is its own file, this section can become as detailed
      as necessary without making data.html difficult to maintain.
    </p>
  `,

  gameModel: `
    <p>
      Explain what we saw relative to our principles and game model here.
    </p>
  `,

  nextSteps: `
    <p>
      Explain what the match tells us to reinforce or develop next.
    </p>
  `,

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
