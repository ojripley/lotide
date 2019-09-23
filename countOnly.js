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

module.exports = countOnly;
