import React, { Component } from "react";
class Banner extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return <header className={this.props.banner}>{this.props.children}</header>;
  }
}
Banner.defaultProps = {
  banner: "defaultHero"
};

export default Banner;
