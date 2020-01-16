import React, { Component } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../Context";
import Loading from "./Loading";

class RoomsContainer extends Component {
  state = {};
  render() {
    return (
      <RoomConsumer>
        {value => {
          //   console.log("consumer value: ", value);
          if (value.loading) {
            return <Loading></Loading>;
          }
          return (
            <div>
              <RoomsFilter roomsFilter={value.rooms}></RoomsFilter>
              <RoomsList roomsList={value.sortedRooms}></RoomsList>
            </div>
          );
        }}
      </RoomConsumer>
    );
  }
}

export default RoomsContainer;
