/**
 * Takes a max integer and returns a random number below that number
 * @param {Number} max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = getRandomInt;
