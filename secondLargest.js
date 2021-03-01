function getSecondLargest(nums) {
    nums.sort((a, b) => {
        return b - a;
    });

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[0]) {
            return nums[i];
        }
    }
}


 let first = nums[0]; let second = -1;

for (let i = 0; i < nums.length; i++) {


    if (nums[i] > first) {
        second = first;
        first = nums[i]
    }

    if (nums[i] > second && nums[i] < first) {
        second = nums[i];
    }
}


return second;

