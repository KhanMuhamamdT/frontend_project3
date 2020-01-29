import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import PostThumb from "./PostThumb";
import { BrowserRouter, Route } from "react-router-dom";
import PostDetails from "../PostDetails";

const Gallery = props => {
  if (props.getPost.length === 0){
    return <div>Loading......</div>
  }
  const post = props.getPost.map(item => {
    //console.log(item.title)
    return (<div>
      <PostThumb post = {item} />
      <BrowserRouter>
        <Route exact path={item.title} render={(props) => <PostDetails getPost={item} {...props} /> } /> 
      </BrowserRouter>
      </div>) 
  })

  return (
    <div>
      {post}
    </div>
  );
};
export default Gallery;
