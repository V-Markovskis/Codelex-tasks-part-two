/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

// function longestWord(sen: string) {
//     //regular expression to remove all non-word, non-space characters and underscores from the given string
//     //The caret serves two different purposes. It is a special character that denotes “the beginning of a line” and it is a “not” operator inside of []s
//     const testArray = sen.replace(/[^\w\s]|_/g, "").split(" ");
//     let longestWordLength = 0;
//     let longestWordToReturn = '';
//     for(let i = 0; i < testArray.length; i++) {
//         if(testArray[i].length > longestWordLength) {
//             longestWordLength = testArray[i].length;
//             longestWordToReturn = testArray[i];
//         }
//     }
//     return longestWordToReturn;
// }

function longestWord(sen: string) {
    //regular expression to remove all non-word, non-space characters and underscores from the given string
    //The caret serves two different purposes. It is a special character that denotes “the beginning of a line” and it is a “not” operator inside of []s
    const senSplit = sen.replace(/[^\w\s]|_/g, "").split(" ");
    //The following function will sort the array in descending order
    let longestWordToReturn = senSplit.sort(function(a, b) {
        return b.length - a.length;
    });

    return longestWordToReturn[0];
}
 
export { longestWord };

