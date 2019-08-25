function Welcome(props) {
	return <h1> Hello, {props.name}</h1>;
}

class Welcome extends React.component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
		}
	}
// another component

function Welcome(props) {
	return <h1>Hello, {props.name} </h1>;
}

const element = <Welcome name="Sara" />;
ReactDom.render(
	element,
	document.getElementById('root')
);

