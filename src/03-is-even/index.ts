/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */


// If the result is 0, the number is even, otherwise, it is odd
// (!) to convert the result to a boolean value
// If the number is even, the function returns true, otherwise, it returns false
// function isEven(n: number): boolean {
//     return !(n & 1);
// }

const EVEN_NUMBER = [0, 2, 4, 6, 8];

function isEven(n: number) {
    //split(".")[0] - split the string at the decimail point (if any) and takes the first part (whole number) of the split result => (0.15) => ()
    const wholeNumberAsString = n.toString().split(".")[0];
    // unary operator (+) coverts string to number
    const lastDigit = +wholeNumberAsString[wholeNumberAsString.length - 1];
    return EVEN_NUMBER.includes(lastDigit);
}


//For example, consider the following bitwise AND operation:

// 5 & 3
// In binary representation, 5 is 101 and 3 is 011. The bitwise AND operation would result in:

//   101
// & 011
//   ---
//   001

// The resulting binary number is 001, which is equal to 1 in decimal. So, 5 & 3 would return 1.

export { isEven };
