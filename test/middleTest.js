const assertEqualArrays = require('../assertArraysEqual');
const middle = require('../middle');

// test cases
assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]);
assertEqualArrays(middle([]), []);
assertEqualArrays(middle([1, 2]), []);