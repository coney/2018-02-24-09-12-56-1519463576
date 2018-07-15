'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(value => collection_a.indexOf(value) >= 0)
}

module.exports = get_intersection;
