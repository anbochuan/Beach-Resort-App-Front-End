import React, { Component } from "react";
import loadingGif from "../../public/images/gif/loading-arrow.gif";

class Loading extends Component {
  state = {};
  render() {
    return (
      <div className="loading">
        <h4>rooms data loading...</h4>
        <img src={loadingGif} alt=""></img>
      </div>
    );
  }
}

export default Loading;
