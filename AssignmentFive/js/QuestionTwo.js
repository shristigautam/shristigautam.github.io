// 2.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {

    if (a >= b && a >= c) return a;
    else if (b >= a && b >= c) return b;
    else return c;
}

console.log("2) The max between 1, 2 and 3 is:" + maxOfThree(1, 2, 3));