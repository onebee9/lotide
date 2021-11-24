const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`:) Assertion Passed : ${actual} === ${expected}`);
    } else {
      console.log(`:( Assertion Failed : ${actual} !== ${expected}`);
    }
    return;
  };
  const head = function(arr) {
    return arr[0];
  };
  
  const tail = function(arr) {
      let result = [];
      for (i=1; i < arr.length; i++){
          result.push(arr[i]);
      }
    return result;
  }

  // Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!