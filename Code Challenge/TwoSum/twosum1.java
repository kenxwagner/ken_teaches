//Given an array of integers, return unique indices of two numbers adding up to the target

//

//Given nums = [2, 7, 11, 15], target = 9

//

//nums[0] + nums[1] = 2 + 7 = 9, so return [ 0,1 ].

 

public int[] twoSum(int[] nums, int target) {

                map<Integer, Integer> map = new HashMap<>();

                for (int I = 0; i < nums.length; i++) {
					int complement = target – nums[i];

                        if (map.containsKey(complement)) {

							return new int[] { map.get (complement), i };

				        }

                        map.put(nums[i], i);

                }

                throw new IllegalArgumentException(“No two sum solution found”);

}