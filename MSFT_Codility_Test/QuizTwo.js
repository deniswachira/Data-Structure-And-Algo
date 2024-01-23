function solution(A, B) {
    // Implement your solution here
    const lengA = A.length;
    // Initialize a 2D array to store the maximum value on each path
    const maxValues = Array.from({ length: 2 }, () => new Array(lengA).fill(0));
    // Fill the first column
    maxValues[0][0] = A[0];
    maxValues[1][0] = Math.max(A[0], B[0]);

    // Fill the remaining cells
    for (let i = 1; i < lengA; i++) {
        // Update the values in the upper row
        maxValues[0][i] = Math.max(maxValues[0][i - 1], A[i]);

        // Update the values in the lower row
        maxValues[1][i] = Math.min(
            Math.max(maxValues[0][i], B[i]),
            Math.max(maxValues[1][i - 1], B[i])
        );
    }

    return maxValues[1][lengA - 1];
}

// A = [3, 4, 6], B = [6, 5, 4];
// const result = solution(A, B);
// console.log(result);

// A = [1, 2, 1, 1, 1, 4], B = [11, 1, 1, 3, 1, 11]
// const result = solution(A, B);
// console.log(result);

A = [-5, -1, -3], B = [1 - 5, 5, -2]
const result = solution(A, B);
console.log(result);