import React from 'react';
import { render } from 'react-dom';

window.onload = () => {
  const node = document.getElementById('app');
  render(<App />, node);
};

const App = () => {
  console.log('hello, world');
  return <>hello, world!</>;
};

export default App;
