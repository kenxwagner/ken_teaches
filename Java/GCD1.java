import java.util.Scanner;

// Greatest Common Denominator in an array
public class FindGCDinArray {
   public static void main(String args[]) {
      int a, b;
      int[] someArray = {25, 125, 625};
      int size = someArray.length;
      int result = someArray[0];
      int i = 1;
      while(i<size)
      {
         if(someArray[i]%result==0)
         {
            i++;
         } else {
            result = someArray[i]%result;
            i++;
         }
      }
      System.out.println("Greatest Common Denominator is "+result);
   }
}
