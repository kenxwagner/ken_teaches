/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sums = [];
    var hashTable = {};
    
    for (var i = 0; i < nums.length; i++) {
        var sum_minus_element = target - nums[i];
        
        if (hashTable[sum_minus_element.toString()] !== undefined) {
            sums.push([nums[i], sum_minus_element]);
        }
        hashTable[nums[i].toString()] = nums[i];
    }
    return sums;
};