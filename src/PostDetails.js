import React, { useEffect, useState } from "react";

import "./App.css";

function PostDetails(props) {
  // console.log("this is props", props)
  const [postDetail, setPostDetail] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:8080/api/posts/${props.match.params.postID}`)
  //     .then(res => res.JSON())
  //     .then(res => setPostDetail(res))
  //     .catch(err => console.log(err));
  // });

  if (props.getPost.length === 0) {
    return <div>Loading . . .</div>;
  }

  var x = [];
  props.getPost.map(item => {
    if (item._id == props.match.params.postID) {
      x = item;
    }
  });
var currentComment = []
  props.getComment.map(item => {
    if (item.posts == props.match.params.postID) {
      currentComment = item;
    }
  });
  return (
    <div className="container">
      <div className="custom-post-container shadow-lg p-3 my-3">
        <h1>{x.title}</h1>
        <div className="custom-post-photo">
          <img
            className="custom-post-photo-img"
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
        </div>
        <div></div>
        <div>{currentComment.body}</div>
      </div>
    </div>
  );
}

export default PostDetails;
