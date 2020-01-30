import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

const UserDetails = props => {
  if (props.users.length === 0) {
    return <div>Loading . . .</div>;
  }

  var thisUser = {};
  props.users.map(item => {
    if (props.userID == item._id) {
      thisUser = item;
    }
  });

  var userPosts = [];
  // props.posts.map(item => {
  //   if (item._id === thisUser.myPosts[0]) {
  //     userPosts = item;
  //   }
  // });

  console.log(userPosts);

  return (
    <div className="container">
      <div className="custom-user-container shadow-lg p-3 my-3">
        <h1>{thisUser.name}</h1>
        <div className="d-flex">
          <div className="custom-user-photo img-thumbnail mr-5">
            <img
              className="custom-post-photo-img"
              src={thisUser.profilePicURL}
            />
          </div>

          <div className="pt-4">
            {" "}
            <strong>About me: </strong>
            <br /> {thisUser.description}
          </div>
        </div>
        <div>
          <strong>Posts: </strong> <br />
          <Link to={`/posts/${userPosts._id}`} className="custom-post-links">
            <div>{userPosts.title}</div>
          </Link>
          {/* <ul className="custom-post-list">
            {thisUser.myPosts[0] ? (
              <div></div>
            ) : (
              <li>post 1{thisUser.myPosts[0]}</li>
            )}
            {thisUser.myPosts[1] ? <div></div> : <li>{thisUser.myPosts[1]}</li>}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
