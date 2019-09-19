const words = ["ground", "control", "to", "major", "tom"]; // words to use map on

const assertArraysEqual = function(array1, array2) {

  let equal = true;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        equal = true;
      } else {
        equal = false;
      }
    }
  } else {
    equal = false;
  }
  if (equal) {
    console.log(`✅  Assertation Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertation Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {
  const resultMap = [];
  
  for (let element of array) {
    resultMap.push(callback(element));
  }

  return resultMap;
};



// const results1 = map(words, word => word[0]);
// console.log(results1);

const firstLetter = function(word) { // this is the callback function passed in test case 3
  return word[0];
};

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, function(word) {
  return word[0];
}), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, firstLetter), ['g', 'c', 't', 'm', 't']);