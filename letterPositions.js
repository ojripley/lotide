const letterPostitions = function(str) {
  const positions = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (positions[str[i]]) {
        positions[str[i]].push(i);
      } else {
        positions[str[i]] = [];
        positions[str[i]].push(i);
      }
    }
  }
  return positions;
};

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

console.log(letterPostitions("hello"));

assertEqualArrays(letterPostitions("hello").l, [2, 3]);