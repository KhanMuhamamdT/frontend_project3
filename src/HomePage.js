import React from "react";
import { Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import Gallery from "./Gallery";
import Footer from "./Footer";


const HomePage = () => {


    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" component={NavBar} />
                <Route exact path="/HomePage" component={Gallery} />
                <Route path="/" component={Footer} />
            </Switch>

            <h1>This is a project-3</h1>
            <h3>Arty, Aldo, Shahzad and Muhammad</h3>
            <h3>AASM</h3>
            <h3>(Pronouce Awesome)</h3>
        </div>
    )
}
export default HomePage;