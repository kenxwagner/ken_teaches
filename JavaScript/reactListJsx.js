import React from 'react';
import ReactDOM from 'react-dom';

const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
  
  <h2>Unordered List without Bullets</h2>

<ul style="list-style-type:none;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  
<h2>Unordered List with Square Bullets</h2>

<ul style="list-style-type:square;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<h2>Unordered List with Circle Bullets</h2>

<ul style="list-style-type:circle;">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>  

</body>
</html>

  
  
);

ReactDOM.render(myelement, document.getElementById('root'));