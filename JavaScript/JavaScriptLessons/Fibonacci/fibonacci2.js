// 1 1  2 3 5 8 13 21 34 55 89 ...
// Output: 1 1 3 5 13 21 55 89 ...

function fib(): number[] {
  const results = [];
  // if less 2 return 1
  // if (number <= 2) return 1; // <-    // make sure adjust loop count
  // a , b , c
  	let a = 1, b = 1;
  	//for(let i = 3; i <= number[i].length; i++) {
    while(results.length < 20){
      
      let c = a + b;
      a = b; //
      b = c;

      if(b%2 !== 0) {
      	results.push(b);
      }
    }
 	   
  return results;
}
// 
const result = fib();
console.log(result.length);
// 20 odd
