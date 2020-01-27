import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Gallery = props => {
  return (
    // <Link to={`/post/${props.posts.ObjectId}`} className="">
    <Link to="/postId">
      {/* <img className="" src={props.posts.postURL} alt="" /> */}
      <div>image</div>
      <div className="">
        {/* <h4>{props.posts.title}</h4> */}
        <h4>Post Title</h4>
      </div>
    </Link>
  );
};
export default Gallery;
