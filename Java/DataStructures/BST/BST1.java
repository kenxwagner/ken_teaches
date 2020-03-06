public class BinaryTree {

    public static void main(String[] args){


    }

}

class Node {

    int Key;
    String name;

    Node leftChild;
    Node rightChild;

    Nocde(int key, String name){

        this.Key = key;

        this.name = name;


    }

    public String toString() {

        return name + " has a key " + key;
    }

}