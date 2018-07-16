var count_same_elements = require("../../section_2/practice_2/practice.js");
var create_updated_collection_raw = require("../../section_3/practice_2/practice.js");
function create_updated_collection(collection_a, object_b) {
  return create_updated_collection_raw(count_same_elements(collection_a), object_b)
}

module.exports = create_updated_collection;
