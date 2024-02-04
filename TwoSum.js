function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            console.log(i, j)
            if ((nums[i] + nums[j]) == target) {
                return [i, j]
            }
        }
    }
    return -1;
}

let nums = [2, 7, 11, 15], target = 18;
console.log(twoSum(nums, target))