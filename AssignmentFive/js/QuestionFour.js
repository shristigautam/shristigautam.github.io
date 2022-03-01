// 4.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)

function sum(arr) {
    let sumTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        sumTotal += arr[i];
    }
    return sumTotal;
}

function multiply(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

console.log("4) Sum of [1,2,3,4] is: " + sum([1, 2, 3, 4]));
console.log("4) Product of [1,2,3,4] is: " + multiply([1, 2, 3, 4]));