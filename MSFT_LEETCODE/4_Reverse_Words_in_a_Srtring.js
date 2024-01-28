
function reverse(s) {
    // Split the string into an array of words
    const wordsArray = s.trim().split(/\s+/);

    // Reverse the array and join the words with a single space
    const reversedString = wordsArray.reverse().join(' ');

    return reversedString;
}

// let s = reverse("the sky is blue");
let s = reverse("a good   example");
console.log(s);
