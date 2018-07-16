function collect_same_elements(collection_a, object_b) {
  return collection_a.filter(val => object_b.value.includes(val.key)).map(val => val.key)

}

module.exports = collect_same_elements;
