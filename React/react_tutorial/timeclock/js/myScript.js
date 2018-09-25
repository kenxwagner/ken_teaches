class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1> What time is it?</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);