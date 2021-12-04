const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];
describe("#tail", () => {
    it("Length of array should equal 3", () => {
      assert.strictEqual(words.length, 3);
    });
  });