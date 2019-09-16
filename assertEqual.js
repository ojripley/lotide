// function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅  Assertation Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑  Assertation Failed: " + actual + " !== " + expected);
  }
};

// test
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);