'use strict';
var single_element = function (collection) {
  return Array.from(collection.filter((val, index) => (index + 1) % 2 == 0)
    .reduce((map, val) => {
      map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1);
      return map;
    }, new Map())
  ).filter(kvpair => kvpair[1] == 1)
    .map(kvpair => kvpair[0])
    .sort((a, b) => a - b);

};
module.exports = single_element;
