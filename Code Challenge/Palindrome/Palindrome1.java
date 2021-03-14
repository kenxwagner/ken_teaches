// Is number palindrome?

 

Public class Solution {

                Public bool IsPalindrome(int x) {

                // Special cases: when x < 0, x is not a palindrome.

                //If number ends in 0, then the beginning must have 0. Only 0 satisfies this criteria.

               

                if(x <0 || (x % 10 == 0 && x != 0)) {

                                Return false;

                }

                int revertedNumber = 0;

                while(x > revertedNumber) {

                                revertedNumber = revertedNumber * 10 + x % 10;

                                x /=10;

                }

               

                //middle number is not important

                return x == revertedNumber || x == revertedNumber/10;

}