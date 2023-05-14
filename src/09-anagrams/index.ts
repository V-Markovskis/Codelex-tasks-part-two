/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA: string, stringB: string) {
    // stringA.toLowerCase().replace(/[^a-z]/g, '');
    // stringB.toLowerCase().replace(/[^a-z]/g, '');
    
    // const sortedStringA = stringA.split('').sort().join('');
    // const sortedStringB = stringB.split('').sort().join('');

    // return sortedStringA === sortedStringB;
    
    const sortedStringA = stringA.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    const sortedStringB = stringB.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');

    return sortedStringA === sortedStringB;
}

// function anagrams(stringA: string, stringB: string) {
//     const cleanString = (str: string) => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
//     return cleanString(stringA) === cleanString(stringB);
// }

export { anagrams };
