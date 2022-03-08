function checkElements(arr) {
  const identicalElements = arr.filter((elem) => elem === arr[0]);

  return (identicalElements.length === arr.length);
}

const isIdenticalArr = checkElements();
console.log(isIdenticalArr);

module.exports = checkElements;
