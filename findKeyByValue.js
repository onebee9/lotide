const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`:) Assertion Passed : ${actual} === ${expected}`);
    } else {
      console.log(`:( Assertion Failed : ${actual} !== ${expected}`);
    }
    return;
  };

    const findKeyByValue = function(obj, value){
        for (const key of Object.keys(obj)){
            if (obj[key] == value){
                console.log(key);
                return key;
            }
        }
    };

    const bestTVShowsByGenre = { 
        comedy: "Brooklyn Nine-Nine",
        drama:  "The Wire"
      };
      
      assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
      assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
      assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);