const takeUntil = function(array, callback) { // collect items from an array until the call back function returns a truthy value
  const collection = [];

  for (let element of array) {
    if (!callback(element)) { // if callback returns false
      collection.push(element); // add element and loop again
    } else {
      return collection; // if callback returns true, don't add element, stop looping and return the collection
    }
  }

  return collection;
};

module.exports = takeUntil;