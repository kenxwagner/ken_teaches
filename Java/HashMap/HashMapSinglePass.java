//you are given and array of integers and then a target number 
//the target number is the sum of two integers in the num array.
//your goal is to find those numbers that add up to "target"


//you are given the array and the target
public int[] twoSum(int[] nums, int target) {
//now create a Map or a HashMap.
    Map<Integer, Integer> map = new HashMap<>();
	//add items to the HashMap using a loop
    for (int i = 0; i < nums.length; i++) {
		//add more parts to the HashMap
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    throw new IllegalArgumentException("No two sum solution");
}

