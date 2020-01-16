import React, { Component } from "react";
import Banner from "./Banner";
import InnerBanner from "./InnerBanner";
import Services from "./Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "./FeaturedRooms";
import StyledBanner from "./StyledBanner";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner banner="defaultHero">
          <InnerBanner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              our rooms
            </Link>
          </InnerBanner>
        </Banner>
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
      </React.Fragment>
    );
  }
}

export default Home;
