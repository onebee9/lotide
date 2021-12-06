const eqArrays = require ('../eqArrays');
const assertArraysEqual = require ('../assertArraysEqual');

const letterPositions = function(word){
    let letters = {};

    for(let i = 0; i < word.length; i++){
        if(word[i] in letters){
           let existing_index_array = letters[word[i]];
           existing_index_array.push(i);
           letters[word[i]] = existing_index_array;
        }

        else{
            let index_array = [];
            index_array.push(i);
            letters[word[i]] = index_array;
        }
    }

    return letters;
};

console.log(letterPositions('miamivice'));
module.exports = letterPositions;