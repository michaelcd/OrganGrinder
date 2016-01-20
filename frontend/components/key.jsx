var React = require('react');
var Tones = require('../constants/Tones');
var Note = require('../util/Note');
var KeyStore = require('../stores/KeyStore');

var Key = React.createClass({
  getInitialState: function () {
    var tone = Tones[this.props.noteName];
    this.note = new Note (tone);
    return { note: false };
  },

  changeMade: function() {
    var allKeys = KeyStore.all();
    if (allKeys.indexOf(this.props.noteName) >= 0) {
      this.setState({note: true});
      this.note.start();
    } else {
      this.setState({note: false});
      this.note.stop();
    }
  },

  componentDidMount: function () {
    KeyStore.addListener(this.changeMade);
  },

  render: function () {
    var name = "";
    if (this.props.noteName) {
      name = this.props.noteName;
    }

    return (
      <div>
        {name}
      </div>
    );
  }
});


module.exports = Key;
