// 3.	Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(a) {
    vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let v = 0; v < vowels.length; v++) {
        if (vowels[v] == a)
            return true;
    }
    return false;
}

console.log("3) Is 'a' a vowel? " + isVowel('a'));
console.log("3) Is 'v' a vowel? " + isVowel('v'));