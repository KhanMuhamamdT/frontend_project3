<<<<<<< HEAD
import React, { useState, useEffect } from "react";

const NavBar = () => {



    return (
        <div>

        </div>
    )
}
export default NavBar;
=======
import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

// import Search from "../Search/Search";

function NavBar() {
  return (
    <nav className="Nav-bar">
      <NavLink exact activeClassName="active" className="Nav-item" to="/">
        <h4>Home</h4>
      </NavLink>
      <NavLink activeClassName="active" className="Nav-item" to="/about">
        <h4>About</h4>
      </NavLink>
      <NavLink activeClassName="active" className="Nav-item" to="/cocktails">
        <h4>Cocktails</h4>
      </NavLink>
      <NavLink activeClassName="active" className="Nav-item" to="/shots">
        <h4>Shots</h4>
      </NavLink>
      {/* <Search searchFunc={searchFunc.searchFunc} /> */}
    </nav>
  );
}

export default NavBar;
>>>>>>> 380494c07e51dbc2d87e4029e7fdc433d0e8dd1f
