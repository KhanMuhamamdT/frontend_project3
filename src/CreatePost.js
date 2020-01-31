import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const CreatePost = props => {
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const [info, setInfo] = useState("");

  const handleTitle = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleURL = e => {
    e.preventDefault();
    setURL(e.target.value);
  };

  const handleInfo = e => {
    e.preventDefault();
    setInfo(e.target.value);
  };
  const handleSubmit = () => {
    console.log("i am handle submit");

    fetch("https://notpinterest.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        url: url,
        info: info
      })
    });
  };

  return (
    <div className="container ">
      <div className="shadow-lg p-3 create-post-container my-3">
        <h1>Create a post...</h1>

        <form className="column">
          <div className="input-group my-3">
            <div className="input-group-prepend">
              {/* <label htmlform="title">Title:</label> */}
              <span className="input-group-text" htmlform="title">
                Title:{" "}
              </span>
            </div>
            <input
              value={title}
              type="text"
              className="form-control"
              onChange={e => handleTitle(e)}
            ></input>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              {/* <label htmlform="url">URL:</label> */}
              <span className="input-group-text" htmlform="url">
                URL:{" "}
              </span>
            </div>
            <input
              value={url}
              type="text"
              className="form-control"
              onChange={e => handleURL(e)}
            ></input>
          </div>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              {/* <label htmlform="Description">Description:</label> */}
              <span
                className="input-group-text descr-box"
                htmlform="description"
              >
                info:{" "}
              </span>
            </div>
            <textarea
              value={info}
              type="text"
              className="form-control"
              onChange={e => handleInfo(e)}
            ></textarea>
          </div>

          <Link to="/">
            {" "}
            <button
              type="button"
              className="btn btn-success my-3"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
