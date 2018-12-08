//Binary Search Tree is a node-based tree structure with at max two children

public Node search(Node root, int key)
{
	//Base Case
	if (root==null || root.key==key)
		return root;
		
	if	(root.key > key)
		return search(root.left, key);
		
	return search(root.right, key);
	
	//Finish
}