function reduce(array, callback, initialValue) {
  let previousValue = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (initialValue && previousValue === array[0]) {
      previousValue = initialValue;
      i -= 1;
    }

    const currentItem = array[i];

    previousValue = callback(previousValue, currentItem, i, array);
  }

  return previousValue;
}

module.exports = reduce;
