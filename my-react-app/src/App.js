import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Manage from './components/manage';
import Donate from './components/donate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <head>
    <title>Food Management System</title>
  </head>
  <link rel="stylesheet" type="text/css" href="/food.css"></link>
  <body>
  <Navbar/>
  <Router>
      <Switch>
      
    <Route exact path="/"><Home/></Route>
    <Route exact path="/donate"><Donate/></Route>
    <Route path="/manage"><Manage/></Route>
    <Route exact path="/distribute"><Manage/></Route>

      </Switch>
    </Router>
    </body>
    </div>
  );
}

export default App;
