import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="section-title">
        <h4>{this.props.title}</h4>
        <div></div>
      </div>
    );
  }
}

export default Title;
