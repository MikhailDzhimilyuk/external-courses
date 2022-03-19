function getStringTrim(str) {
  const strArr = str.split('');

  if (strArr[str.length - 1] === ' ') { strArr.pop(); }

  if (strArr[0] === ' ') { strArr.shift(); }

  return strArr.join('');
}

module.exports = getStringTrim;
