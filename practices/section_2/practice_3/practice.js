function count_same_elements(collection) {
  function tryExtractKeyCount(val, pattern, keyIndex, countIndex) {
    let matches = val.match(pattern);
    if (matches != null) {
      key = matches[keyIndex];
      count = Number.parseInt(matches[countIndex]);
      return {key, count}
    } else {
      return null;
    }
  }

  function extractKeyCount(val) {
    let result = tryExtractKeyCount(val, /(.)-(\d+)/, 1, 2);
    if (result != null) {
      return result;
    }
    result = tryExtractKeyCount(val, /(.):(\d+)/, 1, 2);
    if (result != null) {
      return result;
    }
    result = tryExtractKeyCount(val, /(.)\[(\d+)]/, 1, 2);
    if (result != null) {
      return result;
    }
    let key = val;
    let count = 1
    return {key, count};
  }

  let groups = collection.reduce((result, val) => {
    let {key, count} = extractKeyCount(val);
    result[key] === undefined ? result[key] = count : result[key] += count;
    return result;
  }, {});

  result = []
  for (key in groups) {
    result = result.concat([{name: key, summary: groups[key]}])
  }
  return result
}

module.exports = count_same_elements;
