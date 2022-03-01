// 5.	Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
    let reversTring = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversTring += str[i];
    }
    return reversTring;
}

console.log("5) The reverse of jag testar is: " + reverse("jag testar"));