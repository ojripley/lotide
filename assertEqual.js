// function




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertation Failed: ${actual} !== ${expected}`);
  }
};

// export
module.exports = assertEqual;

// when exporting modules, make sure you pass the variable that points
// to the function and not actually calling the function itself
