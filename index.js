'use strict';

var Coordinate = require('./coordinate'),
    PARSE_COORDINATES_REGEX = /@(.*)\//g;

/**
 * @param {String} url URL to be parsed.
 * @return {Coordinate} Coordinate instance.
 */
module.exports.parse = function(url) {
  var buffer = '',
      // Create a coordinate instance
      coordinate = new Coordinate,
      // Check wether the URL can be parsed or not
      canParse = PARSE_COORDINATES_REGEX.test(url);

  if(!canParse) {
    return coordinate;
  }

  // Format buffer
  buffer = url.match(PARSE_COORDINATES_REGEX)[0];
  buffer = buffer.slice(1, buffer.lastIndexOf(','));

  return coordinate.fromString(buffer);
};
