// 11.Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4 above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.

function sum(arr) {
    return arr.reduce((x, y) => x + y);
}

function multiply(arr) {
    return arr.reduce((x, y) => x * y);
}

console.log("11) Sum of [1,2,3,4] is: " + sum([1, 2, 3, 4]));
console.log("11) Product of [1,2,3,4] is: " + multiply([1, 2, 3, 4]));