import React, { Component } from "react";
import data from "./data";
import { FaGalacticSenate } from "react-icons/fa";

// create a context object
const RoomContext = React.createContext();

const URL = "http://localhost:8080/api/v1/room";
const JwtToken = localStorage.getItem("JwtToken");
console.log("JwtToken: " + JwtToken);

const languages = navigator.languages;
const currentLang = languages[0];

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    locale: "en",
    language: "en-US"
  };

  checkLangInBrowser = () => {
    if (currentLang == "zh-CN") {
      this.setState({ locale: "zh", language: "zh-CN" });
      // console.log("chinese");
    }
    if (currentLang == "en-US") {
      this.setState({ locale: "en", language: "en-US" });
      // console.log("english");
    }
  };

  // getDataFromSpringAPI
  getDataFromApi = () => {
    fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: JwtToken
      }
    })
      .then(res => res.json())
      .then(data => {
        const fetchedRooms = data;
        // let fetchedRooms = this.formatData(data);
        let featuredRooms = fetchedRooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...fetchedRooms.map(room => room.price));
        let maxSize = Math.max(...fetchedRooms.map(room => room.size));

        this.setState({
          rooms: fetchedRooms,
          featuredRooms: featuredRooms,
          sortedRooms: fetchedRooms,
          loading: false,
          price: maxPrice,
          maxPrice: maxPrice,
          maxSize: maxSize
        });
        return fetchedRooms;
      })
      .catch(console.log);
  };

  componentDidMount() {
    this.getDataFromApi();
    this.checkLangInBrowser();
  }

  formatData(itemsArray) {
    let tempItemsArray = itemsArray.map(item => {
      let formatedId = item.sys.id;
      let formatedImages = item.fields.images.map(image => {
        return image.fields.file.url;
      });
      let room = { ...item.fields, images: formatedImages, id: formatedId };
      return room;
    });
    return tempItemsArray;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(tempRoom => tempRoom.slug === slug);
    return room;
  };

  onChangeLanguage = lang => {
    if (lang === "English") {
      this.setState({ language: "en-US", locale: "en" });
      // console.log("from context param langEn is: " + lang);
    } else if (lang === "Chinese") {
      this.setState({ language: "zh-CN", locale: "zh" });
      // console.log("from context param langZh is: " + lang);
    } else {
      this.setState({ language: "en-US", locale: "en" });
    }
  };

  handleChange = event => {
    const target = event.target;
    const value =
      event.target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      //   if using this.filterRooms() will delay one time???
      this.filterRooms
    );

    console.log(
      `this is target: ${event.target}`,
      `this is event.target.type: ${event.target.type}`,
      `this is name: ${name}`,
      `this is value: ${value}`,
      `this is event.type: ${event.type}`
    );
  };

  filterRooms = () => {
    // get a copy of all the rooms
    // var filteredRooms = this.state.rooms;
    // let filteredRooms = this.getDataFromApi();
    // transform value
    let capacity = parseInt(this.state.capacity);
    let price = parseInt(this.state.price);

    fetch(
      URL +
        `/filterRoom/?type=${this.state.type}&capacity=${capacity}&price=${price}&minSize=${this.state.minSize}&maxSize=${this.state.maxSize}&isPets=${this.state.pets}&isBreakfast=${this.state.breakfast}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: JwtToken
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        let filteredRooms = data;
        console.log("data: ", data);
        // change state
        this.setState({
          sortedRooms: filteredRooms
        });
      })
      .catch(console.log);

    // filter by room type
    // if (this.state.type !== "all") {
    // *** front-end filter *** //
    //   tempRooms = tempRooms.filter(
    //     tempRoom => tempRoom.type === this.state.type
    //   );
    // *** end front-end filter *** //
    // *** back-end filter *** //
    //   fetch(
    //     `http://localhost:8080/api/v1/room/filter/type?type=${this.state.type}`
    //   )
    //     .then(res => res.json())
    //     .then(data => {
    //       let filteredRooms = data;
    //       // change state
    //       this.setState({
    //         sortedRooms: filteredRooms
    //       });
    //     })
    //     .catch(console.log);
    // }

    // filter by room capacity
    // if (capacity !== 1) {
    // filteredRooms = filteredRooms.filter(
    //   filteredRoom => filteredRoom.capacity >= capacity
    // );
    //   fetch(
    //     `http://localhost:8080/api/v1/room/filter/capacity?capacity=${capacity}`
    //   )
    //     .then(res => res.json())
    //     .then(data => {
    //       filteredRooms = data;
    //       // change state
    //       this.setState({
    //         sortedRooms: filteredRooms
    //       });
    //     })
    //     .catch(console.log);
    // }
    // filter by room price
    // filteredRooms = filteredRooms.filter(
    //   filteredRoom => filteredRoom.price <= price
    // );
    // fetch(`http://localhost:8080/api/v1/room/filter/price?price=${price}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     var filteredRooms = data;
    //     // change state
    //     this.setState({
    //       sortedRooms: filteredRooms
    //     });
    //   })
    //   .catch(console.log);

    // filter by room size
    // filteredRooms = filteredRooms.filter(
    //   filteredRoom =>
    //     filteredRoom.size <= this.state.maxSize &&
    //     filteredRoom.size >= this.state.minSize
    // );

    // filter by breakfast
    // if (this.state.breakfast) {
    //   filteredRooms = filteredRooms.filter(
    //     filteredRoom => filteredRoom.breakfast === true
    //   );
    // }

    //filter by pets
    // if (this.state.pets) {
    //   filteredRooms = filteredRooms.filter(
    //     filteredRoom => filteredRoom.pets === true
    //   );
    // }
  };

  render() {
    return (
      // this object is sitting on top of the entire project
      <RoomContext.Provider
        value={{
          // this will includ all the attributes in state no need to type one by one
          ...this.state,
          // you can keep adding more attributes
          getRoom: this.getRoom,
          handleChange: this.handleChange,
          onChangeLanguage: this.onChangeLanguage
        }}
      >
        {/* and this.props.children will let all the child node use the value of this object */}
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
