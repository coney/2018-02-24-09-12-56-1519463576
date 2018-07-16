'use strict';
var get_letter_interval = require('../../collectionOperator/get_letter_interval_2.js');

function average_to_letter(collection) {
  let val = Math.ceil(collection.reduce((sum, val) => sum += val) / collection.length);
  return get_letter_interval(val, val)[0]
}

module.exports = average_to_letter;

