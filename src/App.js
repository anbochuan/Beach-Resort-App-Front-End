import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import ErrorPage from "./components/ErrorPage";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* import all the components */}
        <Navbar></Navbar> {/* Navbar should display on all the pages */}
        <Switch>
          {/* from Switch component, we start to group our routes */}
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/rooms" component={Rooms}></Route>
          <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
