
class FoodList extends React.Component {
  render() {
    return (
      <div className="food-list">
        <header className="food-list-header">
          <img src={logo} className="food-list-logo" alt="logo" />
          <p>
            Edit <code>src/FoodList.js</code> and save to reload.
          </p>
          <a
            className="food-list-link"
            href="https://foonetwork.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
