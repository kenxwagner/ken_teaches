function fizzBuzz(n) {
	if (n % 15 === 0) {
		return "FizzBuzz";}
	if (n % 5 === 0) {
		return "Buzz";}
	if (n % 3 === 0) {
		return "Fizz";}
	for (let i = 1; i <= 100; i++) {
		console.log(fizzy(i));
	}
	
}