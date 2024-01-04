// Given a sorted array of Integer, write a 
// function called search that accepts a value and returns 
// the index where the value passed to the function is located. 
// If the value passed not found return -1

function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            console.log(null)
            
        }else{
            console.log(i)
        }
    }
}

search([1, 2, 3, 4, 5, 6], 4)