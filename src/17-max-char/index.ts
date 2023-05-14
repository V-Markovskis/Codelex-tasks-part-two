/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    let mostLength = 0;
    let characterMostLength = '';
    for(let i = 0; i < str.length; i++) {
        if(str.length === 1) {
            return str[0];
        }
        
        // new RegExp(str[i], 'g') => creates new regular expression from the character with global flag 'g'
        // The global flag ensures that all occurrences of the pattern will be replaced, not just the first one.
        let lengthDifference = str.length - str.replace(new RegExp(str[i], 'g'), '').length;
        if(lengthDifference > mostLength) {
            characterMostLength = str[i];
            mostLength = lengthDifference;
        }
    }
    return characterMostLength;
}

export { maxChar };
