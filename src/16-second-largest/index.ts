/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) {
    // let firstLargest: number = 0;
    // for(let i = 0; i < array.length; i++) {
    //     if(firstLargest < array[i]) {
    //         firstLargest = array[i];
    //     }
    //     array.splice(array[firstLargest], 1);
    // }

    // let secondLargestNum: number = 0;
    // for(let i = 0; i < array.length; i++) {
    //     if(secondLargestNum < array[i]) {
    //         secondLargestNum = array[i];
    //     }
    // }
    // return secondLargestNum;


    const sortedArray = array.sort(function (a, b) {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    return sortedArray[sortedArray.length - 2];
}

//The compare() function accepts two arguments a and b.
//The sort() method will sort elements based on the return value of the compare() function with the following rules:
// 1) If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
// 2) If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
// 3) If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.
export { secondLargest };
