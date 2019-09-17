const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

// test case
// console.log(countLetters("this is a test case for counting letters in a string"));