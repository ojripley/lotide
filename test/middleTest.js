// const assertEqualArrays = require('../assertArraysEqual');
const middle = require('../middle');

const assert = require('chai').assert;

describe('#middle', () => {
  it('should return true for [3]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});

// test cases
// assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]);
// assertEqualArrays(middle([]), []);
// assertEqualArrays(middle([1, 2]), []);

