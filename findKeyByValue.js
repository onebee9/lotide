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

      module.exports = findKeyByValue;