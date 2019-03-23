'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(aString){
    return aString[0] + aString[1];
}

function keepLast(aString){
    return aString[aString.length-2] + aString[aString.length-1];
}

function keepFirstLast(aString){
    return aString[0] + aString[1] + aString[aString.length-2] + aString[aString.length-1];
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst.length, 1)
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(keepLast.length, 1)
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirst('1234 5678'), '12')
assert.deepStrictEqual(keepFirst('aaAAHH C b1!'), 'aa')
assert.deepStrictEqual(keepFirst('oLLP zifh'), 'oL')
assert.deepStrictEqual(keepLast('1234 5678'), '78')
assert.deepStrictEqual(keepLast('aaAAHH C b1!'), '1!')
assert.deepStrictEqual(keepLast('oLLP zifh'), 'fh')
assert.deepStrictEqual(keepFirstLast('1234 5678'), '1278')
assert.deepStrictEqual(keepFirstLast('aaAAHH C b1!'), 'aa1!')
assert.deepStrictEqual(keepFirstLast('oLLP zifh'), 'oLfh')
//assert.fail('You must write your own tests')
// End of tests */
