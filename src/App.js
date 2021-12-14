import React from 'react';
import Header from './components/Header';
import AlienControl from './components/AlienControl';

function App() {
  return (
    <React.Fragment>
      <div className="container">
      <Header />
        <AlienControl />
      </div>
    </React.Fragment>
  );
}

export default App;