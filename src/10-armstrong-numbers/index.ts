/**
 * An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
 *
 * For example:
 *
 *  9 is an Armstrong number, because 9 = 9^1 = 9
 *  10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
 *  153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 *  154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190
 *
 * Write some code to determine whether a number is an Armstrong number.
 */

function validate(n: number) {
    let strNum = n.toString();
    const numberOfDigits = strNum.length;
    let sum = 0;

    for(let i = 0; i < numberOfDigits; i++) {
        //Math.pow(base, exponent)
        sum += Math.pow(parseInt(strNum[i]), numberOfDigits);
    }

    return sum === n;
}

// function validate(n: number) {
//     const digits = n.toString().split('').map(Number);
//     const power = digits.length;
//     const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
//     return sum === n;
//  }



export { validate };
