/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    return (
      //The parseInt() function parses a string argument and returns an integer
        parseInt(
          int
            .toString()
            .split('')
            .reverse()
            .join('')
            //Multiply the reversed number by the sign of the original number using Math.sign(int)
        ) * Math.sign(int)
      ) 
}

export { reverse };
