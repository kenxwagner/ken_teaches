class LinkedList {
/* head node of link list */
    static LNode head; 
      
    /* Link list Node */
    class LNode  
    { 
        int data; 
        LNode next, prev; 
  
        LNode(int d)  
        { 
            data = d; 
            next = prev = null; 
        } 
    } 
      
    /* A Binary Tree Node */
    class TNode  
    { 
        int data; 
        TNode left, right; 
  
        TNode(int d)  
        { 
            data = d; 
            left = right = null; 
        } 
    } 
  