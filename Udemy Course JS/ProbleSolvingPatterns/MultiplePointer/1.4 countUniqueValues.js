//  implement a function called countUniquesValues which accepts a sorted array and counts the uniques values in the array
// .There can ve -ve numbers in the arrays but it will always be sorted.

function countUniqueValues(arr) {
    if (arr.length === 0) { return 0; } else {
        var i = 0;
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] != arr[j])
                i++;
            arr[i] = arr[j];
        }
        console.log(i, j)
    }
    console.log(i + 1)
}
countUniqueValues([1, 1, 1, 2, 3, 4, 5, 5, 5,])