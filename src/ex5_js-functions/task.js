function calc() {
  let res = 0;

  return {
    add: function add(x) {
      if (!isNaN(x)) {
        res += x;
      }

      return add;
    },
    subtract: function subtract(x) {
      if (!isNaN(x)) {
        res -= x;
      }

      return subtract;
    },
    divide: function divide(x) {
      if (!isNaN(x) && x !== 0) {
        res /= x;
      }

      return divide;
    },
    multiply: function multiply(x) {
      if (!isNaN(x)) {
        res *= x;
      }

      return multiply;
    },
    getResult() {
      return res;
    },
    reset() {
      res = 0;

      return res;
    },
  };
}

const calculator = calc();

module.exports = calculator;
