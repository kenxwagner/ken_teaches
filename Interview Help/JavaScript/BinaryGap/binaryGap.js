// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    //read N - Tested
    //convert N to binary using to String
    //save binary sequence as an array
    //read array
    //count 0s count = 0;
    //save largest gap maxCount = 0;
    let binaryNum = N.toString( 2 ),
        gapCount = 0,
        maxGapCount = 0;
    
    for ( let digit of binaryNum ){
        if(digit === '0'){
            gapCount +=1;
        } else {
            maxGapCount = Math.max (maxGapCount, gapCount );
            gapCount = 0;
        }
    }
    
    return maxGapCount;
}
