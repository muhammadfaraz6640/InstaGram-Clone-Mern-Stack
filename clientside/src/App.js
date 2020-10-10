import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '../src/Components/NavBar';
import Profile from '../src/Components/Profile';
import Signin from '../src/Components/Signin';
import Home from '../src/Components/Home';
import Signup from '../src/Components/Signup';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Route exact path="/">
        <Home />
    </Route>
    <Route path="/signin">
        <Signin />
    </Route>
    <Route path="/profile">
        <Profile />
    </Route>
    <Route path="/signup">
        <Signup />
    </Route>
    </BrowserRouter>
  );
}

export default App;
