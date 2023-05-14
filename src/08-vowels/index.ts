/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    return s.replace(/[^aeiou|AEIOU]/g, "").length; 
}

// function vowels(s: string) {
//     return s.match(/[aeiou]/gi)?.length;
// }    

// const VOWELS = ['a','e','i','o','u']
// function vowels(s: string) {
//     let counter = 0;
//     s.split("").forEach((char) => {
//         if(VOWELS.includes(char.toLowerCase())) {
//             counter++;
//         }
//     });
//     return counter; 
// }

export { vowels };
