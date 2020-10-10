import React from 'react'
import '../Profile.css';

const Profile = ()=>{
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
                <h1 className="profile-user-name">Faraz Ansar</h1>                
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
              <div className="gallery-item" tabIndex={0}>
                <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />
                <div className="gallery-item-info">
                  <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 56</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 2</li>
                  </ul>
                </div>
              </div>
              <div className="gallery-item" tabIndex={0}>
                <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt="" />
                <div className="gallery-item-info">
                  <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 89</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 5</li>
                  </ul>
                </div>
              </div>
              <div className="gallery-item" tabIndex={0}>
                <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt="" />
                <div className="gallery-item-type">
                  <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true" />
                </div>
                <div className="gallery-item-info">
                  <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 42</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 1</li>
                  </ul>
                </div>
              </div>
              <div className="gallery-item" tabIndex={0}>
                <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="gallery-image" alt="" />
                <div className="gallery-item-type">
                  <span className="visually-hidden">Video</span><i className="fas fa-video" aria-hidden="true" />
                </div>
                <div className="gallery-item-info">
                  <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 38</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 0</li>
                  </ul>
                </div>
              </div>                                     
            </div>            
            <div className="loader" />
          </div>          
        </main>
      </div>

        </div>
)

}

export default Profile;
