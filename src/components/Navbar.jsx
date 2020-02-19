import React, { Component } from "react";
import logo from "../../public/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl/lib/index";
import { RoomContext } from "../Context";
class Navbar extends Component {
  state = {
    isOpen: false
  };
  static contextType = RoomContext;
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const contextObj = this.context;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort"></img>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon"></FaAlignRight>
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">
                <FormattedMessage
                  id="home"
                  defaultMessage="default translation"
                  description="Link on react page"
                />
              </Link>
            </li>
            <li>
              <Link to="/rooms">
                <FormattedMessage
                  id="room"
                  defaultMessage="default translation"
                  description="Link on react page"
                />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FormattedMessage
                  id="login"
                  defaultMessage="default translation"
                  description="Link on react page"
                />
              </Link>
            </li>
          </ul>
          <button onClick={() => contextObj.onChangeLanguage("English")}>
            English
          </button>
          <button onClick={() => contextObj.onChangeLanguage("Chinese")}>
            中文
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
