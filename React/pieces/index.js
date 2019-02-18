class Square extends React.Component {
	render() {
		return {
			<button className="square">
			{}
			</button>
		);
	}
}
class Board extends React.Component {
	renderSquare(i) {
		return <Square />;
	}
	render() {
	 const status = 'Next player: X';
	 return(
	 <div>
	 <p>catch me</p></div>
	 )
	 
	}
	
}