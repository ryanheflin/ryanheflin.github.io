const phase1Weeks = [

  /* ========================================================
     WEEK 1
  ======================================================== */
  {
    week: 1,
    focus: 'Playing Our Way',

    description:
      'Introduce the behaviors and language that define how we want to play in every moment of the game.',

    objective:
      'Create natural reactions to play forward, defend together, and react quickly in transitions. Begin to recognize our rules without needing constant instruction.',

    sessions: [

      {
        number: 1,
        title: 'Find the Free Player',
        question: 'How do we help the player on the ball?',

        purpose:
          'Introduce our attacking identity through movement off the ball. Learn to create, recognize, and find the free player, ideally ready to receive facing forward.',

        habits: [
          'If the ball moves → we move.',
          'Move to get free or free a teammate.',
          'Receive facing forward when possible.',
          'If you cannot face forward → play where you face.'
        ],

        sessionPlan:
          'sessions/session-01-find-free-man.pdf',

        missed: [
          'The player on the ball should never have to solve the game alone.',
          'When a teammate receives, our movement creates their next options.',
          'Being free means being available and visible, not just unmarked.',
          'Our movement can free ourselves or create space for a teammate.',
          'If we find someone facing forward, we are ready to attack.'
        ]
      },


      {
        number: 2,
        title: 'Defend Together',
        question: 'Where do we want them to play?',

        purpose:
          'Understand defending as a whole-team action, not individual chasing. The first defender influences the ball while teammates protect the important spaces.',

        habits: [
          'Nearest player slows them down.',
          'Show the opponent where we want them to go.',
          'One presses → everyone helps.',
          'Stay connected.',
          'Make the opponent predictable.'
        ],

        sessionPlan:
          'sessions/session-02-defend-together.pdf',

        missed: [
          'We defend together, not by individually chasing the ball.',
          'The nearest player presses or slows them down while everyone else protects space.',
          'Protect the center first and try to show the opponent where we want them to go.',
          'If one player presses, the rest of the team reacts with them.'
        ]
      },

      {
        number: 3,
        title: 'React',
        question: 'What do we do as soon as possession changes?',

        purpose:
          'Create an immediate team reaction in transitions. If we lose the ball, we press; if we win it, we look forward.',

        habits: [
          'Lose it → go get it.',
          'Win it → look forward first.',
          'Nearest players react immediately.',
          'Everyone else closes space.',
          'No advantage → secure the ball.'
        ],

        sessionPlan:
          'sessions/session-03-react.pdf',

        missed: [
          'When we lose the ball, we react immediately.',
          'The nearest players go after the ball while everyone else closes space.',
          'When we win it, our first look is forward.',
          'If there is no immediate advantage, we keep the ball and organize.'
        ]
      }

    ]
  },


  /* ========================================================
     WEEK 2
  ======================================================== */
  {
    week: 2,
    focus: 'Create and Control Space',

    description:
      'Understand how our positioning with and without the ball changes the spaces available to both teams.',

    objective:
      'Connect the habits from Week 1 to one key idea: create useful space with the ball and control dangerous space without it.',

    sessions: [

      {
        number: 1,
        title: 'Make the Field Big',
        question: 'How can we create more space to play forward?',

        purpose:
          'Use width, depth, movement, and circulation to stretch the opponent and create a free player.',

        positions: {
          focus: 'Fullbacks, wingers, and striker',
          detail:
            'Create width and depth: recognize who opens the field, who threatens in behind, and how one player’s movement can create space for another.'
        },

        habits: [
          'Ball goes back → make the field big.',
          'Create useful width and depth.',
          'Support from different angles.',
          'Move the opponent before attacking.',
          'Find the free player.'
        ],

        missed: [
          'If we need more space, we make the field bigger.',
          'A backward pass is a signal to open up and create new angles.',
          'Do not all move toward the ball: give different solutions.',
          'We keep the ball to create an opportunity to advance, not just to make passes.'
        ]
      },

      {
        number: 2,
        title: 'Make Them Predictable',
        question: 'Can we control where the opponent will play?',

        purpose:
          'Connect pressure, cover, and distances to influence the opponent’s next action.',

        positions: {
          focus: 'Fullbacks, wingers, and wide players',
          detail:
            'Defend together in wide areas: show the opponent where we want them to play and coordinate pressure, cover, and support around the ball.'
        },

        habits: [
          'Show the opponent where we want them to go.',
          'In their half → force inside.',
          'In our half → protect inside and force outside.',
          'Cover behind the pressure.',
          'Backward pass → team steps forward.'
        ],

        missed: [
          'Pressing is about controlling the opponent, not just running toward the ball.',
          'Protect inside and show the opponent toward the pass we want.',
          'Players behind the pressure close the other options.',
          'When the opponent plays backward, we step forward together.'
        ]
      },

      {
        number: 3,
        title: 'Win It and Hurt Them',
        question: 'Do we have an advantage now?',

        purpose:
          'Make decisions in transition: attack immediately if we have an advantage or secure the ball if we do not.',

        positions: {
          focus: 'Wingers, striker, and players near the ball',
          detail:
            'Recognize roles immediately after regaining possession: threaten in behind, open the field, and provide support ahead of and behind the ball.'
        },

        habits: [
          'Win it → forward first.',
          'Space in behind → attack it.',
          'Wide players get out quickly.',
          'Support behind and ahead.',
          'No advantage → keep the ball.'
        ],

        missed: [
          'When we regain possession, we look forward immediately.',
          'If the opponent is disorganized or there is space in behind, we attack before they can recover.',
          'Nearby players provide options ahead of and behind the ball.',
          'Playing quickly does not mean forcing it: if the advantage is gone, we keep the ball.'
        ]
      }

    ]
  },


  /* ========================================================
     WEEK 3
  ======================================================== */
  {
    week: 3,
    focus: 'Move Together',

    description:
      'Turn individual reactions into coordinated whole-team movements around the ball.',

    objective:
      'Move together when advancing, pressing, and defending a transition. Begin to play as a connected team rather than separate players.',

    sessions: [

      {
        number: 1,
        title: 'Advance Together',
        question: 'If the ball moves forward, what does the rest of the team do?',

        purpose:
          'Learn to advance together. Every forward action should trigger supporting movements across all lines.',

        positions: {
          focus: 'Center backs and defensive line',
          detail:
            'Control the height of the line, advance behind the ball, and keep the team short and connected as the attack progresses.'
        },

        habits: [
          'Ball goes forward → lines move forward.',
          'Defensive line steps up.',
          'Midfield supports behind.',
          'Far-side players move inside.',
          'Maintain connections around the ball.'
        ],

        missed: [
          'A forward pass is a signal for the whole team to advance.',
          'The receiving player needs support behind and around them.',
          'The defense must step up so the team does not become stretched.',
          'Players away from the ball move with the play instead of standing and watching.'
        ]
      },

      {
        number: 2,
        title: 'Press Together',
        question: 'If one player presses, what should everyone else do?',

        purpose:
          'Build our first clear version of collective high pressing using the habits we have already learned.',

        positions: {
          focus: 'Striker, wingers, attacking midfielders, and holding midfielders',
          detail:
            'Coordinate the first line of pressure while the holding midfielders protect central spaces, close the next options, and allow the entire block to move forward.'
        },

        habits: [
          'Organized → we press.',
          'First defender leads.',
          'Next players close options.',
          'Protect central spaces.',
          'Backward pass → we step forward together.'
        ],

        missed: [
          'We press aggressively when the team is organized to do it.',
          'The first defender decides where we want to show the opponent.',
          'Everyone else closes options and protects the center.',
          'One player pressing alone is not our press: the team moves together.'
        ]
      },

      {
        number: 3,
        title: 'Hunt or Recover',
        question: 'Can we win the ball back now?',

        purpose:
          'Recognize whether losing possession should trigger immediate pressure or a recovery run to regain our shape.',

        positions: {
          focus: 'Center backs and holding midfielders',
          detail:
            'Read the transition from behind the ball: decide when to support the press, when to protect central space, and when to organize the team’s recovery.'
        },

        habits: [
          'Good numbers near the ball → go get it.',
          'Opponent escapes the press → recover.',
          'Nearest players slow them down.',
          'Recover central space first.',
          'Reconnect quickly.'
        ],

        missed: [
          'After losing the ball, decide quickly: hunt or recover.',
          'If we have players nearby and can win it back, we press together.',
          'If the opponent escapes or has the advantage, stop chasing and recover.',
          'When recovering, protect the center first and reconnect the team.'
        ]
      }

    ]
  },


  /* ========================================================
     WEEK 4
  ======================================================== */
  {
    week: 4,
    focus: 'Put the Whole Game Together',

    description:
      'Give fewer instructions and apply the habits from the first three weeks in realistic football situations.',

    objective:
      'See whether our game model is beginning to appear naturally. Recognize problems, choose solutions, and maintain our habits in every moment of the game.',

    sessions: [

      {
        number: 1,
        title: 'Inside, Outside, or In Behind',
        question: 'Where is the best space to attack?',

        purpose:
          'Bring our attacking principles together by understanding that different defensive problems require different solutions.',

        positions: {
          focus: 'Wingers, fullbacks, striker, and central players',
          detail:
            'Recognize how different positions provide different solutions: width outside, connections inside, and depth in behind.'
        },

        habits: [
          'High line → threaten in behind.',
          'Central space → play inside.',
          'Center closed → use width.',
          'One side overloaded → switch sides.',
          'No advantage → start again.'
        ],

        missed: [
          'There is not one correct way to attack: read where the space is.',
          'If they leave space in behind, attack it.',
          'If the center is open, play inside; if they close it, use width.',
          'If one side is overloaded, switch the attack. If nothing is available, keep the ball.'
        ]
      },

      {
        number: 2,
        title: 'Control the Opponent',
        question: 'What defensive action gives us control of the next play?',

        purpose:
          'Bring together pressing, delaying, recovering, and compact defending to choose the correct response.',

        positions: {
          focus: 'Center backs, holding midfielders, and players behind the pressure',
          detail:
            'Control the team from behind the ball: protect the center, maintain distances, and recognize when to step forward, slow the opponent down, or recover.'
        },

        habits: [
          'Recognize whether to press or delay.',
          'Protect dangerous central space.',
          'Make the opponent predictable.',
          'Move together behind the pressure.',
          'Recover quickly if they break the press.'
        ],

        missed: [
          'Defending is about controlling space and the opponent’s options.',
          'Press if we are organized; delay if we are not.',
          'Protect the center and try to make their next pass predictable.',
          'If they break our pressure, recover and reconnect immediately.'
        ]
      },

      {
        number: 3,
        title: 'Our Football',
        question: 'Can we recognize ourselves in the game?',

        purpose:
          'See whether the habits from the first month appear naturally without constant instruction.',

        habits: [
          'Win the Ball.',
          'Keep the Ball.',
          'Be Dangerous.',
          'Lose it → hunt or recover.',
          'Win it → look forward first.'
        ],

        missed: [
          'Our football should be recognizable regardless of the exercise or the result.',
          'With the ball: create space, look forward, help your teammates, and attack when the opportunity appears.',
          'Without the ball: stay connected, control space, and defend together.',
          'Every change of possession demands an immediate reaction.'
        ]
      }

    ]
  }

];
