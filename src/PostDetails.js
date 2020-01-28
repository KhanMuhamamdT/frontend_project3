import React from "react";

import "./App.css";

function PostDetails() {
  return (
    <div className="container">
      <div className="custom-post-container shadow-lg p-3 my-3">
        <h1>Post Title</h1>
        <div className="custom-post-photo">
          Photo
          <img
            className="custom-post-photo-img"
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
        </div>
        <div>Posted By</div>
        <div>Comments</div>
      </div>
    </div>
  );
}

export default PostDetails;
