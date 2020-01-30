import React from "react";

import "./App.css";

const UserDetails = props => {
  var thisUser = {};
  props.users.map(item => {
    if (props.userID == item._id) {
      thisUser = item;
    }
  });

  if (props.users.length === 0) {
    return <div>Loading . . .</div>;
  }

  console.log(thisUser.myPosts[0]);

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
          <ul>
            {thisUser.myPosts[0] ? <div></div> : <li>{thisUser.myPosts[0]}</li>}
            {thisUser.myPosts[1] ? <div></div> : <li>{thisUser.myPosts[1]}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
