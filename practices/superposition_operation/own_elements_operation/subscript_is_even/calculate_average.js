'use strict';
var calculate_average = function(collection){
  let filtered = collection.filter((val, idx) => (idx + 1) % 2 == 0);
  return filtered.reduce((sum, val) => sum += val)/ filtered.length
};
module.exports = calculate_average;
