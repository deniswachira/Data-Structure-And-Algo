function valid_anagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("String length are not equal")
        return false;
    }
    const obj = {}
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment , otherwise set to 1
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }
    console.log(obj)
    for (let i = 0; i < str2.length; i++) {
        let letter = str1[i]
        // can't find letter or letter is 0 then it's not an anagram
        if (!obj[letter]) {
            return false
        } else {
            obj[letter] -= 1
        }
    }
    console.log(true)
    return true;
}

valid_anagram("cinema", "iceman")