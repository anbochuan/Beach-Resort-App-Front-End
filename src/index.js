import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context";

import { addLocaleData } from "react-intl/lib/index";
import zh from "react-intl/locale-data/zh";
import en from "react-intl/locale-data/en";

// import { RoomContext } from "../Context";

addLocaleData([...en, ...zh]);

ReactDOM.render(
  <RoomProvider>
    {/* the application has access to all the routers that we created */}
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
