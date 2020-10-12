import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../App'

const Home = ()=>{
        const [data,setData] = useState([])
        const [comment,setComment] = useState("")
        const {state,dispatch} = useContext(UserContext)
        useEffect(()=>{
                fetch('/allposts',{
                    headers:{
                        "Authorization":"Bearer "+localStorage.getItem("jwt")
                    }
                }).then(res=>res.json())
                .then(result=>{
                    console.log(result.posts)
                    setData(result.posts)
                })
             },[])

             const likePost = (id)=>{  //post id comes from request
                fetch('/like',{
                    method:"put",  //update
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":"Bearer "+localStorage.getItem("jwt")
                    },
                    body:JSON.stringify({
                        pid:id
                    })
                }).then(res=>res.json())
                .then(result=>{
                           console.log(result)
                  const updatedData = data.map(item=>{
                      if(item._id==result._id){
                          return result
                      }else{
                          return item
                      }
                  })
                  setData(updatedData)
                  console.log(result)
                }).catch(err=>{
                    console.log(err)
                })
          }             

          const unlike = (id)=>{  //post id comes from request
                fetch('/unlike',{
                    method:"put",  //update
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":"Bearer "+localStorage.getItem("jwt")
                    },
                    body:JSON.stringify({
                        pid:id
                    })
                }).then(res=>res.json())
                .then(result=>{
                           console.log(result)
                  const updatedData = data.map(item=>{
                      if(item._id==result._id){
                          return result
                      }else{
                          return item
                      }
                  })
                  setData(updatedData)
                }).catch(err=>{
                    console.log(err)
                })
          }     
          const Comment = (text,postId)=>{
                fetch('/comment',{
                    method:"put",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":"Bearer "+localStorage.getItem("jwt")
                    },
                    body:JSON.stringify({
                        pid:postId,
                        text
                    })
                }).then(res=>res.json())
                .then(result=>{
                    console.log(result)
                    const updatedData = data.map(item=>{
                      if(item._id==result._id){
                          return result
                      }else{
                          return item
                      }
                   })
                  setData(updatedData)
                }).catch(err=>{
                    console.log(err)
                })
          }
return(
        <div className="home">
                  {
               data.map(item=>{
                       return(
                        <div className="home-card">
                                <h4>{item.postedBy.name}</h4>
                                <div className="card-image">
                                        <img src={item.photo} width="500" height="200"/>
                                </div>
                                <div className="card-content">
                                <i className="material-icons" style={{color:"red",marginTop:"10px",cursor:"pointer"}}>favorite</i>                                
                                {item.likes.includes(state._id)
                                ?
                                <i className="material-icons" style={{color:"black",marginTop:"10px",cursor:"pointer"}}
                                onClick={()=>{unlike(item._id)}}
                                >thumb_down</i>
                                :
                                <i className="material-icons" style={{color:"black",marginTop:"10px",cursor:"pointer"}}
                                onClick={()=>{likePost(item._id)}}
                                >thumb_up</i>                                
                                }
                                
                                
                                
                                        <h6>{item.likes.length} Likes</h6>
                                        <h4>{item.title}</h4>
                                        <h6>{item.body}</h6>
                                        <hr />
                                        {
                                    item.comments.map(record=>{
                                        return(
                                        <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
                                        )
                                    })
                                }
                                <input type="text" placeholder="add a comment" onChange={(e)=>setComment(e.target.value)}/>  
                                <button class="btn waves-effect waves-light #80cbc4 teal lighten-3" type="submit" name="action" onClick={()=>Comment(comment,item._id)}>Comment</button>
                                <div>
                                        
                                </div>
                                </div>
                        </div>
                       )
                })
        }
        </div>
)

}

export default Home;
