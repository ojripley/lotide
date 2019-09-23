const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  let match = true;

  let obj1Keys = Object.keys(obj1); // list of keys for object 1
  let obj2Keys = Object.keys(obj2); // list of keys for object 2
  
  if (obj1Keys.length !== obj2Keys.length) { // if objects don't have same number of keys
    match = false;
  } else {
    for (let key of obj1Keys) { // loop over list of object keys
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { // if both values are arrays
        match = eqArrays(obj1[key], obj2[key]); // match is false if arrays not equal
      } else {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') { // key values are objects, call eqObjects again with those keys
          if (!eqObjects(obj1[key], obj2[key])) {
            return false; // if the inner objects are not equal, return false
          }
        } else { // if not an array, and then not an object, check keys for match
          if (obj1[key] !== obj2[key]) { // if key in object 1 doesn't match it's counterpart in object 2
            match = false;
          }
        }
      }
    }
  }
  return match;
};


// test cases

//test objects (primitives)
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// // test calls (primitives)
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// // test objects (arrays)
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };

// // test calls (arrays)
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

// test cases for recursive compatible refactor
// recursion allows us to handle objects that contain objects
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 3 }), false);

module.exports = eqObjects;