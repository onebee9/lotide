const eqArrays = require ('../eqArrays');
const assertArraysEqual = require ('../assertArraysEqual');

const without = function (source, itemsToRemove){
    let result = [];
    for (let j = 0; j < source.length; j++){
        if (!itemsToRemove.includes(source[j])){
            result.push(source[j]);
        }

    }
    return result;
};

module.exports = without;