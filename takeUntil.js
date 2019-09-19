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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
