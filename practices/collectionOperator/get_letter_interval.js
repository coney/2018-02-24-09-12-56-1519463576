'use strict';


function number_to_char(number) {
  return String.fromCharCode(number -1 + 'a'.charCodeAt(0))
}

function number_to_string(number) {
  if(number > 26) {
    let result = []
    while (number > 26) {
      result.push(number_to_char(number % 26 + 1))
      number /= 26;
    }
    result.push(number_to_char(number))
    return result.reverse().join("")
  } else {
    return number_to_char(number)
  }
}

function get_letter_interval(number_a, number_b) {
  let result = []
  for(let i = number_a; number_a < number_b? i <= number_b: i >= number_b;  number_a < number_b? ++i: --i) {
    result.push(number_to_string(i))
  }
  return result
}


module.exports = get_letter_interval;
