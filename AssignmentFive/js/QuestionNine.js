//9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds and prints only the numbers which are odd.
function printOddNumbersOnly(arr) {
    return arr.filter(x => x % 2 != 0);
}
// printOddNumbersOnly = (arr) => arr.filter(x => x % 2 != 0); //Using function expression
console.log("9) The odd numbers are: " + printOddNumbersOnly([1, 2, 3, 4, 5, 6]));