'use strict';

function amount_even(collection) {
  return collection.filter(val => val % 2 == 0).reduce((sum, val) => sum += val);
}

module.exports = amount_even;
