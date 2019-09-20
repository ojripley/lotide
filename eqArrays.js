const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) { // if elements are both inner arrays
        let result = eqArrays(array1[i], array2[i]); // recursively compare their own elements
        if (!result) {
          return false;
        }
      } else { // if elements aren't arrays compare them
        console.log(`${array1[i]}, ${array2[i]}`);
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

// test cases
// assertEqual(eqArrays([1, [2, 4], 3], [1, [2, 4], 3]), true); // recursive refactor test
assertEqual(eqArrays([3, [2, 9], 1], [3, [2, 9], 3]), false); // recursive refactor test
// assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", "3", "4"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);