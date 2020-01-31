import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";

const CreateUser = props => {
  const [name, setName] = useState("");
  const [picURL, setPicURL] = useState("");
  const [about, setAbout] = useState("");
  // const [id, setID] = useState("");
  // const [newUser, setNewUser] = useState({});

  const handleName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlePicURL = e => {
    e.preventDefault();
    setPicURL(e.target.value);
  };

  const handleAbout = e => {
    e.preventDefault();
    setAbout(e.target.value);
  };

  const handleSubmit = () => {
    fetch("https://notpinterest.herokuapp.com/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        description: about,
        profilePicURL: picURL
      })
    });
  };

  return (
    <div className="container">
      <div className="shadow-lg p-3 create-post-container my-3">
        <h1>Create your profile</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Name: </span>
            </div>
            <input
              className="form-control"
              id="name-input"
              value={name}
              type="text"
              onChange={e => handleName(e)}
            ></input>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Pic URL: </span>
            </div>
            <input
              className="form-control"
              value={picURL}
              type="text"
              onChange={e => handlePicURL(e)}
            ></input>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text descr-box">About you: </span>
            </div>
            <textarea
              className="form-control"
              value={about}
              type="text"
              onChange={e => handleAbout(e)}
            ></textarea>
          </div>
          <Link to={`/`}>
            <button
              type="button"
              className="btn btn-success my-3"
              onClick={handleSubmit}
            >
              CREATE
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default CreateUser;
