import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {/* <Route path="/" component={NavBar} /> */}
        <Route exact path="/HomePage" component={Gallery} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>

      <h1>This is a project-3</h1>
      <h3>Arty, Aldo, Shahzad and Muhammad</h3>
      <h3>AASM</h3>
      <h3>(Pronouce Awesome)</h3>
      <Footer />
    </BrowserRouter>
  );
};
export default HomePage;
