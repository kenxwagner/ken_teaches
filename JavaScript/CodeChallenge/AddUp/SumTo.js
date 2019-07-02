function sumTo(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
		}
		return sum;
	}
	
	alert( sumTo(100));
	//or alert doesn't work use:
	//console.log( sumTo(100));
	
function sumTo(n) {
	let sum=0;
	for (let i = 0; i <= n; i++) {
		sum += i;
		}
		return sum;
	}
	console.log(sumTo(1000));
	
	//next option

function sumToRecurs(n) {
	if (n ==1) return 1;
	return n + sumTo( n - 1 );
}

alert( sumToRecurs(100));
	//or alert doesn't work use:
	//console.log( sumTo(100));
	

function sumToFormula(n) {
	return n * ( n + 1 )/ 2;
	}

alert( sumToFormula(100));
	//or alert doesn't work use:
	//console.log( sumTo(100));
	
