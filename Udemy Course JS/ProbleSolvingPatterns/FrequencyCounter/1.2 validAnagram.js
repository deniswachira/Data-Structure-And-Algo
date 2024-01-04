//Given 2 string, write a function to determine if the second string is an anagram of the first.
// An anagram is a word or phrase form by rearranging the letters of another such as "cinema" formed from "iceman"


function valid_anagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("String length are not equal")
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    console.log(true)
}

valid_anagram("cinema", "iceman")
