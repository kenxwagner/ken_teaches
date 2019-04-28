import java.util.Scanner;

public class FibonacciCalculator {
	
	public static void main(String args[]) {
		
		//input
		System.out.println("Please enter a number to stop near for our Fibonacci series: ");
		int number = new Scanner(System.in).nextInt();
		
		System.out.println("Fibonacci series up to " + number + " numbers: ");
		//print number series
		for(int i = 1; i <= number; i++){
			System.out.print(fibonacci2(i) + " ");
		}
		
	}
	public static int fibonacci(int number){
		if (number == 1 || number ==2) {
			return 1;
		}
		return fibonacci(number-1) + fibonacci(number, -2);
	}
	
}
