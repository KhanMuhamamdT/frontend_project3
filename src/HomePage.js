import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePost from "./CreatePost";
import CreateUser from "./CreateUser";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PostDetails from "./PostDetails";
import UserDetails from "./UserDetails";

const HomePage = () => {
  const urlUsers = "";
  const urlPosts = "";
  const urlComments = "";
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [userID, setUserID] = useState("5e331dee3e90e9432fd67a3d");
  //use effect
  //fetch api/posts/ to get posts
  //set posts as state.data

  useEffect(() => {
    fetch("http://localhost:8080/api/posts/")
      .then(res => res.json())
      .then(res => setPosts(res))
      .catch(err => console.log(err));
    fetch(`http://localhost:8080/api/comments/`)
      .then(res => res.json())
      .then(res => setComments(res))
      .catch(err => console.log(err));
    fetch("http://localhost:8080/api/users/")
      .then(res => res.json())
      .then(res => setUsers(res))
      .catch(err => console.log(err));
  }, []);

  //this fetch should bne in UserDetails
  //different fetch call on users page, to get only posts from that user

  return (
    <BrowserRouter className="container">
      <NavBar />
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
