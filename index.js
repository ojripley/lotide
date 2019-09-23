// this file will be responsible for exporting our functions together as part of one 'lotide object'

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  head: head,
  tail: tail,
  middle: middle
};