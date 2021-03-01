import java.util.Arrays;

public class HashFunction {

	String[] theArray;
	int arraySize;
	int itemsInArray=0;
	
	
	public static void main(String[] args) {
	
	
	}
	
	HashFunction(int size){
	
		arraySize = size;
		theArray = new String[size];
		Arrays.fill(theArray, "-1");
	}