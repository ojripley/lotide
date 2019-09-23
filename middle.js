const middle = function(array) {
  
  let length = array.length;
  let midIndex = length / 2;
  let middle = [];

  if (length > 2) {
    if (length % 2 === 0) {
      middle = array.slice(midIndex - 1, midIndex + 1);
    } else {
      middle[0] = array[Math.floor(midIndex)];
    }
  }
  return middle;
};
module.exports = middle;