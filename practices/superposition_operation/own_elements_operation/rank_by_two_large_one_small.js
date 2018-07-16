'use strict';

function rank_by_two_large_one_small(collection) {
  let sorted = collection.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i += 3) {
    if (i + 2 <= sorted.length - 1) {
      let tmp = sorted[i];
      sorted[i] = sorted[i + 1];
      sorted[i + 1] = sorted[i + 2];
      sorted[i + 2] = tmp;
    }
  }
  return sorted;
}

module.exports = rank_by_two_large_one_small;
