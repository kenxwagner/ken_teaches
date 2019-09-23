import React from 'react';
import ReactDOM from 'react-dom';

class House extends React.Component {
	render() {
		return <h2>Look at me, I am a house!</h2>;
	}
}

ReactDOM.render(<House />, document.getElementById('root'));