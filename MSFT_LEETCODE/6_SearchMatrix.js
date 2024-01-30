function searchMatrix(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;
    console.log(right);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midElement = matrix[Math.floor(mid / cols)][mid % cols];

        if (midElement === target) {
            return true;
        } else if (midElement < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;

    //Using flat function
    // let arr = matrix.flat()
    // return arr.indexOf(target) == -1 ? false : true
}

// Example usage:
const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
const target = 3;
const result = searchMatrix(matrix, target);
console.log(result);

// console.log(1 % 4);
