function isPrime(num) {
  const simple = `Число ${num} - простое число`;
  const complex = `Число ${num} - составное число`;
  const oneOrZeroNumber = 'Не причисляется ни к простым, '
  + 'ни к составным числам';
  const codeError = 'Данные неверны';

  if (num > 1000) { return codeError; }

  if (num === 1 || num === 0) {
    return oneOrZeroNumber;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return complex;
    }
  }

  return simple;
}

module.exports = isPrime;
