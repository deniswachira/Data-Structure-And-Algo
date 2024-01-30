function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; arr.length; i++) {
            a = arr[i];
            b = arr[j];
            if ((a + b) === target) {
                return [i, j]
            } else {
                return -1
            }

        }
    }
}
let arr = [2, 7, 11, 15]
let result = twoSum(arr, 9);
console.log(result)