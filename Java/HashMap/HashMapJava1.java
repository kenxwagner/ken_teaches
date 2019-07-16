//Lets create a HashMap in Java

import java.util.HashMap;
import java.util.Map;

public class CreateHashMapExample {
	public static void main(String[] args) {
		//Create the HashMap
		Map<String, Integer> numberMapping = new HashMap<>();
		
		//Add key-value pairs
		numberMapping.put("Uno", 1);
		numberMapping.put("Dos", 2);
		numberMapping.put("Tres", 3);
		numberMapping.put("Cuatro", 4);
		
		//Add a new key-value pair only if the key does not exist
		numberMapping.putIfAbsent("Cinco", 5);
		
		System.out.printLn(numberMapping);
	}
	
}