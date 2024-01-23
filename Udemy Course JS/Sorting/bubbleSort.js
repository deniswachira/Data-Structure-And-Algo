// O(n^2) time complexity

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        console.log("one pass complete");
        if (noSwaps) break;
    }
    console.log(arr);
}

bubbleSort([7, 4, 5, 6,]);