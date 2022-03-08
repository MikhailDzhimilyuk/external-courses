function showArray(array) {
  array.forEach(console.log(array));
  console.log(array.length);

  return undefined;
}

showArray();
showArray();
showArray();

module.exports = showArray;
