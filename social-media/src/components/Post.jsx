
import React from 'react'

import { RiDeleteBin5Line } from "react-icons/ri";

function Post({post}) {
  return (
    <div className="card post-card">
  
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <RiDeleteBin5Line />
    
  </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag)=>(<span className="badge text-bg-primary hastag">{tag}</span>))}
    <div className="alert alert-dark reactions" role="alert">
  This post have been reacted by {post.reactions} people
</div>
    </div>
</div>
  )
}

export default Post