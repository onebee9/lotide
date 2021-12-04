# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose
**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @onebee9/lotide`

**Require it:**

`const _ = require('@onebee9/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1,arr2)`: Returns true/false if the array is equal or not.
* `assertEqual(arr1,arr2)`: Compares 2 arrays and returns true if they're deeply equal.
* `assertObjectsEqual(obj1,obj2)`: Compares 2 objects and returns true if they're deeply equal.
* `countLetters(str)`: Retuns the number of occurences of each unique letter in a string
* `countOnly (allItems, itemsToCount)`:Retuns the number of occurences of each supplied value in a string
* `eqArrays(arr1,arr2)`: Compares 2 objects and returns true if they're equal.
* `eqObjects(object1, object2)`: Compares 2 objects and returns true if they're equal.
* `findKey(obj, callback)`: Returns the object key for a supplied value
* `findKeyByValue(obj, value)`: Returns the object key for a supplied value
* `head(arr)`: Returns the virst value of an array
* `map(array,callback) `: Applies the callback logic to all values of an array
* `middle(arr) `: Returns the middle element of an array
* `takeUntil(data, callback)`: description
* `function (source, itemsToRemove)`: description
