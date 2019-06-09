import java.util.Scanner;
class SummingTheNSeries
{
    public static int summingSeries(long n)
    {
        return (int)(((n % 1000000007) * (n % 1000000007)) % 1000000007);
    }
    public static void main(String[] args)
    {
        byte testCases;
        long n;
        Scanner sc = new Scanner(System.in);
        testCases = sc.nextByte();
        while(testCases-- > 0)
        {
            n = sc.nextLong();
            System.out.println(summingSeries(n));
        }
    }
}