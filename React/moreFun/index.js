import React from 'react';
import ReactDOM from 'react-dom';

class Greet extends React.Component {
  render() {
    return <h1>Welcome to React!</h1>;
  }
}

ReactDOM.render(<Greet />, document.getElementById('root'));

