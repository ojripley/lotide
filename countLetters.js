const countLetters = function(str) {
  let countedLetters = {};

  for (const letter of str) {
    if (letter !== ' ') {
      if (countedLetters[letter]) {
        countedLetters[letter] += 1;
      } else {
        countedLetters[letter] = 1;
      }
    }
  }

  return countedLetters;
};

module.exports = countLetters;