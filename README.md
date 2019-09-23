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

* `head()`
* `tail()`
* `middle()`
* `assertEqual()`
* `assertArraysEqual()`
* `assertObjectsEqual()`
* `countLetters()`
* `countOnly()`
* `eqArrays()`
* `eqObjects()`
* `findKey()`
* `findKeyByValue()`
* `flatten(array)` -> flattens in arrays into the same level as the outter array. The flattened array gets returned and the originla remains unmodified
* `letterPositions(string)` -> returns an object of letters with an array assigned to each containing the index positions of each occurance of the letter
* `map(array, callback)` -> returns a new array with the changes implemented on the original as decided by the callback function
* `takeUntil(array, callback)` -> returns a new array with values taken from the original until the condition determined by the callback function is met
* `without()`