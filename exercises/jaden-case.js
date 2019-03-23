'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(aString){
    let sexyArray=[];
    let array=aString.split(' ');
    
    let i=0;
    for (i=0;i<array.length;i++){
        let wordToChange=array[i];
        const wordCapitalized = wordToChange.charAt(0).toUpperCase() + wordToChange.slice(1).toLowerCase();
        sexyArray.push(wordCapitalized);
        
    }
    let finalString="";
    let k=0;
    for (k=0;k<sexyArray.length;k++){
        finalString=sexyArray.join(' ');
    }
    console.log(sexyArray);
    return finalString;
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?")
assert.strictEqual(jadenCase("string or not string"), "String Or Not String")
assert.strictEqual(jadenCase("qsd qsd qsd"), "Qsd Qsd Qsd")
assert.strictEqual(jadenCase("EN MAJ"), "En Maj")
assert.strictEqual(jadenCase("aAAH oEEE"), "Aaah Oeee")
//assert.fail('You must write your own tests')
// End of tests */
