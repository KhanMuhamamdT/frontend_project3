import React, { useState } from "react";

import "./CreateUser.css";

const CreateUser = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");

  const handleName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleAbout = e => {
    e.preventDefault();
    setAbout(e.target.value);
  };

  return (
    <div className="container">
      <div className="shadow-lg p-3 create-post-container my-3">
        <h1>Create your profile</h1>
        <form onSubmit={props.handleSubmit}>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              {/* <label htmlform="title">Name:</label> */}
              <span className="input-group-text">Name: </span>
            </div>
            <input
              className="form-control"
              value={name}
              type="text"
              onChange={e => handleName(e)}
            ></input>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              {/* <label htmlform="url">Email:</label> */}
              <span className="input-group-text">Email: </span>
            </div>
            <input
              className="form-control"
              value={email}
              type="text"
              onChange={e => handleEmail(e)}
            ></input>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              {/* <label htmlform="Description">About you...</label> */}
              <span className="input-group-text descr-box">About you: </span>
            </div>
            <textarea
              className="form-control"
              value={about}
              type="text"
              onChange={e => handleAbout(e)}
            ></textarea>
          </div>
          <button type="button" className="btn btn-success my-3">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
export default CreateUser;
