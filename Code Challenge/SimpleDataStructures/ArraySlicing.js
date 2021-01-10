

function cutItOut(myArray) {
	
	myArray.slice(startIndex, endIndex); 
// or  myArray.slice(startIndex);
}

//slicing allocates a new array
//and you are copying from original to the new array

//explained further by saving it as a variable

const tailOfArray = myArray.slice(1);