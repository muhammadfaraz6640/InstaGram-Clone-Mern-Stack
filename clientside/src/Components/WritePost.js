import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom';
import Toast from 'materialize-css';

const WritePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")  //url from cloudinary
    useEffect(()=>{
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                ImageUrl : url,                
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                Toast.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                Toast.toast({html: "Successfully created the post" ,classes:"#43a047 green darken-1"})     
                history.push('/')           
            }
         }).catch(err=>{
             console.log(err)
         })
    },[url])  //dependency array
    
   const PostImage = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","InstaGram-Clone")
    data.append("cloud_name","dcr5vgw3f")
    fetch("https://api.cloudinary.com/v1_1/dcr5vgw3f/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setUrl(data.url)
    // console.log(data.url)
    })
    .catch(err=>{
        console.log(err)
    })

    
}

return(
    <div className="card input-filed"
    style={{
        margin:"30px auto",
        maxWidth:"500px",
        padding:"20px",
        textAlign:"center"
    }}
    >
        <input 
        type="text"
         placeholder="title"  
         value={title}
         onChange={(e)=>setTitle(e.target.value)}                
         />
        <input
         type="text"
          placeholder="body" 
          value={body}
          onChange={(e)=>setBody(e.target.value)}         
          />
        <div className="file-field input-field">
         <div className="btn #80cbc4 teal lighten-3">
             <span>Uplaod Image</span>
             <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
         </div>
         <div className="file-path-wrapper">
             <input className="file-path validate" type="text" />
         </div>
         </div>
         <button className="btn waves-effect waves-light #80cbc4 teal lighten-3"  onClick={()=>PostImage()}>
             Submit post
         </button>

    </div>
)

}

export default WritePost;
