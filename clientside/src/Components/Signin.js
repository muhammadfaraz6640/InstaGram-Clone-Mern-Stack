import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../App'
import {Link,useHistory} from 'react-router-dom';
import Toast from 'materialize-css';

const Signin = ()=>{
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            Toast.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({                
                email,
                password,                                
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                Toast.toast({html: data.error,classes:"#c62828 red darken-3"})
                console.log(data.error)
            }
            else{
                localStorage.setItem("jwt",data.token)  //you can check local storage in console->application
                localStorage.setItem("user",JSON.stringify(data.user))  //local storage can only contain strings
                dispatch({type:"USER",payload:data.user})
                Toast.toast({html: "SignedIn successfully" ,classes:"#43a047 green darken-1"})     
                history.push('/')           
            }
         }).catch(err=>{
             console.log(err)
         })
    }
return(
    <div className="main-login-card">
        <div className="card my-login-card">
            <h2 className="brand-logo">InstaGram</h2>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e)=>setPasword(e.target.value)}/>
            <button class="btn waves-effect waves-light #80cbc4 teal lighten-3" type="submit" name="action" onClick={()=>PostData()}>Login</button>
            <h3><Link to="/signup">Do Not Have an Account?</Link></h3>
        </div>
    </div>
)

}

export default Signin;
