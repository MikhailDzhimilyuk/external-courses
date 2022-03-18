function calcIdenticalSymbols(str) {
  const strArr = str.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    let identicalSymbols = 0;

    for (let j = 0; j < strArr.length; j += 1) {
      if (strArr[i] === strArr[j]) {
        identicalSymbols += 1;

        if (i !== j) {
          strArr.splice(j, 1);
        }
      }
    }

    console.log(`Cимволов ${strArr[i]} в строке: ${identicalSymbols}`);
  }
}

module.exports = calcIdenticalSymbols;
