class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		squares: array(9).fill(null),
		};
	}
	
	renderSquare(i_ {
		return <Square value={i} />;
	}
