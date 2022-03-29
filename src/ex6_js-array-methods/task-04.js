function filter(array, callback) {
  const arrFilter = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) { arrFilter.push(array[i]); }
  }

  return arrFilter;
}

module.exports = filter;
