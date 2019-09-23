const letterPostitions = function(str) {
  const positions = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (positions[str[i]]) {
        positions[str[i]].push(i);
      } else {
        positions[str[i]] = [];
        positions[str[i]].push(i);
      }
    }
  }
  return positions;
};

module.exports = letterPostitions;