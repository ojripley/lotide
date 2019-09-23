// require module assert equal so we can use it to test
const assertEqual = require('./assertEqual');
// assertEqual is now equal to whatever we exported from the file assertEqual.js

// returns the head of an array
const head = function(array) {
  return array[0];
};

module.exports = head;