import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../App'

const Home = ()=>{
        const [data,setData] = useState([])
        useEffect(()=>{
                fetch('/allposts',{
                    headers:{
                        "Authorization":"Bearer "+localStorage.getItem("jwt")
                    }
                }).then(res=>res.json())
                .then(result=>{
                //     console.log(result.posts)
                    setData(result.posts)
                })
             },[])
         
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
                                <i className="material-icons" style={{color:"red",marginTop:"10px"}}>favorite</i>
                                        <h4>{item.title}</h4>
                                        <h6>{item.body}</h6>
                                <input type="text" placeholder="add a comment" />  
                                </div>
                        </div>
                       )
                })
        }
        </div>
)

}

export default Home;
