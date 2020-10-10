import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';


const NavBar = ()=>{
return(
<nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo left">InstaGram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/Create">Create New Post</Link></li>
      </ul>
    </div>
  </nav>
)

}

export default NavBar;
