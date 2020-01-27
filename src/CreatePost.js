<<<<<<< HEAD
import React, { useState } from "react";

const CreatePost = (props) => {
const [title, setTitle] = useState("");
const [url, setURL] = useState("");
const [description, setDescription] = useState("");

const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
};

const handleURL = (e) => {
    e.preventDefault();
    setURL(e.target.value);
};

const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
};



    return (
        <div className="container">
            <h1>Posting Something</h1>
        
        <form onSubmit={props.handleSubmit}>
            <label htmlform="title">Title:</label>
            <input className="input" value={title} type="text" onChange={e => handleTitle(e)}></input>
          
            <label htmlform="url">URL:</label>
            <input className="input" value={url} type="text" onChange={e => handleURL(e)}></input>
            
            <label htmlform="Description">Description:</label>
            <input className="input" value={description} type="text" onChange={e => handleDescription(e)}></input> 

            <button className="btn">SUBMIT</button>  
        </form>
        </div>
    )
}
export default CreatePost;
=======
import React from "react";

const CreatePost = () => {
  return <div>Create Post Page</div>;
};

export default CreatePost;
>>>>>>> cdd4cdba7af7491d43e51a1a59e2e266ca071646
