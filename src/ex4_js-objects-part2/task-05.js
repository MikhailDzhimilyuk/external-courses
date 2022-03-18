function checkString(str, searchString) {
  const strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] === searchString) { return true; }
  }

  return false;
}

module.exports = checkString;
