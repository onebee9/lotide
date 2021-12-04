const assertEqual = require('../assertEqual');
const sampleData = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (item in itemsToCount) {
      results[item] = (results[item] + 1) || 1;
    }
  }
  console.log(results);
  return results;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  

  
assertEqual(sampleData["Jason"], 1);
assertEqual(sampleData["Karima"], undefined);
assertEqual(sampleData["Fang"], 2);
assertEqual(sampleData["Agouhanna"], undefined);

module.exports = countOnly;