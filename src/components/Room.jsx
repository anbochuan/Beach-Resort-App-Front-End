import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../public/images/room-1.jpeg";
import PropTypes from "prop-types";

class Room extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    return (
      <article className="room">
        <div className="img-container">
          <img
            src={this.props.room.images[0] || defaultImg}
            alt="single room"
          ></img>
          <div className="price-top">
            <h6>${this.props.room.price}</h6>
            <p>per night</p>
          </div>
          <Link
            to={`/rooms/${this.props.room.slug}`}
            className="btn-primary room-link"
          >
            Features
          </Link>
        </div>
        <p className="room-info">{this.props.room.name}</p>
      </article>
    );
  }
}

// vaidation 你只需配置特定的 propTypes 属性：PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Room;
