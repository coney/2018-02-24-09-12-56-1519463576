'use strict';

function hybrid_operation(collection) {
  return collection
    .filter(val => val % 2 != 0)
    .map(val => val * 3 + 2)
    .reduce((sum, val) => sum += val);
}

module.exports = hybrid_operation;

