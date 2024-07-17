import React from 'react';
import './App.css';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import First1 from './First1';
import Second1 from './Second1';
import Third1 from './Third1';
import Fourth1 from './Fourth1';
import Student from './Student';
import Student1 from './Student1';
import Display from './Display';

function App() {
  const studentProps = {
    name: 'Sushan Parlapally ',
    address: 'Seminary Hills Nagpur',
    scores: [95, 88, 92]
  };

  const sayHello = () => {
    alert('Hello');
  };

  const sayBye = () => {
    alert('Bye');
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <First />
      <Second />
      <Third />
      <Fourth />
      <First1 />
      <Second1 />
      <Third1 />
      <Fourth1 />
      <Student {...studentProps} />
      <Student1 {...studentProps} />
      <Display name={studentProps.name} address={studentProps.address} />
      <button onClick={sayHello}>Say Hello</button>
      <button onClick={sayBye}>Say Bye</button>
    </div>
  );
}

export default App;
