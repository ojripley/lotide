const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) { // if elements are both inner arrays
        let result = eqArrays(array1[i], array2[i]); // recursively compare their own elements
        if (!result) {
          return false;
        }
      } else { // if elements aren't arrays compare them
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

module.exports = eqArrays;