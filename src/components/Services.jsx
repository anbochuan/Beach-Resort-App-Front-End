import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { FormattedMessage } from "react-intl/lib/index";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: (
          <FormattedMessage
            id="Service_subtitle1"
            defaultMessage="default translation"
            description="Link on react page"
          />
        ),
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim ratione debitis explicabo sequi consequuntur quia aliquid, assumenda nesciunt dicta laborum perspiciatis deserunt soluta blanditiis harum ipsa doloribus saepe. Deleniti?"
      },
      {
        icon: <FaHiking />,
        title: (
          <FormattedMessage
            id="Service_subtitle2"
            defaultMessage="default translation"
            description="Link on react page"
          />
        ),
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim ratione debitis explicabo sequi consequuntur quia aliquid, assumenda nesciunt dicta laborum perspiciatis deserunt soluta blanditiis harum ipsa doloribus saepe. Deleniti?"
      },
      {
        icon: <FaShuttleVan />,
        title: (
          <FormattedMessage
            id="Service_subtitle3"
            defaultMessage="default translation"
            description="Link on react page"
          />
        ),
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim ratione debitis explicabo sequi consequuntur quia aliquid, assumenda nesciunt dicta laborum perspiciatis deserunt soluta blanditiis harum ipsa doloribus saepe. Deleniti?"
      },
      {
        icon: <FaBeer />,
        title: (
          <FormattedMessage
            id="Service_subtitle4"
            defaultMessage="default translation"
            description="Link on react page"
          />
        ),
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim ratione debitis explicabo sequi consequuntur quia aliquid, assumenda nesciunt dicta laborum perspiciatis deserunt soluta blanditiis harum ipsa doloribus saepe. Deleniti?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title
          title={
            <FormattedMessage
              id="Service_title"
              defaultMessage="default translation"
              description="Link on react page"
            />
          }
        ></Title>
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
