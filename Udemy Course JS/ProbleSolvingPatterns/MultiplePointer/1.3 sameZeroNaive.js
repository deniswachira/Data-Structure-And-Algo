// Write a function  called sumZero which accepts a sorted arrary of integers. The fuction
//  shld find the first pair when the sum =0, Return an array that both values that sum to 
// zero oe undefined if a pair doesnt not exit.

function sumZero(arr) {
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                console.log([arr[i], arr[i]])
                return [arr[i], arr[i]]
            }
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])