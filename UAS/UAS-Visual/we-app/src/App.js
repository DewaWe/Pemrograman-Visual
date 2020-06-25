import React, {Component, Fragment} from 'react';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
    <div>
      <Navbar />
      <div className="container">
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/login' component={Login}/>
      </div>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
