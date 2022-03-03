// 13.	Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

// function printFibo(n, a, b) {
//     let arr = [];
//     let c = a + b;
//     for (let i = 0; i < n; i++) {
//         arr.push(a);
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return arr;
// }

console.log("13) printFibo(n=1, a=0, b=1) is: " + printFibo(1, 0, 1));
console.log("13) printFibo(n=6, a=0, b=1) is: " + printFibo(6, 0, 1));
console.log("13) printFibo(n=10, a=0, b=1) is: " + printFibo(10, 0, 1));



//Mathikai ramro xa except s
// function printFibo(n, a, b) {
//     if (n === 0) console.log("");
//     if (n === 1) console.log(a);
//     if (n === 2) console.log(a + "," + b);
//     if (n > 2) {
//         let s = a + ", " + b;
//         let currA = a;
//         let currB = b;
//         for (let i = 2; i < n; i++) {
//             let nextFibo = currA + currB;
//             currA = currB;
//             currB = nextFibo;
//             s += ", " + nextFibo;
//         }
//         console.log(s);
//     }
// }