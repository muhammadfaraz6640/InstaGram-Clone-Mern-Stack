import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';


const NavBar = ()=>{
return(
<nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo left">InstaGram</a>
      <ul id="nav-mobile" className="right">
        <li><a href="/signin">Login</a></li>
        <li><a href="/signup">SignUp</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </div>
  <