function count_same_elements(collection) {
  let groups = collection.reduce((result, val) => {
    result[val] === undefined ? result[val] = 1 : result[val]++;
    return result;
  }, {});

  result = []
  for (key in groups) {
    result = result.concat([{key: key, count: groups[key]}])
  }
  return result
}

module.exports = count_same_elements;
