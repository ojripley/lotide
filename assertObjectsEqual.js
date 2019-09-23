// const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // this is the util library's 'inspect' function

  let equal = eqObjects(object1, object2); // determine if the objects are equal

  if (equal) { // log message with inspect called on the objectst to reveal more detail about them
    console.log(`✅  Assertation Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑  Assertation Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

// test cases

// test objects (primitives)
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// // test calls (primitives)
// assertObjectsEqual(ab, ba); // should be equal
// assertObjectsEqual(ab, abc); // should be not equal

// // test objects (arrays)
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// // test calls (arrays)
// assertObjectsEqual(cd, dc); // should be equal
// assertObjectsEqual(cd, cd2); // should be not equal

module.exports = assertObjectsEqual;