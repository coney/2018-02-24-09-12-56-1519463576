'use strict';

function compute_median(collection) {
  let values = collection.sort((a, b) => a - b);
  if (values.length % 2 == 0) {
    let number = (values[values.length / 2 - 1] + values[values.length / 2]) / 2;
    return number;
  } else {
    let number = values[Math.floor(values.length / 2)];
    return number;
  }
}

module.exports = compute_median;


