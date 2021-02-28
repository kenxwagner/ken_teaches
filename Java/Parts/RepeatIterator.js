Create a class called RepeatIterator whose constructor takes an array of integers. These integers represent a series of numbers. For example: If your input array is [3, 1, 2], 
that represents the series of numbers: 3, 3, 3, 1, 2, 2 (notice how each number is repeated that many times). Your iterator should have two instance methods:

next() - Returns the next integer in the series, e.g. the first time it returns 3
hasNext() - Returns a boolean - whether or not there is another element to return.
  const it = new RepeatIterator([3, 1, 2]);
  while (it.hasNext()) {
    console.log(it.next());
  }
  // Prints 3, 3, 3, 1, 2, 2
  
  class RepeatIterator {
  	constructor(RepeatIterator){
    	this.RepeatIterator = RepeatIterator;
      this.index = 0;
      this.counter = 0;
    }
  	//next() will give integer
    // store integer (RepeatIterator[j]) as the counter
    // next integer the next counter
    
    hasNext() {
    	
    }
    
  }