import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  return (
     // BEM
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
