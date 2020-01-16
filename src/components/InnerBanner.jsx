import React, { Component } from "react";

class InnerBanner extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    // console.log("inner banner props: ", this.props);
    return (
      <div className="banner">
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        <div></div>
        {this.props.children}
      </div>
    );
  }
}

export default InnerBanner;
