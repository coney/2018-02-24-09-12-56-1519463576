function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(val => object_b.value.includes(val));

}

module.exports = collect_same_elements;
