import React, { useState } from "react";

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
      <h1>Create your profile</h1>

      <form onSubmit={props.handleSubmit}>
        <label htmlform="title">Name:</label>
        <input
          className="input"
          value={name}
          type="text"
          onChange={e => handleName(e)}
        ></input>

        <label htmlform="url">Email:</label>
        <input
          className="input"
          value={email}
          type="text"
          onChange={e => handleEmail(e)}
        ></input>

        <label htmlform="Description">About you...</label>
        <input
          className="input"
          value={about}
          type="text"
          onChange={e => handleAbout(e)}
        ></input>

        <button className="btn">SUBMIT</button>
      </form>
    </div>
  );
};
export default CreateUser;
