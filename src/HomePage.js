import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePost from "./CreatePost";
import CreateUser from "./CreateUser";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PostDetails from "./PostDetails";
import UserDetails from "./UserDetails";
import UpdateUser from "./components/UpdateUser";

const HomePage = () => {
  const urlUsers = "";
  const urlPosts = "";
  const urlComments = "";
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
 
  const [change, setChange] = useState(false);
 
  const [userID, setUserID] = useState("5e334f250840630004a420be");
  const handlePagechange = () =>{
    setChange (!change)
  }
  //use effect
  //fetch api/posts/ to get posts
  //set posts as state.data
  console.log('Comonent is loading')
  useEffect(() => {
    console.log('Home page useeffect loading')
    fetch("https://notpinterest.herokuapp.com/api/posts")
      .then(res => res.json())
      .then(res => setPosts(res))
      .catch(err => console.log(err));
    fetch("https://notpinterest.herokuapp.com/api/comments")
      .then(res => res.json())
      .then(res => setComments(res))
      .catch(err => console.log(err));
    fetch("https://notpinterest.herokuapp.com/api/users")
      .then(res => res.json())
      .then(res => setUsers(res))
      .catch(err => console.log(err));
  }, []);

  const userIdChange = newID => {
    setUserID(newID);
  };

  //this fetch should bne in UserDetails
  //different fetch call on users page, to get only posts from that user

  return (
    <BrowserRouter className="container">
      <Route path="/" render={props => <NavBar userID={userID} {...props} />} />
      {/* <Route path="/" component={NavBar} /> */}
      <div className="container">
        <Route
          exact
          path="/"
          render={props => <Gallery getPost={posts} {...props} />}
        />
      </div>
      <Route exact path="/create-post" component={CreatePost} />
      <Route exact path="/create-user" component={CreateUser} />

      {/* <Route exact path="/postId" component={PostDetails} /> */}
      <Route
        exact
        path="/posts/:postID"
        render={props => (
          <PostDetails
            comments={comments}
            posts={posts}
            users={users}
            useEffect={useEffect}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/update-user/:userID"
        render={props => (
          <UpdateUser
            userID={userID}
            posts={posts}
            users={users}
            handlePagechange ={handlePagechange}
            userIdChange={userIdChange}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/users/:userID"
        render={props => (
          <UserDetails userID={userID} users={users} posts={posts} />
        )}
      />

      <Footer />
    </BrowserRouter>
  );
};
export default HomePage;
