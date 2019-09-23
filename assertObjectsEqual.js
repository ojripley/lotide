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

module.exports = assertObjectsEqual;