/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(n: number) {
    for (let i = 1; i <= n; i++) {
        let resultSpacesStart = '';
        let resultCharacter = '';
        let resultSpacesEnd = '';
        // printing start spaces
        for (let j = 1; j <= n - i; j++) {
            resultSpacesStart += ' ';
        }
        // printing #
        for (let k = 0; k < 2 * i - 1; k++) {
            resultCharacter += '#'
        }
        // printing end spaces
        for (let p = 1; p <= n - i; p++) {
            resultSpacesEnd += ' ';
        }

        
        console.log(resultSpacesStart + resultCharacter + resultSpacesEnd);
    }
}

export { pyramid };
