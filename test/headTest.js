const head = require('../head');
// no need to use assertEqual if we are moving to chai
// const assertEqual = require('../assertEqual');

// for using mocha and chai based test code...
const assert = require('chai').assert;

// my own test code
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});