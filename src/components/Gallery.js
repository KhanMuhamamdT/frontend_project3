import React from "react";
import "../App.css";
import PostThumb from "./PostThumb";

const Gallery = props => {
  if (props.getPost.length === 0) {
    return <div>Loading......</div>;
  }
  const post = props.getPost.map(item => {
    return <PostThumb post={item} />;
  });

  return <div className="row">{post}</div>;
};
export default Gallery;
