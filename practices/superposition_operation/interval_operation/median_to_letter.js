'use strict';

var get_letter_interval = require('../../collectionOperator/get_letter_interval_2.js');
var compute_median = require('../../reduce/compute_median.js');

function median_to_letter(collection) {
  let index = Math.ceil(compute_median(collection));
  return get_letter_interval(index, index)[0]
}

module.exports = median_to_letter;
