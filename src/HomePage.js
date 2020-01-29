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
  

//useeffect
  //fetch api/posts/ to get posts
//set posts as state.data

useEffect(() => {
  fetch('http://localhost:8080/api/posts/')
  .then(res => res.json())
  .then(res => setPosts(res))
  .catch(err => console.log(err))
  fetch(`http://localhost:8080/api/comments/`)
  .then(res => res.json())
  .then(res => setComments(res))
  .catch(err => console.log(err))
},[])

//this fetch should bne in UserDetails
//different fetch call on users page, to get only posts from that user

  // useEffect(() => {
  //   fetch(urlUsers)
  //     .then(res => res.json())
  //     .then(res => setCocktailDrinks(res))
  //     .catch(err => console.log(err));

  //   fetch(urlPosts)
  //     .then(res1 => res1.json())
  //     .then(res1 => setShotDrinks(res1))
  //     .catch(err1 => console.log(err1));
  // }, []);

  return (
    <BrowserRouter className="container">
      <NavBar />
      {/* <Route path="/" component={NavBar} /> */}
      <div className="row">
      <Route exact path="/" render={ (props) => <Gallery getPost={posts} {...props} />} />
      </div>
      <Route exact path="/create-post" component={CreatePost} />
      <Route exact path="/create-user" component={CreateUser} />
      {/* <Route exact path="/postId" component={PostDetails} /> */}
      <Route path='/:title' render={ (props) => <PostDetails getPost={posts} {...props} /> } />
      <Route exact path="/userId" component={UserDetails} />
      <Footer />
    </BrowserRouter>
  );
};
export default HomePage;
