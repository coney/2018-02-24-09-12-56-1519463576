'use strict';

function double_to_one(collection) {
  let set = new Set();
  return collection
    .reduce((result, val) => result.concat(Array.isArray(val) ? val : [val]), [])
    .filter(v => {
      if (!set.has(v)) {
        set.add(v);
        return true;
      } else {
        return false;
      }
    });
}

module.exports = double_to_one;
