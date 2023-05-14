/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era.
 * Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    const latestAdded = this.scores[this.scores.length - 1];
    return latestAdded;
  }

  get personalBest() {
    let bestIndex: number = 0;
    for(let i = 0; i < this.scores.length; i++) {
      if(bestIndex < this.scores[i]) {
        bestIndex = this.scores[i];
      }
    }
    return bestIndex;
  }

  get personalTopThree() {
    //If a is less than b, it returns 1, meaning a should be placed after b in the sorted array (sorts in descending order).
    //If a is greater than b, it returns -1, meaning a should be placed before b in the sorted array (sorts in descending order).
    //If a and b are equal, it returns 0, meaning their order doesn't matter.
    const sortArray = [...this.scores].sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
    return sortArray.slice(0, 3);
  }

  //The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted

  //Solution =>
  //Use the spread syntax (...) to create a shallow copy of the array.
  //Call the Array.sort() method on the copy.
  //The sort() method will sort the copy without changing the original.
  
}

export { HighScores };
