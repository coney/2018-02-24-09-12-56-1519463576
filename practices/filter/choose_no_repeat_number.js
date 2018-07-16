'use strict';

function choose_no_repeat_number(collection) {
  let set = new Set();
  collection.forEach(val => set.add(val));
  return Array.from(set.keys());

}

module.exports = choose_no_repeat_number;
