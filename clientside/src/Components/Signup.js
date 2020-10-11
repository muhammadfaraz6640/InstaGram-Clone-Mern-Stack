import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom';
import Toast from 'materialize-css';
const Signup = ()=>{
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const history = useHistory()
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            Toast.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email,                
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                Toast.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                Toast.toast({html:data.message,classes:"#43a047 green darken-1"})     
                history.push('/signin')           
            }
         }).catch(err=>{
             console.log(err)
         })
    }
return(
    <div className="main-login-card">
    <div className="card my-login-card">
        <h2 className="brand-logo">InstaGram</h2>
        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder="Password" onChange={(e)=>setPasword(e.target.value)}/>
        <button class="btn waves-effect waves-light #80cbc4 teal lighten-3" type="submit" name="action" onClick={()=>PostData()}>Signup</button>
        <h3><Link to="/signin">Already Have an Account?</Link></h3>
    </div>
</div>
)

}

export default Signup;
