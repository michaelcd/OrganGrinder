// var KeyStore = require('../stores/KeyStore');
var KeyActions = require('../actions/KeyActions');

var KeyListener = function () {
  //waiting for handler
  //adds keys to store
  $(document).keydown(function(event) {
    KeyActions.keyPressed(event.keyCode);
  });

  //waiting for handler
  //removes key from store
  $(document).keyup(function(event) {
    KeyActions.keyReleased(event.keyCode);
  });
};

$(KeyListener());




module.exports = KeyListener;
