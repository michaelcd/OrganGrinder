var React = require('react');
var Key = require('./key');
var Tones = require('../constants/Tones');

var Organ = React.createClass({
  render: function() {
    var keys = Object.keys(Tones).map(function (note) {
      return <Key noteName={note} />;
    });

    return (
      <div>
        {keys}
      </div>
    );
  }
});

module.exports = Organ;
