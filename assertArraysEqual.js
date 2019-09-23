const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  
  if (eqArrays(array1, array2)) {
    console.log(`✅  The Arrays are equal: ${array1} === ${array2}`);
  } else {
    console.log(`🛑  The Arrays are not equal: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;