//Create a class component
import React from 'react';
import ReactDOM from 'react-dom';

class Season extends React.component {
    render() {
        return <h2>Happy Season!</h2>;
    }
}
ReactDOM.render(<Season />, document.getElementById('root'));


//Create a function component
//import is skipped since it is already taken care of.
//import React from 'react';
//import ReactDOM from 'react-dom';

function Season() {
  return <h2>Ummm, I am also a Season!</h2>;
}

ReactDOM.render(<Car />, document.getElementById('root2'));
