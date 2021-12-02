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

const middle = function(arr){
let size = arr.length;
let averageLength1 = 0;
let averageLength2 = 0;
let result = [];

    if(size > 2){
       averageLength1 = size/2;
       averageLength2 = Math.floor(size/2);
        if ((size % 2) == 0){
            result.push(arr[averageLength1 - 1]);
            result.push(arr[averageLength1]);
        }
        else {
            result.push(arr[averageLength2])
        }
    }
return result;

}

console.log(middle(['a', 'b', 'c', 'd', 'e', 'f']));
console.log(middle(['a', 'b', 'c', 'd', 'e', 'f','g','h']));
console.log(middle(['a', 'b', 'c', 'd', 'e', 'f','g','h','i']));
console.log(middle(['a', 'b', 'c', 'd', 'e']));
console.log(middle(['a', 'b']));