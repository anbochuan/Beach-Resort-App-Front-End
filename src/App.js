import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Rooms from "./components/Rooms";
import SingleRoom from "./components/SingleRoom";
import ErrorPage from "./components/ErrorPage";
import { Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl/lib/index";
import { RoomContext } from "./Context";

import zh_CN from "./langConfig/messages_zh";
import en_US from "./langConfig/messages_en";
// import { RoomContext } from "../Context";

let messages = {};
messages["en-US"] = en_US;
messages["zh-CN"] = zh_CN;

class App extends Component {
  // 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
  // 这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
  static contextType = RoomContext;

  render() {
    const contextObj = this.context;
    return (
      <IntlProvider
        locale={contextObj.locale}
        messages={messages[contextObj.language]}
      >
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
      </IntlProvider>
    );
  }
}

export default App;
