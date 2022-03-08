function maxValue(arr) {
  return Math.max.apply(null, arr);
}

const isMaxValue = maxValue();
console.log(isMaxValue);

module.exports = maxValue;
