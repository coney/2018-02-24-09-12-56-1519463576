'use strict';

function get_union(collection_a, collection_b) {
  return collection_a.concat(collection_b.filter(v => collection_a.indexOf(v) < 0))
  //在这里写入代码
}

module.exports = get_union;

