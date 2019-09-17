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

const middle = function(array) {
  
  let length = array.length;
  let midIndex = length / 2;
  let middle = [];

  if (length > 2) {
    if (length % 2 === 0) {
      middle = array.slice(midIndex - 1, midIndex + 1);
    } else {
      middle[0] = array[Math.floor(midIndex)];
    }
  }
  return middle;
};

// test cases
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([]));
// console.log(middle([1, 2]));