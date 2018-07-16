'use strict';

function grouping_count(collection) {
  return collection.reduce((result, val) => {
    let valStr = new Number(val).toString();
    result[valStr] === undefined ? result[valStr] = 1 : result[valStr]++;
    return result;
  }, {})
}

module.exports = grouping_count;
