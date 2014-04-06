'use strict';

var assert = require('assert'),
    Parser = require('./index'),
    coordinate,
    DUMMY_URL = 'https://www.google.com/maps/place/Film+Center+Building+Corporation/@40.760054,-73.991054,17z/data=!3m1!4b1!4m2!3m1!1s0x89c25853c9cfe7d3:0x44137c808ab6c9c3';

it('should parse valid google maps url', function() {
  coordinate = Parser.parse(DUMMY_URL);

  assert.equal(coordinate.latitude, 40.760054);
  assert.equal(coordinate.longitude, -73.991054);
});

it('should not parse invalid google maps url', function() {
  coordinate = Parser.parse('');

  assert.equal(coordinate.latitude, 0);
  assert.equal(coordinate.longitude, 0);
});

it('should properly convert coordinates to string', function() {
  coordinate = Parser.parse(DUMMY_URL);

  assert.equal(coordinate.toString(), '40.760054, -73.991054');
});
