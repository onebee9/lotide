const assertArraysEqual = function(arr1,arr2) {
if (eqArrays(arr1,arr2)){
    console.log(`These arrays are equal`);
}
else {
    console.log(`These arrays are not equal`);
}
};

module.exports = assertArraysEqual;