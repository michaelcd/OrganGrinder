var React = require('react');
var ReactDOM = require('react-dom');
var Dispatcher = require('./dispatcher/Dispatcher');
var KeyStore = require('./stores/KeyStore');
var KeyListener = require('./util/KeyListener');
var Key = require('./components/key');
var Note = require('./util/Note');
var Tones = require('./constants/Tones');
var Organ = require('./components/organ');



$(document).ready(function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Organ />, root);
});
