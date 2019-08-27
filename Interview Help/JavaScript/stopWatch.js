function startStopwatch(callback, interval) {
  // Write the code that goes here
}

function callback(counter) {
  console.log(counter);
  return counter < 5;
}

// Expected: 1, 2, 3, 4, 5 with 50ms interval.
startStopwatch(callback, 50);
