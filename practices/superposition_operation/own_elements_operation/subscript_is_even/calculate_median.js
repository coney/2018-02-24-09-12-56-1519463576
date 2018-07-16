'use strict';
var compute_median = require('../../../reduce/compute_median.js');

var calculate_median = function(collection){
  return compute_median(collection.filter((val, idx) => (idx + 1) % 2 == 0))
};
module.exports = calculate_median;
