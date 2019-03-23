'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
function yell(aString){
    return aString.toUpperCase();
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.strictEqual(yell("How are you ?"), "HOW ARE YOU ?")
assert.strictEqual(yell("string or not string"), "STRING OR NOT STRING")
assert.strictEqual(yell("qsd qsd qsd"), "QSD QSD QSD")
assert.strictEqual(yell("EN MAJ"), "EN MAJ")
assert.strictEqual(yell("aAAH oEEE"), "AAAH OEEE")
//assert.fail('You must write your own tests')
// End of tests */
