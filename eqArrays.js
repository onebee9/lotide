const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`:) Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`:( Assertion Failed : ${actual} !== ${expected}`);
  }
  return;
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
  
const eqArrays = function(arr1,arr2) {
// if length is not equal
  if (arr1.length !== arr2.length) {
    return "False";
  } else {
    // comparing each element of array
    for (let i = 0; i < arr1.length; i++)
      if (arr1[i] !== arr2[i])
        return "False";
  }
  return "True";
};
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS