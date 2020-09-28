import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Counter() { 
	const [counter, setCounter] = useState(0);
	
	function increment() {
		setCounter(counter+1);
	}
	
	return <div>
	<p>{counter}</p>
	<button onClick={increment}>Increment</button>
	</div>;
}

const el = <Counter />;
ReactDOM.render(
el,
document.getElementById('root')
);