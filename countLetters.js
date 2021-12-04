const assertEqual = require('../assertEqual');

const countLetters = function(str) {
  const results = {};
  for (const letter of str) {
    if (str.includes(letter)) {
      results[letter] = (results[letter] + 1) || 1;
    }
  }
  return results;
};

console.log(countLetters('miami'));
console.log(countLetters('faaaaaaaaaam'));

module.exports = countLetters;