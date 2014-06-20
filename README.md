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


