function getlowerCamelCase(str) {
  const resultArr = [];

  str.split('');

  for (let i = 0; i < str.length; i += 1) {
    let elemStr = str[i];

    if (elemStr === ' ') {
      i += 1;
      elemStr = str[i];
      resultArr.push(elemStr.toUpperCase());
    } else {
      resultArr.push(elemStr.toLowerCase());
    }
  }

  return resultArr.join('');
}

module.exports = getlowerCamelCase;
