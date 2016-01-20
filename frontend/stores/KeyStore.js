var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');
var Note = require('../util/Note');
var Tones = require('../constants/Tones');

var _notes = [], _handlers = [];
var KeyStore = new Store (AppDispatcher);

//register
KeyStore.__onDispatch = function (payload) {
  if (payload.actionType === "KEY_DOWN") {
    // AppDispatcher.waitFor([IngrediantStore.dispatcherCallbackId]);
    // RecipeStore.create(payload.recipe);
    if (_notes.indexOf(payload.noteName) === -1) {
      _notes.push(payload.noteName);
      KeyStore.__emitChange();
      console.log(_notes);
      // Note.
    }
  } else if (payload.actionType === "KEY_UP") {
    var idx = _notes.indexOf(payload.noteName);
    if (idx >= 0) {
      _notes.splice(idx, 1);
      KeyStore.__emitChange();
      console.log(_notes);
    }
  }
};

module.exports = KeyStore;
