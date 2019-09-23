const flatten = function(outterArray) {
  
  let flatArray = outterArray;
  
  for (let i = 0; i < flatArray.length; i++) {
    if (Array.isArray(flatArray[i])) {
      flatArray.splice(i, 0, flatArray[i]);
      i += flatArray[i].length;
    }
  }
  return flatArray;
};

module.exports = flatten;