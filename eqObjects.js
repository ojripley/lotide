// const assertEqual = require('./assertEqual');
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

module.exports = eqObjects;