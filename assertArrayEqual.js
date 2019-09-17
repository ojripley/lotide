const eqArrays = function(array1, array2) {
  
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
  return equal;
};

const assertEqual = function(eqArrays, array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅  The arrays are equal`);
  } else {
    console.log(`🛑  The arrays are not equal`);
  }
};

assertEqual(eqArrays, [1, 2, 3], [1, 2, 3]); // => should PASS
assertEqual(eqArrays, [1, 2, 3], [3, 2, 1]); // => should PASS
assertEqual(eqArrays, ["1", "2", "3"], ["1", "2", "3"]); // => should PASS
assertEqual(eqArrays, ["1", "2", "3"], ["1", "2", 3]); // => should PASS