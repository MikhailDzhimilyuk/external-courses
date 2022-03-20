function getCapitalizeWords(str) {
  return str.replace(/(^|\s)\S/g, (symb) => symb.toUpperCase());
}

module.exports = getCapitalizeWords;
