const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  let match = true;

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