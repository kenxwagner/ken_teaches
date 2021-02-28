class Solution {
    public int numJewelsInStones(String J, String S) {
			HashSet<Character> jewels = new HashSet <Character>();
			for(char c: J.toCharArray()) {
				jewels.add(c);
			}
			
			int numberOfJewels = 0;
			for(char c: S.toCharArray()) {
				if(jewels.contains(c)) {
					numberOfJewels++;
				} 
			}
		return numberOfJewels;
    }
}

//runtime O(n)