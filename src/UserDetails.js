import React from "react";

import "./App.css";

function UserDetails() {
  return (
    <div className="container">
      <div className="custom-user-container shadow-lg p-3 my-3">
        <h1>Name</h1>
        <div className="custom-user-photo">
          User Photo
          <img
            className="custom-post-photo-img"
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
        </div>
        <div>Posts</div>
      </div>
    </div>
  );
}

export default UserDetails;
