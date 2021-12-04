const eqArrays = require ('../eqArrays');
const assertArraysEqual = require ('../assertArraysEqual');

const letterPositions = function(sentence) {
  let letters = [];
  let found;
  for(var i = 0; i < sentence.length; i++) {//step 1
    if (letters.includes(sentence[i])){ // checking if the elements of an array exist in the same
      console.log(sentence[i]);
      found = letters.findIndex(sentence[i]);
      letters[found].push(i); 
    }else {
        letters.push[found].push(i);
      }
      //letters[sentence[i]].push(i);
    }
  return letters;
};

console.log(letterPositions('miamivice'));
module.exports = letterPositions;


