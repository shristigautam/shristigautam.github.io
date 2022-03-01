// 7.	Write // Using Imperative Programminga function filterLongWords() that takes an array of words and an integer i and returns a new array containing only those words that were longer than i characters.
// Using Imperative Programming
function filterLongWords(arr, n) {
    const newArr = []; //arrays should be declared with []
    for (let i = 0; i < arr.length; i++) {
        if (n < arr[i].length) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log("7) The new array with elements more than length 2 is: " + filterLongWords(["hi", "hello", "bye", "see", "oh", "you"], 2));
//Another way to print: 
// let elements = ["hi", "hello", "bye", "see", "oh", "you"];
// filterLongWords(elements, 2).forEach(e => console.log(e));



// Using Functional Programming
const filterLongWords1 = (arr, n) => arr.filter(a => a.length > n);
console.log("7) The new array with elements more than length 2 is: " + filterLongWords1(["hi", "hello", "bye", "see", "oh", "you"], 2));