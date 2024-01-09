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