import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="Nav-bar">
      <NavLink exact activeClassName="active" className="Nav-item" to="/">
        <h4>Home</h4>
      </NavLink>
      <NavLink activeClassName="active" className="Nav-item" to="/random">
        <h4>Random</h4>
      </NavLink>
      <NavLink activeClassName="active" className="Nav-item" to="/create-post">
        <h4>Post</h4>
      </NavLink>
      <NavLink activeClassName="active" className="Nav-item" to="/create-user">
        <h4>SignUp</h4>
      </NavLink>
      {/* <Search searchFunc={searchFunc.searchFunc} /> */}
    </nav>
  );
}

export default NavBar;
