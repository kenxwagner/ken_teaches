import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>This again</h1>
        <p>Enter your full name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));