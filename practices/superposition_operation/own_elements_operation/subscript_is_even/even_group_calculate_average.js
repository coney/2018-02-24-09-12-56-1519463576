'use strict';
var even_group_calculate_average = function (collection) {
  let grouped = collection.filter((val, index) => (index + 1) % 2 == 0)
    .filter(val => val % 2 == 0)
    .reduce((group, val) => {
      let idx = new Number(val).toString().length;
      group.has(idx) ? group.set(idx, group.get(idx).concat(val)) : group.set(idx, [val]);
      return group;
    }, new Map());
  let result = [];
  for (let key of Array.from(grouped.keys()).sort((a, b) => a - b)) {
    result = result.concat(grouped.get(key).reduce((sum, val) => sum += val) / grouped.get(key).length);
  }
  return result.length == 0 ? [0] : result
};
module.exports = even_group_calculate_average;
