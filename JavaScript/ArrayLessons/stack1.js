//Daily data structure build
//Language = Javascript
//Call Stack =  Time: 0(n)
//				Space:  Worst case if valid: 0(n/2) = 0(n) because if n=6, stack holds max of 3.
//						Worst if invalid: 0(n) because if if n=6, stack holds max of 6.

var stack = [];
stack.push(1)
stack.push(2,3);
print(stack.pop());
print(stack.length);