WorldCup
===================
Get real-time information of the World Cup in Brazil from terminal.

## Install
```sh
  npm install worldcup -g
```

## Usage
Require the worldcup module.
```js
  var worldcup = require('worldcup').worldcup;
```

### Get all times
```js
  wordcup.times(function(data){
    /*
      Returns an array of object
      each object has the properties:
      { country: 'Croatia',
       alternate_name: null,
       fifa_code: 'CRO',
       group_id: 1
      }
    */
  });
```

### Get the results of each team
```js
  wordcup.results(function(data){
    /*
      Returns an array of object
      each object has the properties:
      {
        country: 'Brazil',
        alternate_name: null,
        fifa_code: 'BRA',
        group_id: 1,
        wins: 1,
        draws: 1,
        losses: 0,
        goals_for: 3,
        goals_against: 1,
        knocked_out: false,
        updated_at: '2014-06-17T22:20:49.260-03:00'
      }
    */
  });
```

### Get all details of the games
```js
  wordcup.matches(function(data){
    /*
      Returns an array of object
      each object has the properties:
      {
        match_number: 1,
        location: 'Arena Corinthians',
        datetime: '2014-06-12T17:00:00.000-03:00',
        status: 'completed',
        home_team: { country: 'Brazil', code: 'BRA', goals: 3 },
        away_team: { country: 'Croatia', code: 'CRO', goals: 1 },
        winner: 'Brazil',
        home_team_events:
         [ { id: 11,
             type_of_event: 'goal-own',
             player: 'Marcelo',
             time: '11' },
           { id: 14,
             type_of_event: 'yellow-card',
             player: 'Neymar Jr',
             time: '27' },
           { id: 15, type_of_event: 'goal', player: 'Neymar Jr', time: '29' },
           { id: 13,
             type_of_event: 'substitution-in',
             player: 'Hernanes',
             time: '63' },
           { id: 12,
             type_of_event: 'substitution-in',
             player: 'Bernard',
             time: '68' },
           { id: 16,
             type_of_event: 'goal-penalty',
             player: 'Neymar Jr',
             time: '71' },
           { id: 19,
             type_of_event: 'yellow-card',
             player: 'L Gustavo',
             time: '88' },
           { id: 17,
             type_of_event: 'substitution-in',
             player: 'Ramires',
             time: '88' },
           { id: 18, type_of_event: 'goal', player: 'Oscar', time: '901' } ],
        away_team_events:
         [ { id: 23,
             type_of_event: 'substitution-in',
             player: 'BrozoviĆ',
             time: '61' },
           { id: 20,
             type_of_event: 'yellow-card',
             player: 'Corluka',
             time: '66' },
           { id: 21,
             type_of_event: 'yellow-card',
             player: 'Lovren',
             time: '69' },
           { id: 22,
             type_of_event: 'substitution-in',
             player: 'RebiĆ',
             time: '78' } ]
      }
    */
  });
```