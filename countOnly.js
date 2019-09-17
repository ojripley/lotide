const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertation Failed: ${actual} !== ${expected}`);
  }
};

// allItems should be an array of strings that we need to look through
// itemsToCount should be an object specifying which strings we want to count
const countOnly = function(allItems, itemsToCount) {
  let countedItems = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (countedItems[item]) {
        countedItems[item] += 1;
      } else {
        countedItems[item] = 1;
      }
    }
  }
  return countedItems;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
