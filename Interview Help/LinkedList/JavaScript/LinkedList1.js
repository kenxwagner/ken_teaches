/* Let's talk about Linked List
We need two constructors: Node and SinglyList.
Node parts:
data - stores a value.
next - points to the next node.

SinglyList parts:
_length - retrieves the number of nodes in a list.
head - assigns a node as the head of a list.
add(value) - adds a node to a list.
searchNodeAt(position) - searches for a node at n-position in the list.
remove(position) - removes a node from a list.
*/
//create a constructor named "Node" and then create a constructor named
//"SinglyList"

function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}
