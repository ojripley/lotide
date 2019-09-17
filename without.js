const assertEqualArrays = function (array1, array2) {

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

const without = function(source, itemsToRemove) {
  let output = source;

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        output.splice(i, 1);
      }
    }
  }
  return output;
};

// test cases
// assertEqualArrays(without([1, 2, 3], [1]), [2, 3]);
// assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertEqualArrays(without([2, 3, 5, 3, 1, 6, 7, 9, 3], [3]), [2, 5, 1, 6, 7, 9]);