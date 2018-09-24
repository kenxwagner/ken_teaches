class Clock extends React.Component {
  constructor() {
    super();
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    this.state = {
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  updateClock(self) {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    self.setState({
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    });
  }
  
  render() {
    return (
      <div>{this.state.hours}:{this.state.minutes}:{this.state.seconds}</div>
    );
  }
  
  componentDidMount() {
    setInterval(this.updateClock, 1000, this);
  }
}
ReactDOM.render(<Clock />, document.getElementById('app'));