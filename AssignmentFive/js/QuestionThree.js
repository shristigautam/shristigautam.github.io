// // 3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// function isVowel(char) {
//     const char_lower = char.toLowerCase();
//     vowels = ['a', 'e', 'i', 'o', 'u'];
//     for (let v = 0; v < vowels.length; v++) {
//         if (vowels[v] == char_lower)
//             return true;
//     }
//     return false;
// }

// function isVowel(a) {
//     const a_low = a.toLowerCase();
//     return a_low == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u';
// }

// function isVowel(a) {
//     const a_low = a.toLowerCase();
//     let r = false;
//     switch (a_low) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             r = true;
//             break;
//     }
//     return r;
// }

const vowels = ['a', 'e', 'i', 'o', 'u'];
const isVowel = (a) => vowels.filter(v => v == a.toLowerCase()).length > 0 ? true : false;


console.log("3) Is 'a' a vowel? " + isVowel('a'));
console.log("3) Is 'A' a vowel? " + isVowel('A'));
console.log("3) Is 'v' a vowel? " + isVowel('v'));