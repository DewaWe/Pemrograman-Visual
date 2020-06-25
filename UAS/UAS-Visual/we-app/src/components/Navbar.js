import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Navbar extends React.Component {
    render() {
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
            <Link to="/" class="navbar-brand" href="#">AME.WE</Link>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/About">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Login">Login</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
      )
    }
  }
  
  export default Navbar;