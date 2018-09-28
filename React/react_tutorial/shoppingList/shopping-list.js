class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
class ShoppingList extends React.Component {
	render() {
		return (
		<div className = "fruit-list">
		<h1>Fruits to Buy for {this.props.name}</h1>
		<ul>
			<li>Banana</li>
			<li>Grapes</li>
			<li>Strawberries</li>
			</ul>
			</div>
		);
		
	}
	
}