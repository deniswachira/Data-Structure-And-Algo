function signFunc(nums) {
    let countNegatives = 0;
    let hasZero = false;

    // nums.forEach(num => {
    //     if (num < 0) {
    //         countNegatives++;
    //     } else if (num === 0) {
    //         hasZero = true;
    //     }
    // });
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) ++countNegatives
        if (nums[i] === 0) hasZero = true;
    }

    if (hasZero) {
        return 0;
    } else if (countNegatives % 2 === 0) {
        return 1;
    } else {
        return -1;
    }
}

// Example usage:
const nums = [2, -3, 7, -10, -4];
const result = signFunc(nums);
console.log(result);
