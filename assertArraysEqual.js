const eqArrays = function(arr1,arr2) {
    // if length is not equal
      if (arr1.length !== arr2.length) {
        return false;
      } else {
        // comparing each element of array
        for (let i = 0; i < arr1.length; i++)
          if (arr1[i] !== arr2[i])
            return false;
      }
      return true;
    };

const assertArraysEqual = function(arr1,arr2) {
if (eqArrays(arr1,arr2)){
    console.log(`These arrays are equal`);
}
else {
    console.log(`These arrays are not equal`);
}
};