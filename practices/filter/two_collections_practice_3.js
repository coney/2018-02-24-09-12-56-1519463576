'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(a => collection_b.some(b => a % b == 0));
}

module.exports = choose_divisible_integer;
