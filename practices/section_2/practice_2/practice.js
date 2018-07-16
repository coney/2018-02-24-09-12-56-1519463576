function count_same_elements(collection) {
  let groups = collection.reduce((result, val) => {
    let splited = val.split("-");
    let key = splited[0];
    let count = splited[1] == undefined ? 1 : Number.parseInt(splited[1])
    result[key] === undefined ? result[key] = count : result[key] += count;
    return result;
  }, {});

  result = []
  for (key in groups) {
    result = result.concat([{key: key, count: groups[key]}])
  }
  return result

}

module.exports = count_same_elements;
