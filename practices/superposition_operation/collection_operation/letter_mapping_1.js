'use strict';
var get_letter_interval = require('../../collectionOperator/get_letter_interval_2.js');

function even_to_letter(collection) {
  return collection.filter(val => val % 2 == 0).map(val => get_letter_interval(val, val)[0])
}

module.exports = even_to_letter;
