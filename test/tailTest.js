const tail = require('../tail');
const assertEqual = require('../assertEqual');

// test
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // test tail length
assertEqual(result[0], "Lighthouse"); // test first element
assertEqual(result[1], "Labs"); // test second element