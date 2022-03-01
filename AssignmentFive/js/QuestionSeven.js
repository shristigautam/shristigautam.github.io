// 7.	Write a function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.
function filterLongWords(arr, n) {
    let newArr = []; //arrays should be declared with []
    for (let i = 0; i < arr.length; i++) {
        if (n < arr[i].length) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("7) The new array with elements more than length 2 is: " + filterLongWords(["hi", "hello", "bye", "see", "oh", "you"], 2));