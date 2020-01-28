import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <div className="main-title nav-item nav-link ">Not Pinterest</div>
      <NavLink exact className="nav-item nav-link" to="/user">
        <div className="avatar">
          <img
            className="avatar-img"
            src="https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-xlarge_trans++qVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
            alt=""
          />
        </div>
      </NavLink>
      <NavLink exact className="nav-item nav-link align-middle" to="/">
        Home
      </NavLink>
      <NavLink className="nav-item nav-link" to="/random">
        Random
      </NavLink>
      <NavLink className="nav-item nav-link" to="/create-post">
        Create a Post
      </NavLink>
      <NavLink className="nav-item nav-link" to="/create-user">
        Create a User
      </NavLink>
      {/* <Search searchFunc={searchFunc.searchFunc} /> */}
    </nav>
  );
}

export default NavBar;
