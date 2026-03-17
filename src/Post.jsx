import React, { useEffect, useState } from "react";

function Post() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log(err));

    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div  >

      {posts.length > 0 && users.length > 0 ? (

        posts.map((post) => {

          const user = users.find(u => u.id == post.userId);

          return (
<div className=" justify-content-center">
            <div key={post.id} style={{border:"1px solid #ccc", margin:"20px", padding:"10px", width:"400px"}}>
              <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                <img className="pimage" src={user?.profilePic} alt="profile"
                 
                  style={{borderRadius:"50%"}}/>

                <p>{user?.username}</p>

              </div>
              <div>
                <img className="image" src={post.image} alt="post" width="100%" />
              </div>
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <p><b>{post.likes}likes</b></p>
                <p style={{marginTop:"10px"}}>{post.caption}</p>
              </div>
              
</div>
            </div>

          );

        })

      ) : (

        <div>Loading Posts...</div>

      )}

    </div>
  );
}

export default Post;