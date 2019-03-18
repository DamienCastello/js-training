'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(aString){
    const cutFirstAString=aString.splice(0, 2);
    return aString;
}


function cutLast(aString){
    const cutLastAString=aString.splice(aString.length-2, aString.length);
    return aString;
}

function cutFirstLast(aString){
    const cutFirstLastAString_1=aString.splice(0, 2);
    const cutFirstLastAString_2=aString.splice(aString.length-2, aString.length);
    return aString;
}
//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
