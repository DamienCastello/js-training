'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(aString){
    console.log(aString);
    let array=aString.toLowerCase().split(' ');
    let sexyString=array.slice(0, array.length).join('*');
    console.log(sexyString);
    return sexyString;
}
whisper("oeeee oooeeee");
whisper("OEEEE oooeeee");
// want *oeeee oooeeee*
whisper('wol.lol lo,lol');
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper.length, 1)
assert.deepStrictEqual(whisper('a b c'), 'a*b*c')
assert.deepStrictEqual(whisper('a 1 c' ), 'a*1*c')
assert.deepStrictEqual(whisper('a 1 c d e f' ), 'a*1*c*d*e*f')
assert.deepStrictEqual(whisper('wol.lol lo,lol'), 'wol.lol*lo,lol')
//assert.fail('You must write your own tests')
// End of tests */
