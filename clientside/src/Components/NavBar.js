import React,{useContext} from 'react'
import '../App.css';
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../App'


const NavBar = ()=>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
const renderList = ()=>{
  if(state){
    return[
      <>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/Create">Create New Post</Link></li>
        <li >
             <button className="#c62828 red darken-3"
            onClick={()=>{
              window.localStorage.clear()
              dispatch({type:"CLEAR"})
              history.push('/signin')
            }}
            style={{color:"wheat"}}
            >
                Logout
            </button>
            </li>
      </>
    ]
  }
    else{
      return[
        <>
          <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        </>
      ]
    }
  }
return(
<nav>
    <div className="nav-wrapper">
      <Link to={state?"/":"/signin"} className="brand-logo left">InstaGram</Link>
      <ul id="nav-mobile" className="right">
        {renderList()}        
        
      </ul>
    </div>
  </nav>
)

}

export default NavBar;
