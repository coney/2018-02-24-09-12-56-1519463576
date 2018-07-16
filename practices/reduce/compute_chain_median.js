'use strict';

function compute_chain_median(collection) {
  let values = collection.split(/->/).map(val => Number.parseInt(val)).sort((a, b) => a - b);
  if (values.length % 2 == 0) {
    return (values[values.length / 2 - 1] + values[values.length / 2]) / 2;
  } else {
    return values[values.length / 2];
  }
}

module.exports = compute_chain_median;
