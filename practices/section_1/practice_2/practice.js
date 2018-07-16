function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(val => collection_b[0].includes(val));
}

module.exports = collect_same_elements;
