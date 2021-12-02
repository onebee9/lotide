const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`:) Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed : ${actual} !== ${expected}`);
  }
  return;
};
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