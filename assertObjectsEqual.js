const eqArrays = function (array1, array2) {

  let match = true;

  if (array1.length === array2.length) { // if lengths are the same
    for (let i = 0; i < array1.length; i++) { // iterate over arrays
      if (array1[i] !== array2[i]) { // if values are different, fail test
        match = false;
      }
    }
  } else {
    match = false;
  }
  return match;
};

const eqObjects = function (obj1, obj2) {
  let match = true;

  let obj1Keys = Object.keys(obj1); // list of keys for object 1
  let obj2Keys = Object.keys(obj2); // list of keys for object 1

  if (obj1Keys.length !== obj2Keys.length) { // if objects don't have same number of keys
    match = false;
  } else {
    for (let key of obj1Keys) { // loop over list of object keys
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { // if both values are arrays
        match = eqArrays(obj1[key], obj2[key]); // match is false if arrays not equal
      } else {
        if (obj1[key] !== obj2[key]) { // if key in object 1 doesn't match it's counterpart in object 2
          match = false;
        }
      }
    }
  }
  return match;
};

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