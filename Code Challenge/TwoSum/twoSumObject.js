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
// other

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const preVal = {};
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        const needVal = target - curNum;
        const index2 = preVal[needVal];
        if (index2 != null) {
            return [index2, i]
        }else {
            preVal[curNum] = i;
        }
    }
};