'use strict';
// In JavaScript find if string has all unique characters
// ASCII or Unicode?
// This will be for ASCII which has a character limit of 128 total,so limit the string to 128

function isItUnique(str) {
	var i, theChar;
	
	var stringlength = str.length;
	if (stringlength > 127 { 
		return false;
		}
	
	for (i = 0; i < stringlength; i++) {
		theChar = str[i];
		if (str.indexOf(theChar, i + 1) > -1) {
			return false;
		}
	}
	
		return true;
	}
	
	console.log("car");
	