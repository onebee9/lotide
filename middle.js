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
};
console.log(middle(['a', 'b', 'c', 'd', 'e', 'f']));
console.log(middle(['a', 'b', 'c', 'd', 'e', 'f','g','h']));
module.exports = middle;
