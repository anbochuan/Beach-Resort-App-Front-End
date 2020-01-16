import React, { Component } from "react";
import defaultBcg from "../../public/images/room-1.jpeg";
import Banner from "./Banner";
import InnerBanner from "./InnerBanner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledBanner from "./StyledBanner";

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // we can access the params that the React Router provide us
    // props is passing by React Router
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }

  // 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。
  // 这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。
  static contextType = RoomContext;

  componentDidMount() {
    // api call  get room by slug
  }

  render() {
    const contextObj = this.context;
    let singleRoom = contextObj.getRoom(this.state.slug);
    // console.log(singleRoom);
    if (!singleRoom) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    return (
      <React.Fragment>
        <StyledBanner img={singleRoom.images[0] || this.state.defaultBcg}>
          <InnerBanner title={`${singleRoom.name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </InnerBanner>
        </StyledBanner>

        {/* <Banner banner="roomsHero">
          <InnerBanner title={`${singleRoom.name} room`}>
            <Link to="/rooms" className="btn-primary">
               back to rooms 
            </Link>
          </InnerBanner>
        </Banner> */}
        <section className="single-room">
          <div className="single-room-images">
            {singleRoom.images.map((image, index) => {
              return <img key={index} src={image} alt={singleRoom.name}></img>;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{singleRoom.description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${singleRoom.price}</h6>
              <h6>size : {singleRoom.size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {singleRoom.capacity > 1
                  ? `${singleRoom.capacity} person`
                  : `${singleRoom.capacity} people`}
              </h6>
              <h6>{singleRoom.pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>
                {singleRoom.breakfast
                  ? "free breakfast included"
                  : "no breakfast"}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {singleRoom.extras.map((extra, index) => {
              return <li key={index}>- {extra}</li>;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

export default SingleRoom;
