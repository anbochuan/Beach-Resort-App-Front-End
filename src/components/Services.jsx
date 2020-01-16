import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim ratione debitis explicabo sequi consequuntur quia aliquid, assumenda nesciunt dicta laborum perspiciatis deserunt soluta blanditiis harum ipsa doloribus saepe. Deleniti?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim ratione debitis explicabo sequi consequuntur quia aliquid, assumenda nesciunt dicta laborum perspiciatis deserunt soluta blanditiis harum ipsa doloribus saepe. Deleniti?"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim ratione debitis explicabo sequi consequuntur quia aliquid, assumenda nesciunt dicta laborum perspiciatis deserunt soluta blanditiis harum ipsa doloribus saepe. Deleniti?"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, enim ratione debitis explicabo sequi consequuntur quia aliquid, assumenda nesciunt dicta laborum perspiciatis deserunt soluta blanditiis harum ipsa doloribus saepe. Deleniti?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
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
