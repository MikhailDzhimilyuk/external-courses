function getCapitalizeWords(str) {
  const strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i += 1) {
    const wordArr = strArr[0].split('');
    const wordUpper = wordArr[0].toUpperCase();

    wordArr.shift();
    wordArr.unshift(wordUpper);

    strArr.shift();
    strArr.push(wordArr.join(''));
  }

  return strArr.join(' ');
}

module.exports = getCapitalizeWords;
