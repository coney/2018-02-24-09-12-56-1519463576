'use strict';

function average_uneven(collection) {
  let odds = collection.filter(val => val % 2 != 0);
  return odds.reduce((sum, val) => sum +=val)/ odds.length
}

module.exports = average_uneven;
