// Write a function  called sumZero which accepts a sorted arrary of integers. The fuction
//  shld find the first pair when the sum =0, Return an array that both values that sum to 
// zero oe undefined if a pair doesnt not exit.
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
sumZero([-4, -3, -2, -1, 0, 1, 2, 5])