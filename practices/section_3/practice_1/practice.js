function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(obj => {
    if (object_b.value.includes(obj.key)) {
      obj.count -= 1;
    }
  });
  return collection_a;
}

module.exports = create_updated_collection;
