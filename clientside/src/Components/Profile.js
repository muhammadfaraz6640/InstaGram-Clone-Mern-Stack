import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../App'

const Profile = ()=>{
  const [Image,setImage] = useState([])
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
          fetch('/mypost',{
              headers:{
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              }
          }).then(res=>res.json())
          .then(result=>{              
              setImage(result.myposts)
          })
       },[])
return(
        <div>              
      <div>
        <header>
          <div className="container">
            <div className="profile">
              <div className="profile-image">
                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
              </div>
              <div className="profile-user-settings">
                <h1 className="profile-user-name">{state?state.name:"loading profile"}</h1>                
              </div>
              <div className="profile-stats">
                <ul>
                  <li><span className="profile-stat-count">164</span> posts</li>
                  <li><span className="profile-stat-count">188</span> followers</li>
                  <li><span className="profile-stat-count">206</span> following</li>
                </ul>
              </div>              
            </div>            
          </div>          
        </header>
        <main>
          <div className="container">
            <div className="gallery">
            {
               Image.map(item=>{
                 return(
              <div className="gallery-item" tabIndex={0}>
                <img key={item._id} src={item.photo} className="gallery-image" alt="" />
                <div className="gallery-item-info">                  
                </div>
              </div> 
                 )
                  })
                }                                                                
            </div>            
            <div className="loader" />
          </div>          
        </main>
      </div>

        </div>
)

}

export default Profile;
