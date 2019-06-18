//The Problem:
// Write a program that prints the numbers from 1 to 100.
// For multiples of three (3) print “Fizz”, for multiples of five (3) print “Buzz”,
// For multiples of both three and five print “FizzBuzz”
// 3 "Fizz" 6 "Fizz" 5 10 15 "Buzz"
// 15 30 FizzBuzz
// javascript:
function fizzBuzz(){
  for(let i = 1; i <=100; i++){
    if(i%5 === 0 && i%3 === 0){
      console.log("FizzBuzz");
    } elseif (i%3 ===0) {
      console.log("Fizz");
    } elseif (i%5 ===0) {
      console.log("Buzz");
    } else {
        console.log(i);
    }
  }
}
