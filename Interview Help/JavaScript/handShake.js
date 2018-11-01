'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    //count the letters in a string
    // if Up gets +1 count   // if Down gets -1 count
    // 0 is start. if count is below 0, it gets a valley count of 1
    // if it rises to 0 or above and goes below 0, valley count gets another count added.
    let seaLevel = 0;
    let currentLevel = 0;
    let valleyCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'U') {
            currentLevel += 1;
            if (currentLevel === 0) {
                valleyCount += 1;
            }
        } else {
            currentLevel -= 1;
        }

    }
    return valleyCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
