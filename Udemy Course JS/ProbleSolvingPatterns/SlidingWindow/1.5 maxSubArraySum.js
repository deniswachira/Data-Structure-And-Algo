//  Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elemts in the array.
// eg maxSubArraySum([1,2,5,2,8,,5],2) // 10

function maxSubArraySum(arr, num) {
    if (num > arr.length) { console.log("Num is greater than array length") } else {
        var max = -Infinity;
        for (let i = 0; i < arr.length - num + 1; i++) {
            temp = 0;
            for (let j = 0; j < num; j++) {
                temp += arr[i + j]
            }
            if (temp > max) {
                max = temp;
            } console.log(temp, max)
        }
        console.log(max)
    }
}

maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 10)