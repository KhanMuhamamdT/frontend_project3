import React, { useState } from "react";

import "./CreatePost.css";

const CreatePost = props => {
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleURL = e => {
    e.preventDefault();
    setURL(e.target.value);
  };

  const handleDescription = e => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  return (
    <div className="container ">
      <div className="shadow-lg p-3 create-post-container my-3">
        <h1>Create a post...</h1>

        <form onSubmit={props.handleSubmit} className="column">
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
                Description:{" "}
              </span>
            </div>
            <textarea
              value={description}
              type="text"
              className="form-control"
              onChange={e => handleDescription(e)}
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
export default CreatePost;
