function getAddToString(str, word, wordNumb) {
  const strArr = str.split(' ');
  const addToStrArr = [];

  for (let i = 0; i < strArr.length; i += 1) {
    addToStrArr.push(strArr[i]);

    if (i === wordNumb) {
      addToStrArr.push(word);
    }
  }

  return addToStrArr.join(' ');
}

module.exports = getAddToString;
