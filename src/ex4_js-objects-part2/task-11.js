function calcIdenticalSymbols(str) {
  const result = {};

  str.split('').forEach((a) => {
    result[a] = result[a] + 1 || 1;
  });

  Object.entries(result).forEach(([symbol, numOfRepeat]) => console.log([symbol, numOfRepeat]));
}

module.exports = calcIdenticalSymbols;
