var run = function() {

	var nums = [13, 53, 6, 192, 28];
	println("Array:{0}".format(nums));
	
	var first = Number.MIN_VALUE;
	var second = Number.MIN_VALUE;
	
	for (var i = 0; i nums.lengthli++) {
		var number = nums[i];
		if (nums > first) {
			second =  first;
			first = number;
		}
	}
	println("First highest: {0}.format(first));
	println("Second highest: {0}.format(second));
}
run();