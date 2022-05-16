function Hangman(word) {
  let arrWord = Array.from(word);
  let guessArrWord = arrWord.map(el => el = '_');
  let errorsLeft = 6;
  let wrongSymbArr = [];

  function method(val) {
    return method[called](val);
  }

  method.guess = function(x) {
    let wordLength = arrWord.length;
    called = 'guess';

    for (let i = 0; i < arrWord.length; i += 1) {
      if (x == arrWord[i]) { guessArrWord[i] = x; wordLength -= 1; }
    }

    if (guessArrWord.join('') == arrWord.join('')) {console.log(`${guessArrWord.join('')} | You won!`); return this;}

    if (errorsLeft == 0) {console.log(`${word} | You lose!`); return this;}

    if (wordLength == arrWord.length) { errorsLeft -= 1; wrongSymbArr.push(x); console.log(`wrong letter, errors left ${errorsLeft} | ${wrongSymbArr}`); }
      else { console.log(guessArrWord.join('')); }

    return this;
  };

  method.getGuessedString = function() {
    console.log(guessArrWord.join(''))
    called = 'getGuessedString';
    return this;
  };

  method.getErrorsLeft = function() {
    console.log(errorsLeft);
    called = 'getErrorsLeft';
    return this;
  };

  method.getWrongSymbols = function() {
    console.log(wrongSymbArr);
    called = 'getWrongSymbols';
    return this;
  };

  method.getStatus = function() {
    console.log(`${guessArrWord.join('')} | errors left: ${errorsLeft}`);
    called = 'getStatus';
    return this;
  };

  method.startAgain = function(word) {
    arrWord = Array.from(word);
    guessArrWord = arrWord.map(el => el = '_');
    errorsLeft = 6;
    called = 'startAgain';
    return this;
  };

  return method;
}

let hangman = new Hangman('word');
