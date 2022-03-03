// 6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(arr) {
    longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (longest.length <= arr[i].length) {
            longest = arr[i];
        }
    }
    return longest.length;
}
console.log("6) The longest length among hi, hello and bye is:" + findLongestWord(["hi", "hello", "bye"]));