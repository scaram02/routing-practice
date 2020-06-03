import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
         
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
