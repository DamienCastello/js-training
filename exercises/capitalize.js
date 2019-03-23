'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

function capitalize(aString){
        let sexyArray=[];
        let array=aString.split(' ');
     
        let i=0;
        for (i=0;i<1;i++){
            let wordToChange=array[0];
            const wordCapitalized =  wordToChange.charAt(0).toUpperCase() + wordToChange.slice(1).toLowerCase();
            sexyArray.push(wordCapitalized);
        }
        for (i=1;i<array.length;i++){
            let wordToChange=array[i];
            const wordCapitalized = wordToChange.slice(0).toLowerCase();
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

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
