var Mapping = require('../constants/Mapping');
var AppDispatcher = require('../dispatcher/Dispatcher');

var KeyActions = {
  keyPressed: function(key) {
    var payload = {noteName: Mapping[key], actionType:"KEY_DOWN" };
    AppDispatcher.dispatch(payload);
  },

  keyReleased: function(key) {
    var payload = {noteName: Mapping[key], actionType:"KEY_UP" };
    AppDispatcher.dispatch(payload);
  }

};

module.exports = KeyActions;
