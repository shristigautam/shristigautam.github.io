// 8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be computed as 1^2 + 2^2 +3^2 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(arr) {
    // reduce(callback(previous, currentValue, currentIndex, array),[initValue])
    // Left to Right to single value, every return is new previous just like recursion
    const sumSquares = arr.reduce((a, b) => a + b * b);
    return sumSquares;
}


// Alternative Way by using lambda
// return arr.map(x => x * x).reduce((x, y) => x + y);

console.log("8) The sum of squared of [1,2,3] is: " + computeSumOfSquares([1, 2, 3]));