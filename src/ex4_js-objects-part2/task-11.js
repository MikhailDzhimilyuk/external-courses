function calcIdenticalSymbols(str) {
  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    let identicalSymbols = 1;

    for (let j = 0; j < strArr.length; j += 1) {
      if (strArr[i] === strArr[j] && i !== j) {
        identicalSymbols += 1;
        delete strArr[j];
      }
    }

    if (strArr[i] !== undefined) {
      console.log(`Cимволов ${strArr[i]} в строке: ${identicalSymbols}`);
    }
  }
}

module.exports = calcIdenticalSymbols;
