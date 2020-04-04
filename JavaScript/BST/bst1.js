BinarySearchTree.prototype.contains = function(value)
{ let current = this.root; 
while(current) { if(value === current.value) return true;
 if(value < current.value) current = current.left;
 if(value > current.value) current = current.right;
	} return false;};