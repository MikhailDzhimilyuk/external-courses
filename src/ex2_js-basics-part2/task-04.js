/* eslint linebreak-style: ["error", "windows"] */

const inputArr = [1, 1];

function checkElements(arr) {
  const identicalElements = arr.filter((elem) => elem === arr[0]);
  return (identicalElements.length === arr.length);
}
const isIdenticalArr = checkElements(inputArr);
console.log(isIdenticalArr);

module.exports = checkElements;
