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

const flatten = function(outterArray) {
  
  let flatArray = outterArray;
  
  for (let i = 0; i < flatArray.length; i++) {
    if (Array.isArray(flatArray[i])) {
      flatArray.splice(i, 0, flatArray[i]);
      i += flatArray[i].length;
    }
  }
  return flatArray;
};

// test cases
// assertEqualArrays(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);