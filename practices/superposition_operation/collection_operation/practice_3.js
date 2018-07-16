'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection
    .filter(val => val % 2 != 0)
    .map(val => val * 3 + 5)
    .reduce((sum, val) => sum += val);
}

module.exports = hybrid_operation_to_uneven;

