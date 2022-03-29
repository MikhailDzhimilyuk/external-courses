function map(array, callback) {
  const mapArr = [];

  for (let i = 0; i < array.length; i += 1) {
    mapArr.push(callback(array[i], i, array));
  }

  return mapArr;
}

module.exports = map;
