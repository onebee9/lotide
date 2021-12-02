const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`:) Assertion Passed : ${actual} === ${expected}`);
    } else {
      console.log(`:( Assertion Failed : ${actual} !== ${expected}`);
    }
    return;
  };
  
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
  
  // Returns true if both objects have identical keys with identical values.
  // Otherwise you get back a big fat false!
  const eqObjects = function(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    } else {
      // comparing each value
          for (const key of keys1){
              if(Array.isArray(object1[key])|| Array.isArray(object2[key])){
                  eqArrays(object1[key],(object2[key]));
              }
              else {
                  if (object1[key] !== object2[key]) {
                      return false;
                  } 
              }
                      
          }
      }
     
    return true;
  };

  const assertObjectsEqual = function(actual, expected) {
    if (eqObjects (actual,expected)){
        console.log(`These objects are equal`);
    }
    else {
        console.log(`These objects are not equal`);
    }
  }; 
  
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const a = {a:'1', b:'2'};
const d = {e:'3', b:'4', c:[2,3]};
console.log(assertObjectsEqual(cd, dc));
console.log(assertObjectsEqual(a, d));

