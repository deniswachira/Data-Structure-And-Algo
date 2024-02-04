function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicates
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) {
                    left++; // Skip duplicates
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--; // Skip duplicates
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}



// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result);
