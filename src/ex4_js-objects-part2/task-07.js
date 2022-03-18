function getShortenedString(str, length) {
  const shortenedStrArr = [];

  str.split('');

  for (let i = 0; i < length - 1; i += 1) {
    shortenedStrArr.push(str[i]);
  }

  shortenedStrArr[length] = '…';

  return shortenedStrArr.join('');
}

module.exports = getShortenedString;
