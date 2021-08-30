import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import Nav from './components/navigation.component';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Home/>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
