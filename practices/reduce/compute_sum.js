'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((acc, val) => acc += val, 0)
}

module.exports = calculate_elements_sum;

