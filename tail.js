const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertation Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

// test
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // test tail length
assertEqual(result[0], "Lighthouse"); // test first element
assertEqual(result[1], "Labs"); // test second element
