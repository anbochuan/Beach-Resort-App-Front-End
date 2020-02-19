import React, { Component } from "react";
import Banner from "./Banner";
import InnerBanner from "./InnerBanner";
import Services from "./Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "./FeaturedRooms";
import StyledBanner from "./StyledBanner";
import { FormattedMessage } from "react-intl/lib/index";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner banner="defaultHero">
          <InnerBanner
            title={
              <FormattedMessage
                id="InnerBanner_title"
                defaultMessage="default translation"
                description="Link on react page"
              />
            }
            subtitle={
              <FormattedMessage
                id="InnerBanner_subtitle"
                defaultMessage="default translation"
                description="Link on react page"
              />
            }
          >
            <Link to="/rooms" className="btn-primary">
              <FormattedMessage
                id="our_rooms"
                defaultMessage="default translation"
                description="Link on react page"
              />
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
