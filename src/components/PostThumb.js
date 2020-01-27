import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const PostThumb = props => {
  return (
    <div className="col-md-4 m-2">
      <Link to="/postId" className="post-thumb card mb-4 shadow-sm">
        <img
          className=" card-img-top"
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1907&q=80"
        />
        <div className="card-body">
          <h4 className="card-text">Post Title</h4>
        </div>
      </Link>
    </div>
  );
};
export default PostThumb;
