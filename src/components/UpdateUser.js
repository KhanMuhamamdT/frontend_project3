import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

const parser = require("body-parser");

const UpdateUser = props => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  




  

  const handleName = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleAbout = e => {
    e.preventDefault();
    setAbout(e.target.value);
  };

  //var newUser = [];
//   fetch('https://example.com/profile', {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
  

   const handleUpdate = () => {
     fetch(`http://localhost:8080/api/users/${initialID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: initialName,
        description: initialAbout
      })
    }).then(res => {
      res.json();
      console.log(res);
    });
     //console.log();
};

let initialName = ""
let initialAbout = ""
let initialID = ""

  if(props.users.length > 0){
    initialName = props.users[0].name
    initialAbout = props.users[0].description
    initialID = props.users[0]._id
    console.log(initialAbout)


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
              //value={name}
              defaultValue={initialName}
              type="text"
              onChange={e => handleName(e)}
            ></input>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              {/* <label htmlform="Description">About you...</label> */}
              <span className="input-group-text descr-box">About you: </span>
            </div>
            <textarea
              className="form-control"
              //value={about}
              defaultValue={initialAbout}
              type="text"
              onChange={e => handleAbout(e)}
            ></textarea>
          </div>
          {/* <Link to={`/users/${newUser._id}`}> */}
          <Link to={`/{:userID}`}>
            <button
              type="button"
              className="btn btn-success my-3"
              onClick={handleUpdate}
            >
              UPDATE
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
  }
  return (<div>Loading.......</div>);
};
export default UpdateUser;