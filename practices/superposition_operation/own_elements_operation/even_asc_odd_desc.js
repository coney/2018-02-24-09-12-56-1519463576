'use strict';
var even_asc_odd_desc = function (collection) {
  let odd = collection.filter(val => val % 2 != 0)
  let even = collection.filter(val => val % 2 == 0);
  return even.sort((a, b) => a - b).concat(odd.sort((a, b) => b - a))
};
module.exports = even_asc_odd_desc;
