class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    items: [
      { text: "Learn JavaScript", done: false },
        { text: "Learn React", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
      ]
    }
  }
 
  handleChange(index, isChecked) {
  var items = this.state.items;
    items[index].done = isChecked;
    this.setState({items: items});
  }
  
  moveUp(index) {
  	//Code to move up here
    var items = this.state.items;
    var temp = this.state.items[index]
    // to remove from an array:
    items.splice(index, 1);
    
    // to add to an array
    items.splice(index-1, 0, temp);
    this.setState({items:items});
 
  }
  
  
  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ol>
        {this.state.items.map((item, index) => (
          <li key={index}>
              
            <label>
            <div>
              <button onClick = {(e) => this.moveUp(index)}>^</button>
              </div>

            <input type="checkbox" checked={item.done} onChange={(e) => this.handleChange(index, e.target.checked)} />
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"))