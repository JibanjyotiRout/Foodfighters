import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Manage from './components/manage';
import Donate from './components/donate';
import Distribute from './components/distribute';
import About from './components/about';
import Footer from './components/footer';
import Decline from './components/decline';
import Approve from './components/approve';
import Signup from './components/signup';
import View from './components/view';
import Login from './components/login';
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <head>
    <title>Food Management System</title>
  </head>
  <link rel="stylesheet" type="text/css" href="/food.css"></link>
  <body>
  
  <Router>
  <Navbar/>
 
      <Switch>
      
    <Route exact path="/"><Home/></Route>
    <Route exact path="/donate"><Donate/></Route>
    <Route path="/manage"><Manage/></Route>
    <Route path="/about"><About/></Route>
    <Route path="/approve"><Approve/></Route>
    <Route path="/decline"><Decline/></Route>
    <Route path="/login"><Login/></Route>
    <Route path="/signup"><Signup/></Route>
    <Route exact path="/distribute"><Distribute/></Route>

      </Switch>
    </Router>
    </body>
    </>
  );
}

export default App;
