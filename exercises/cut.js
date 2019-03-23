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
    const cutFirstAString=aString.slice(2);
    return cutFirstAString;
}


function cutLast(aString){
    const cutLastAString=aString.slice(0, aString.length-2);
    return cutLastAString;
}

function cutFirstLast(aString){
    
    return aString.slice(2, aString.length-2);
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirst('1234 5678'), '34 5678')
assert.deepStrictEqual(cutFirst('aaAAHH C b1!'), 'AAHH C b1!')
assert.deepStrictEqual(cutFirst('oLLP zifh'), 'LP zifh')
assert.deepStrictEqual(cutLast('1234 5678'), '1234 56')
assert.deepStrictEqual(cutLast('aaAAHH C b1!'), 'aaAAHH C b')
assert.deepStrictEqual(cutLast('oLLP zifh'), 'oLLP zi')
assert.deepStrictEqual(cutFirstLast('1234 5678'), '34 56')
assert.deepStrictEqual(cutFirstLast('aaAAHH C b1!'), 'AAHH C b')
assert.deepStrictEqual(cutFirstLast('oLLP zifh'), 'LP zi')
//assert.fail('You must write your own tests')
// End of tests */
