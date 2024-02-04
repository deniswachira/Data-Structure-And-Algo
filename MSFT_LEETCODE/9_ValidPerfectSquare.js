function isPerfectSquare(num) {
    if (num < 0) {
        return false;
    }
    if (num < 2) {
        return true;
    }
    let right = Math.floor(num / 4);
    // while (left <= right) {
    // const mid = Math.floor((left + right) / 2);
    const guess = right * right;
    if (guess === num) {
        return true;
    } else {
        return false;
    }
}

const num = 16;
console.log(`${num} is a perfect square: ${isPerfectSquare(num)}`);
