'use strict';

function number_to_char(number) {
  return String.fromCharCode(number  + 'a'.charCodeAt(0))
}

function number_to_string(number) {
  if (number >= 26) {
    return number_to_char(number / 26 - 1) + number_to_char(number % 26 );
  } else {
    return number_to_char(number)
  }
}

function get_letter_interval_2(number_a, number_b) {
  let result = []
  for (let i = number_a; number_a < number_b ? i <= number_b : i >= number_b; number_a < number_b ? i++ : i--) {
    result.push(number_to_string(i - 1))
  }
  return result
}

module.exports = get_letter_interval_2;

