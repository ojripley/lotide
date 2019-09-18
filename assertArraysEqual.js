const assertEqualArrays = function(array1, array2) {
  
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
    console.log(`✅  The arrays are equal`);
  } else {
    console.log(`🛑  The arrays are not equal`);
  }
};

assertEqualArrays([1, 2, 3], [1, 2, 3]); // => should PASS
assertEqualArrays([1, 2, 3], [3, 2, 1]); // => should PASS
assertEqualArrays(["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertEqualArrays(["1", "2", "3"], ["1", "2", 3]); // => should PASS