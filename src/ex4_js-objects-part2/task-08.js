function getlowerCamelCase(str) {
  let newStr = str.replace(/\S/g, (symb) => symb.toLowerCase());

  newStr = newStr.replace(/(\s)\S/g, (symb) => symb.toUpperCase()).split(' ').join('');

  return newStr[0].toLowerCase() + newStr.substring(1);
}

module.exports = getlowerCamelCase;
