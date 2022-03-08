/* eslint linebreak-style: ["error", "windows"] */

const inputArr = [1, 5, 6, 2, 3, 9, 4];

function maxValue(arr) {
  return Math.max.apply(null, arr);
}

const isMaxValue = maxValue(inputArr);
console.log(isMaxValue);

module.exports = maxValue;
