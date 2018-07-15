'use strict';

function get_integer_interval(number_a, number_b) {
  let result = []
  for (let index = number_a; number_a < number_b ? index <= number_b : index >= number_b; number_a < number_b ? index++ : index--) {
    result.push(index)
  }
  return result;
}

module.exports = get_integer_interval;

