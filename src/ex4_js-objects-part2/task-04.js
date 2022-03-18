function getCapitalizeString(str) {
  const strArr = str.split('');
  const str0Up = str[0].toUpperCase();

  strArr.shift();
  strArr.unshift(str0Up);

  return strArr.join('');
}

module.exports = getCapitalizeString;
