import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function PostDetails(props) {
  // const [postDetail, setPostDetail] = useState([]);

  const handleDelete = () => {
    fetch(
      `http://notpinterest.herokuapp.com/api/posts/${props.match.params.postID}`,
      {
        method: "DELETE"
      }
    ).then(res => res.json());
  };

  if (props.posts.length === 0) {
    return <div>Loading . . .</div>;
  }

  var currentPost = {};
  props.posts.map(item => {
    if (item._id === props.match.params.postID) {
      currentPost = item;
      return currentPost;
    }
    return null;
  });
  var currentComment = {};
  props.comments.map(item => {
    if (item.posts === props.match.params.postID) {
      currentComment = item;
      return currentComment;
    }
    return null;
  });
  var currentUser = {};
  props.users.map(user => {
    user.myPosts.map(post => {
      if (post === props.match.params.postID) {
        currentUser = user;
        return currentUser;
      }
      return null;
    });
    return currentUser;
  });

  return (
    <div className="container">
      <div className="custom-post-container shadow-lg p-3 my-3">
        <h1>{currentPost.title}</h1>
        <div className="custom-post-photo">
          <img className="custom-post-photo-img" src={currentPost.url} alt="" />
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
        <div className="d-flex justify-content-end">
          <Link to="/">
            <button
              onClick={handleDelete}
              type="button"
              className="btn btn-danger"
            >
              DELETE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
