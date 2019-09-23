// test for assertEqual.js

// writing the require with two ../ instead of one dot will refer to parent directory
const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);