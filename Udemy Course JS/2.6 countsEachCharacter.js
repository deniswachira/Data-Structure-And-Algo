function countChr(str) {
    obj = {};
    for (i = 0; i < str.length; i++) {
        var char = str[i];
        if (obj[char] > 0) {
            obj[char]++;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}

countChr("hello"); // {h:1, e:1, l:2, o:1}