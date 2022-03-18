function getStringTrim(str) {
  const strArr = str.split('');

  strArr.shift();
  strArr.pop();

  return strArr.join('');
}

module.exports = getStringTrim;
