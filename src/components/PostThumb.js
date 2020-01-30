import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const PostThumb = props => {
  return (
    <div className="col-md-4 mt-4">
      <Link
        to={`/posts/${props.post._id}`}
        className="post-thumb card mb-4 shadow-sm"
      >
        <img className=" card-img-top" src={props.post.url} />
        <div className="card-body">
          <h4 className="card-text">{props.post.title}</h4>
        </div>
      </Link>
    </div>
  );
};
export default PostThumb;
