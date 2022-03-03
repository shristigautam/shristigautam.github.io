// 1.	Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

// function max(a, b) {
//     if (a >= b) return a;
//     else return b;
// }
const max = (a, b) => (a > b) ? a : b;
console.log("1) The max between 1 and 2 is: " + max(1, 2));