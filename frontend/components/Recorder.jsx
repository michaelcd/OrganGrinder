var React = require('react');
var Track = require('../util/track');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function() {
    return {isRecording: false, track: new Track({name: ""}) };
  },

  componentDidMount: function() {
    KeyStore.addListener(this.state.track.addNotes.bind(this.state.track));
  },

  recordStart: function () {
    this.state.track.startRecording();
    this.setState({isRecording: true});
  },

  recordStop: function () {
    this.state.track.stopRecording();
    this.setState({isRecording: false});
  },

  render: function () {

    return(
      <div>
        <button onClick={this.recordStart}>Start</button>
        <button onClick={this.recordStop}>Stop</button>
      </div>
    );
  }
});

module.exports = Recorder;
