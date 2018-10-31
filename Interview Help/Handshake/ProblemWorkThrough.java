
//pattern Handshake = N-1, N*3/2, N

class HandShake  
{ 
    // Maximum number of handshakes using derived formula. 
    static int maxHandshake(int n) 
    { 
        return (n * (n - 1)) / 2; 
    } 
      
      
   
    public static void main (String[] args) 
    { 
        int n = 10; 
        System.out.println( maxHandshake(n)); 
    } 
} 