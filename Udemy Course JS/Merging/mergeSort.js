function mergeSort(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr2.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}
// mergeSort([4, 6,], [3, 5, 7, 9, 11])

function sort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = sort(arr.slice(0, mid));
    let right = sort(arr.slice(mid));
    return mergeSort(left, right);
}

sort([4, 6, 3, 5, 7, 9, 11])
