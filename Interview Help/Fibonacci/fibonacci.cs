using System;

namespace InterviewFibonacci.Program
{
	class FibonacciSeries
		{
			static void Main(string)[] args)
			{
				int num1=0, num2=1, num3, range;
				Console.WriteLine("Enter range : ");
				range=Convert.ToInt32(Console.ReadLine());
				Console.Write(num1 + " ");
				Console.Write(num2 + " ");
				while(range>1)
				{
					num3 = num1 + num2;
					Console.Write(num3 + " ");
					num1 = num2;
					num2 = num3;
					range--;
				}
				Console.ReadLine();
			}
		}
}