function evenOddZeroNumbers(arrIn) {
  let even = 0;
  let odd = 0;
  let zero = 0;

  const arrInOnlyNumbers = arrIn.filter((elem) => elem !== null
    && Number.isInteger(elem) === true);

  for (let i = 0; i < arrInOnlyNumbers.length; i += 1) {
    if (arrInOnlyNumbers[i] % 2 === 0 && arrInOnlyNumbers[i] !== 0) {
      even += 1;
    }

    if (arrIn[i] % 2 === 1) {
      odd += 1;
    }

    if (arrIn[i] === 0) {
      zero += 1;
    }
  }

  console.log([even, odd, zero]);

  return [even, odd, zero];
}

evenOddZeroNumbers();

module.exports = evenOddZeroNumbers;
