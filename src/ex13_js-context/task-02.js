function Hangman(word) {
  let arrWord = Array.from(word);
  let guessArrWord = arrWord.map(el => el = '_');
  let errorsLeft = 6;
  let wrongSymbArr = [];

  this.guess = function(x) {
    let wordLength = arrWord.length;

    for (let i = 0; i < arrWord.length; i += 1) {
      if (x == arrWord[i]) { guessArrWord[i] = x; wordLength -= 1; }
    }

    if (guessArrWord.join('') == arrWord.join('')) {console.log(`${guessArrWord.join('')} | You won!`); return this;}

    if (errorsLeft == 0) {console.log(`${word} | You lose!`); return this;}

    if (wordLength == arrWord.length) { errorsLeft -= 1; wrongSymbArr.push(x); console.log(`wrong letter, errors left ${errorsLeft} | ${wrongSymbArr}`); }
      else { console.log(guessArrWord.join('')); }

    return this;
  };

  this.getGuessedString = function() {
    console.log(guessArrWord.join(''))
    return this;
  };

  this.getErrorsLeft = function() {
    console.log(errorsLeft);
    return this;
  };

  this.getWrongSymbols = function() {
    console.log(wrongSymbArr);
    return this;
  };

  this.getStatus = function() {
    console.log(`${guessArrWord.join('')} | errors left: ${errorsLeft}`);
    return this;
  };

  this.startAgain = function(word) {
    arrWord = Array.from(word);
    guessArrWord = arrWord.map(el => el = '_');
    errorsLeft = 6;
    return this;
  };
}

let hangman = new Hangman('webpurple');
