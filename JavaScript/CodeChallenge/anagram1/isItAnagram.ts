//check for anagram

function = isItAnagram(str1, str2) {
	
	//test to make sure the strings are the same length
	if (str1.length !== str2.length) {
		return false;
	}
	
	let sortTheString1 = str1.split('').sort().join('');
	let sortTheString2 = str2.split('').sort().join('');
	
	return (sortTheString1 === sortTheString2);
	
	}
	
	console.log(isItAnagram('rat', 'tar'));
	console.log(isItAnagram('desserts', 'stressed'));
	console.log(isItAnagram('cat', 'tat'));
	console.log(isItAnagram('yo', 'yoo'));
	