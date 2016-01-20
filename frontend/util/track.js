var KeyStore = require('../stores/KeyStore');

var Track = function (attributes) {
  this.attributes = attributes;
  this.attributes.roll = [];
  this.time = null;
};

Track.prototype.startRecording = function () {
  this.attributes.roll = [];
  this.time = new Date ();
};

Track.prototype.addNotes = function (notes) {
  //will change
  if (typeof notes === "undefined") {
    notes = KeyStore.all();
  }

  var timeSlice = new Date () - this.time;
  var rollObj = {timeSlice: timeSlice, notes: notes };
  if (this.time !== null) {
    this.attributes.roll.push(rollObj);
    console.log(this.attributes.roll);
  }
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
  this.time = null;
};

Track.prototype.play = function () {
  
};

module.exports = Track;
