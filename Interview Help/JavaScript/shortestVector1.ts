function findShortest(vectors) {
  // Write the code that goes here
}

var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
var shortest = findShortest(vectors);
console.log(shortest);


function findShortest(vectors) {
    //loop through vectors
  for (var i = 0; i < vectors.length; i++){
    var newArray = vectors[i];

    for (var j = 0; j < newArray.length; j++) {
      var vLength = Math.pow(newArray[j], 2);
      return vLength;
    }
    var temp = vlength
  }

}

var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
var shortest = findShortest(vectors);
console.log(shortest);
