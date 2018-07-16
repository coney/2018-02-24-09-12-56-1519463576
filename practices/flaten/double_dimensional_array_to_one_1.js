'use strict';

function double_to_one(collection) {
  return collection.reduce((result, val) => result.concat(Array.isArray(val) ? val : [val]), []);
}

module.exports = double_to_one;
