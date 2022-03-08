/* eslint linebreak-style: ["error", "windows"] */

const inputArray = [1, null, 2];
const outputArray = [];
function evenOddZeroNumbers(arrIn, arrOut = []) {
  const arrEven = arrIn.filter((elem) => elem % 2 === 0 && elem !== null && elem !== 0
    && Number.isInteger(elem) === true);

  const arrOdd = arrIn.filter((elem) => elem % 2 === 1 && elem !== null
    && Number.isInteger(elem) === true);

  const arrZero = arrIn.filter((elem) => elem === 0);

  arrOut.push(arrEven.length);
  arrOut.push(arrOdd.length);
  arrOut.push(arrZero.length);

  console.log(arrOut);
  return arrOut;
}
evenOddZeroNumbers(inputArray, outputArray);

module.exports = evenOddZeroNumbers;
