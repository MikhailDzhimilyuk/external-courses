function reduce(array, callback, initialValue) {
  let previousValue = array[0];
  let i = 1;

  if (initialValue) {
    previousValue = initialValue;
    i -= 1;
  }

  for (; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = reduce;
