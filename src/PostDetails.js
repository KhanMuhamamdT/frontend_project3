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

  if (props.posts.length === 0) {
    return <div>Loading . . .</div>;
  }

  var currentPost = [];
  props.posts.map(item => {
    if (item._id == props.match.params.postID) {
      currentPost = item;
    }
  });
  var currentComment = [];
  props.comments.map(item => {
    if (item.posts == props.match.params.postID) {
      currentComment = item;
    }
  });
  var currentUser = [];
  props.users.map(user => {
    user.myPosts.map(x => {
      if (x == props.match.params.postID) {
        currentUser = user;
      }
    });
  });

  return (
    <div className="container">
      <div className="custom-post-container shadow-lg p-3 my-3">
        <h1>{currentPost.title}</h1>
        <div className="custom-post-photo">
          <img className="custom-post-photo-img" src={currentPost.url} />
        </div>
        <div>
          <strong>User:</strong> {currentUser.name}
        </div>
        <div>
          <strong>Info:</strong> {currentPost.info}
        </div>
        <div>
          <strong>Comments:</strong> {currentComment.body}
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
