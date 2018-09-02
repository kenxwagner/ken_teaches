using System;
using System.Text;

class Program
{
    static void Main()
    {
        StringBuilder builder = new StringBuilder();
        // To append to StringBuilder.
        for (int i = 0; i < 10; i++)
        {
            builder.Append(i).Append(" then ");
        }
        Console.WriteLine(builder);
    }
}
