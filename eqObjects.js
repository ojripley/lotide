const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {

  let match = true;

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        match = true;
      } else {
        match = false;
      }
    }
  } else {
    match = false;
  }
  return match;
};

const eqObjects = function(obj1, obj2) {
  let match = true;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) { // if objects don't have same number of keys
    match = false;
  } else {
    for (let i = 0; i < Object.keys(obj2).length; i++) { // loop over object keys
      if (obj1[i] !== obj2[i]) { // if key in object 1 doesn't match it's counterpart in object 2
        match = false;
      }
    }
  }

  return match;
};


// test cases

// test objects
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

// test calls
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);