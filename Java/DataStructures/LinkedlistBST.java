class LinkedList {
	static LNode head;
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
}