const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2)) {
    console.log(`✅  Assertation Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  Assertation Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS

module.export = assertArraysEqual;