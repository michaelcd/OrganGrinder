// var KeyStore = require('../stores/KeyStore');
var Mapping = require('../constants/Mapping');

var KeyListener = function () {
  //waiting for handler
  //adds keys to store
  $(document).keydown(function(event) {
    console.log(Mapping[event.keyCode]);
  });

  //waiting for handler
  //removes key from store
  $(document).keyup(function(event) {
    console.log(Mapping[event.keyCode]);
  });
};

$(KeyListener());




module.exports = KeyListener;
