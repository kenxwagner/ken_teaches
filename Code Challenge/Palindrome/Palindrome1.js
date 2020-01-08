function palindrome(text) {

let charArray text.toLowerCase().split('');

let result = charArray.every((letter, index) => {
	return letter === charArray[charArray.length - index - 1];
});

return result
}