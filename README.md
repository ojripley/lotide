# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ojripley/lotide`

**Require it:**

`const _ = require('@ojripley/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)` -> returns the first element in an array
* `tail(array)` -> returns the last item of an array
* `middle(array)` -> returns the middle item of an array, or an empty array if the length is less than 3
* `assertEqual(actual, expected)` -> asserts the equality of two primitive type values
* `assertArraysEqual(array1, array2)` -> asserts the equality of two arrays
* `assertObjectsEqual(object1, object2)` -> assertation for comparing two objects
* `countLetters(string)` -> returns on object with an array for each letter found in the string and its count
* `countOnly(allItems, itemsToCount)` -> returns an object of the items specifed to count by itemsToCount from allItems
* `eqArrays(object1, object2)` -> determines object equality
* `eqObjects(obj1, obj2)` -> returns true if two objects are equal
* `findKey(object, callback)` -> finds the first key occurance that matches the condition determined by the callback function
* `findKeyByValue(obj, value)` -> returns the value of the key specified in an object
* `flatten(array)` -> flattens in arrays into the same level as the outter array. The flattened array gets returned and the originla remains unmodified
* `letterPositions(string)` -> returns an object of letters with an array assigned to each containing the index positions of each occurance of the letter
* `map(array, callback)` -> returns a new array with the changes implemented on the original as decided by the callback function
* `takeUntil(array, callback)` -> returns a new array with values taken from the original until the condition determined by the callback function is met
* `without(sourceArray, itemsToRemoveArray)` -> returns a new array with any matching items between the source array and the remove array removed