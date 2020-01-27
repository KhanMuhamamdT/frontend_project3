import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav">
      <h4 className="nav-item nav-link">Not Pinterest</h4>
      <NavLink exact className="nav-item nav-link" to="/user">
        {" "}
        <img
          className="avatar"
          src="https://www.telegraph.co.uk/content/dam/men/2016/05/24/Untitled-1-xlarge_trans++qVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg"
        />{" "}
        User
      </NavLink>
      <NavLink exact className="nav-item nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-item nav-link" to="/random">
        Random
      </NavLink>
      <NavLink className="nav-item nav-link" to="/create-post">
        Post
      </NavLink>
      <NavLink className="nav-item nav-link" to="/create-user">
        SignUp
      </NavLink>
      {/* <Search searchFunc={searchFunc.searchFunc} /> */}
    </nav>
  );
}

export default NavBar;
