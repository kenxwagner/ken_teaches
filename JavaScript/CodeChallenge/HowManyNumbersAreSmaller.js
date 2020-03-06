/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortedArray = Array.from(nums).sort((num1, num2) => num2 - num1);
    const map = new Map(sortedArray.map((num, index) => [num, nums.length - index - 1]));
    return nums.map(num => map.get(num));
    
}