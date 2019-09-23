const map = function(array, callback) {
  const resultMap = [];
  
  for (let element of array) {
    resultMap.push(callback(element));
  }

  return resultMap;
};

module.exports = map;