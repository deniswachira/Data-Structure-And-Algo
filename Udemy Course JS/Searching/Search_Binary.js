function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        }
        else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) {
        console.log("index is: " + middle + " \n The value is: " + arr[middle]);
    } else {
        console.log("Not Found")
    }

}

binarySearch([2, 5, 6, 9, 13, 15, 28, 33, 34, 45, 66, 70, 75], 33)