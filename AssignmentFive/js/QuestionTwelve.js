// 12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)

function findSecondBiggest(arr) {
    let largest = arr[0];
    let secondlargest = arr[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondlargest && arr[i] < largest) {
            secondlargest = arr[i];
        }
    }
    return secondlargest;
}

console.log("12) Second biggest of [1,2,3,4,5] is: " + findSecondBiggest([1, 2, 3, 4, 5]));
console.log("12) Second biggest of [19,9,11,0,12] is: " + findSecondBiggest([19, 9, 11, 0, 12]));