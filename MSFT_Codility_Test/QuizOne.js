function solution(A, B) {
    // Find the maximum possible side length using binary search
    let low = 0;
    let high = Math.max(A, B);
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // Check if we can create 4 sticks of length 'mid'
        if (mid <= A && mid <= B && (A + B - 4 * mid) >= 0) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    if (high > 0 && (A - high) + (B - high) >= high) {
        return high;
    } else {
        return 0;
    }
}
