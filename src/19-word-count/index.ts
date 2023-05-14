/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

//.replace(/ +/g, '')
//.replace(/s+/g, '');
//let wordsArray = str.replace(/[\r\n\t\s+]/g, ' ').toLowerCase().trim().split(' ');

//The problem isn't that constructor is a reserved word, it is that objects inherit a constructor property.
// class Words { 
//   count(str: string) {
//     let wordsArray = str.replace(/[\r\n\t]/g, ' ').toLowerCase().trim().split(/\s+/);
//     const wordMap: Map<string, number> = new Map([]);

//     for(let i = 0; i < wordsArray.length; i++) {
//       let count = 1;
//       let currentWordCount = wordMap.set(wordsArray[i], count);
//       let incrementCount = currentWordCount ? count++ : count;
//       wordMap.set(wordsArray[i], incrementCount)
//       count = 1;  
//     }

//     return wordMap;
//   }
// }

export { Words };




//str.replace(/[\r\n\t]/g, ' ') replaces all newline, carriage return, and tab characters with a space.
//toLowerCase() converts the entire string to lowercase.
//trim() removes leading and trailing spaces.
//split(/\s+/) splits the string into an array of words using one or more spaces as the delimiter.


//.replace(/constructor/i, "constructor")
class Words { 
  count(str: string) {
    let wordsArray = str.replace(/[\r\n\t]/g, ' ').toLowerCase().trim().split(/\s+/);
    //variable named wordMap which is an object that serves as a dictionary (or map)
    //https://timmousk.com/blog/typescript-map/
    let wordMap: {[id: string]: number;} = {};

    for(let i = 0; i < wordsArray.length; i++) {
      let currentWordCount = wordMap[wordsArray[i]];
      let count = currentWordCount ? currentWordCount : 0;
      if(wordsArray[i] === 'constructor') {
        wordMap = {...wordMap, constructor: count+1}
      } else {
        wordMap[wordsArray[i]] = count + 1;
      }
    }
    return wordMap;
  }
}