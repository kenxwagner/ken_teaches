function fizzBuzz(number){
	for (var i = 0; i < number; i++) {
		if(i % 3 === 0 && i % 5 ===0) {
			console.log("FizzBuzz");
		}
		else if(i % 3 === 0) {
			console.log("Fizz");
		} 
		else if(i % 5 ===0) {
			console.log("Buzz");
		}
		else {
			cosole.log("Value of i is " + i);
		}
	}
}
var test = 55;
fizzBuzz(test);
