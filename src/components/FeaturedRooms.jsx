import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import { FormattedMessage } from "react-intl/lib/index";

class FeaturedRooms extends Component {
  // 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
  // 这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
  static contextType = RoomContext;
  state = {};
  render() {
    const contextObj = this.context;
    // *** get featured rooms from front-end *** //
    let featuredRooms = contextObj.featuredRooms.map(room => {
      //   console.log(room);
      return <Room key={room.uuid} room={room}></Room>;
    });

    return (
      <section className="featured-rooms">
        <Title
          title={
            <FormattedMessage
              id="Featured_rooms"
              defaultMessage="default translation"
              description="Link on react page"
            />
          }
        ></Title>
        <div className="featured-rooms-center">
          {contextObj.loading ? <Loading></Loading> : featuredRooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
