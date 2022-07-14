// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    84: 't',
    82: 'r',
    85: 'u',
    72: 'h'
  };
  
  // the 'official' Konami Code sequence
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  var truthCode = ['t', 'r', 'u', 't', 'h'];
  
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;
  var truthCodePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];
    var requiredKey2 = truthCode[truthCodePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
  
      // move to the next key in the konami code sequence
      konamiCodePosition++;
  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } 
    else if (key == requiredKey2){
      truthCodePosition++;
      if (truthCodePosition == truthCode.length) {
        activateCheats2();
        truthCodePosition = 0;
      }
    }
    else {
      konamiCodePosition = 0;
      truthCodePosition = 0;
    }
  });