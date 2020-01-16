import React, { Component } from "react";
import Banner from "./Banner";
import InnerBanner from "./InnerBanner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import RoomsContainer from "./RoomsContainer";

class Rooms extends Component {
  static contextType = RoomContext;
  render() {
    const contextObj = this.context;
    console.log("render contextObj: ", contextObj);
    return (
      <React.Fragment>
        <Banner banner="roomsHero">
          <InnerBanner title="our rooms">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </InnerBanner>
        </Banner>
        <RoomsContainer></RoomsContainer>
      </React.Fragment>
    );
  }
}

export default Rooms;
