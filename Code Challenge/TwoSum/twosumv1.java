//Given an array, return indices of the two numbers that add up to the target.

 

//Given array: nums = [2, 7, 11, 15], target = 9.  Answer is to return [0, 1] because 2 + 7 = 9.

 

 

Public int[] twoSum(int[] nums, int target) {

                Map<Integer, Integer> map = new HashMap<>();

                for (int i =  0; I < num.length; i++) {

                                int complement = target – num[i];

                                if (map.containsKey(complement)) {

                                                return new int[] { map.get(complement),  I };

                                }

                                map.put(nums[i], i);

                }

                throw new IllegalArgumentException(“No two sum solution”);

}