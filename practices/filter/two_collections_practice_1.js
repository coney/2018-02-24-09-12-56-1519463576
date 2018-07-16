'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(val => collection_b.includes(val))
}

module.exports = choose_common_elements;
