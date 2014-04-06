'use strict';

/**
 * Coordinate object.
 * @param {Number} latitude
 * @param {Number} longitude
 */
function Coordinate(latitude, longitude) {
  this.latitude = latitude || 0;
  this.longitude = longitude || 0;
}

var p = Coordinate.prototype;

/**
 * Fill coordinate values from a String.
 * Values should be comma separated.
 * @param {String} string
 * @return {Coordinate} Own instance.
 */
p.fromString = function(string) {
  var coordinate = string.split(',');

  this.latitude = parseFloat(coordinate[0]);
  this.longitude = parseFloat(coordinate[1]);

  return this;
};

/**
 * @return {String} Comma separated coordinate values.
 */
p.toString = function() {
  return this.latitude + ', ' + this.longitude;
};

module.exports = Coordinate;
