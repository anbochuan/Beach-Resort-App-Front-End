import React, { Component } from "react";
import Room from "./Room";

class RoomsList extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    if (this.props.roomsList.length === 0) {
      return (
        <div className="empty-search">
          <h3>unfortunately no rooms matched your search parameters</h3>
        </div>
      );
    }
    return (
      <section className="roomslist">
        <div className="roomslist-center">
          {this.props.roomsList.map(room => {
            return <Room key={room.uuid} room={room}></Room>;
          })}
        </div>
      </section>
    );
  }
}

export default RoomsList;
