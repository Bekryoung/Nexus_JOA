import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class Login extends Component {
    render() {
      return (
        <>
          캐릭터 선택<br/>
          <Link to="lunara">루나라</Link>
        </>
      )
    }
  }
  
  export default Login;