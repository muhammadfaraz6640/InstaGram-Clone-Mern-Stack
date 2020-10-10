import React from 'react'
import {Link} from 'react-router-dom';

const Signin = ()=>{
return(
    <div className="main-login-card">
        <div className="card my-login-card">
            <h2 className="brand-logo">InstaGram</h2>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button class="btn waves-effect waves-light #80cbc4 teal lighten-3" type="submit" name="action">Login</button>
            <h3><Link to="/signup">Do Not Have an Account?</Link></h3>
        </div>
    </div>
)

}

export default Signin;
