import React from 'react';
import Counter from './Counter';
// import './App.css';

import MyHeader from './MyHeader';

function App() {

  const number=5;

  return (
    <div>
      <MyHeader />
      <Counter/>
    </div>
  );
}

export default App;
