'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = []
  for (let index = number_a; number_a < number_b ? index <= number_b : index >= number_b; number_a < number_b ? index++ : index--) {
    if (index % 2 == 0) {
      result.push(index)
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
