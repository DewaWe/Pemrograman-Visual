import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Login extends React.Component {

  render() {
    return (
        <div class="loginbox">
        <img class="avatar"/>
            <h1>Login Here</h1>
            <form>
                <p>Username</p>
                <input type="text" name="" placeholder="Enter Username"/>
                <p>Password</p>
                <input type="password" name="" placeholder="Enter Password"/>
                <input type="submit" name="" value="Login"/>
                <a href="#">Lost your password?</a><br/>
                <a href="#">Don't have an account?</a>
            </form>
        </div>
    );
  }
}

export default Login;