//10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers and calculates and returns the sum of the squares of only the even numbers in the input array. E.g. computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter(x => x % 2 == 0).map(x => x * x).reduce((x, y) => x + y);
}

console.log("10) The sum of squares of even numbers between 1 to 5 is: " + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));