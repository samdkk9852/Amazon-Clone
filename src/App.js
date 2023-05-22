import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';

function App() {
  return (
     // BEM
    <div className="app">   
      {/* Header */}
      <Header/>
      
      {/* Home */}
      <Home/>
    </div>
  );
}

export default App;
