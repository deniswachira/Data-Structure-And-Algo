//  Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elemts in the array.
// eg maxSubArraySum([1,2,5,2,8,,5],2) // 10

function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) console.log(null)
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
        console.log(maxSum, tempSum)
    }
    console.log(maxSum)
}


maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)