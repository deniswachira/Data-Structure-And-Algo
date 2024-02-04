function trap(height) {

    //Two pointers
    let n = height.length - 1;
    if (n <= 2) return 0;
    let left = 0; let right = n;
    let leftMax = 0; let rightMax = 0;
    let trappedWater = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                //calculate the left pole and update with the highest value
                leftMax = height[left];
            } else {
                trappedWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trappedWater += rightMax - height[right];
            }
            right--;
        }
    }
    return trappedWater;

    ///  DynamicProgamming
    // if (height == null || height.length === 0) return 0;

    // let res = 0;
    // let l = height.length;
    // let lMax = {};
    // let rMax = {};

    // lMax[0] = height[0];
    // for (let i = 1; i < l; i++) {
    //     lMax[i] = Math.max(height[i], lMax[i - 1]);
    // }

    // rMax[l - 1] = height[l - 1];
    // for (let i = l - 2; i >= 0; i--) {
    //     rMax[i] = Math.max(height[i], rMax[i + 1]);
    // }

    // for (let i = 0; i < height.length; i++) {
    //     res += Math.min(lMax[i], rMax[i]) - height[i];
    // }

    // return res;
}

// Example usage
// let height = [4, 2, 0, 3, 2, 5];
let rainwater = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(`Total rainwater trapped: ${rainwater}`);