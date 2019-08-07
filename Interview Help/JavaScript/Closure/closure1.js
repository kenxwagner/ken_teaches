//JavaScript
// What is closure?

/*
A closure is created when an inner function tries to access the scope chain of its out function (the  variables outside of the immediate lexical scope).
This means the inner function can access the outer function's variables.
*/

function toGreet() {
	name = 'John Q Public';
	return function () {
		console.log('Hi ' + name);
		}
	}
	var toGreetLetter = toGreet();
	toGreetLetter();