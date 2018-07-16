'use strict';

function compute_average(collection) {
  return collection.reduce((sum, val) => sum += val) / collection.length;
}

module.exports = compute_average;

