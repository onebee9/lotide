const eqArrays = require ('../eqArrays');
const assertArraysEqual = ('../assertArraysEqual');
const middle = require ('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
    it("['a', 'b', 'c', 'd', 'e', 'f'] should return ['c','d']", () => {
      assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f']),['c','d']);
    });
    it("should return ['d','e']", () => {
        assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f','g','h']),['d','e']);
    });
    it("should return ", () => {
        assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f','g','h','i']),['e']);
    });
    it("should return ", () => {
        assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
    });
    it("should return ", () => {
        assert.deepEqual(middle(['a', 'b']),[]);
    });
  });
