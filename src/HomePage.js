import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePost from "./CreatePost";
import CreateUser from "./CreateUser";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <BrowserRouter className="container">
      <NavBar />
      {/* <Route path="/" component={NavBar} /> */}
      <div className="row">
        <Route exact path="/" component={Gallery} />
      </div>

      <Route exact path="/create-post" component={CreatePost} />
      <Route exact path="/create-user" component={CreateUser} />

      {/* <h1>This is a project-3</h1>
      <h3>Arty, Aldo, Shahzad and Muhammad</h3>
      <h3>AASM</h3>
      <h3>(Pronouce Awesome)</h3> */}
      <Footer />
    </BrowserRouter>
  );
};
export default HomePage;
