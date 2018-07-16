'use strict';
var is_exist_element = function(collection,element){
  return collection.filter((val, index) => index % 2 == 0).some(value => value == element);
};
module.exports = is_exist_element;
