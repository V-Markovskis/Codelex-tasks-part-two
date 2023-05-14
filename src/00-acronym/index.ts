/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(returnAcronym: string): string {
    return returnAcronym
    //split the string based on regular expressions
    //\s - all whitespaces
    //- hyphen
    //_ underscore
      .split(/\s|-|_/)
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  }

  //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
  

// function parse(input: string) {
//     input.replace(/^a-zA-Z0-9 ]/g, ' ')
//     const arrayFromString = input.toUpperCase().split(" ");
//     let acronym = '';
//     for(let i = 0; i < arrayFromString.length; i++) {
//         acronym += arrayFromString[i].charAt(0);
//     }
//     console.log(acronym);
//     return acronym;
// }



export { parse };
