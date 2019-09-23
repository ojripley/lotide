const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


// test cases
// assertEqual(eqArrays([1, [2, 4], 3], [1, [2, 4], 3]), true); // recursive refactor test
assertEqual(eqArrays([3, [2, 9], 1], [3, [2, 9], 3]), false); // recursive refactor test
// assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", "3", "4"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);