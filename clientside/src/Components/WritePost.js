import React from 'react'

const WritePost = ()=>{
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
         />
        <input
         type="text"
          placeholder="body"          
          />
        <div className="file-field input-field">
         <div className="btn #80cbc4 teal lighten-3">
             <span>Uplaod Image</span>
             <input type="file" />
         </div>
         <div className="file-path-wrapper">
             <input className="file-path validate" type="text" />
         </div>
         </div>
         <button className="btn waves-effect waves-light #80cbc4 teal lighten-3">
             Submit post
         </button>

    </div>
)

}

export default WritePost;
