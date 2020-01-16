import React, { Component } from "react";
import Banner from "./Banner";
import InnerBanner from "./InnerBanner";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <Banner>
        <InnerBanner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </InnerBanner>
      </Banner>
    );
  }
}

export default ErrorPage;
