/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numObject = {};
    for (var i = 0; i < nums.length; i++) {
        let thisNum = nums[i];
        numObject[thisNum] = i;
    }
    for (var i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            return [i, numObject[diff]];
        }
    }
}