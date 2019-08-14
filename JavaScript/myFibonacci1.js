//Fibonacci 1,1,2,3,5,8,13
function myFibonacci(n){
	if(n<=1)
		return n;
	else
		return myFibonacci(n-1) + myFibonacci(n-2);
		}
		
	myFibonacci(12);