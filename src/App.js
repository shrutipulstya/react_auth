import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import Nav from './components/navigation.component';
import Login from './components/login.component';
import SignUp from './components/signUp.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signUp" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
