import React, { Component } from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

class RoomsFilter extends Component {
  static contextType = RoomContext;
  constructor(props) {
    super(props);
  }

  // Option 1 using Set() to get all unique values
  getUniqueValues = (targetArray, attrKey) => {
    // let tempResults = targetArray.map(target => {
    //   return target[attrKey];
    // });
    // let tempSet = new Set(tempResults);
    // let finalResults = [...tempSet];
    // return finalResults;
    return [...new Set(targetArray.map(target => target[attrKey]))];
  };

  // Option 2 using filter() to get all unique values
  //   getUniqueValues = (targetArray, attrKey) => {
  //     let tempResults = targetArray.map(target => {
  //       return target[attrKey];
  //     });
  //     let finalResults = tempResults.filter((tempResult, index) => {
  //       // The indexOf method returns the first index it finds of the provided element from our array.
  //       // The duplicates are where the index doesn’t match the indexOf
  //       return tempResults.indexOf(tempResult) === index;
  //     });
  //     return finalResults;
  //   };

  state = {};
  render() {
    // get unique types
    let uniqueTypes = this.getUniqueValues(this.props.roomsFilter, "type");
    // add 'all' to types array
    let finalTypes = ["all", ...uniqueTypes];
    // map to jsx
    const typesOptions = finalTypes.map((type, index) => {
      return (
        <option key={index} value={type}>
          {type}
        </option>
      );
    });

    // get unique capacity
    let uniqueCapacity = this.getUniqueValues(
      this.props.roomsFilter,
      "capacity"
    );
    // map to jsx
    const capacityOptions = uniqueCapacity.map((capacity, index) => {
      return (
        <option key={index} value={capacity}>
          {capacity}
        </option>
      );
    });

    // const context = useContext(RoomContext);
    const contextObj = this.context;
    return (
      <section className="filter-container">
        <Title title="search rooms"></Title>
        <form className="filter-form">
          {/* select type */}
          <div className="form-group">
            <label htmlFor="typeDropDown">room type</label>
            <select
              name="type"
              id="typeDropDown"
              value={contextObj.type}
              className="form-control"
              onChange={contextObj.handleChange}
            >
              {typesOptions}
            </select>
          </div>
          {/* end of select type */}

          {/* choose how many guest */}
          <div className="form-group">
            <label htmlFor="guestDropDown">Guests</label>
            <select
              name="capacity"
              id="guestDropDown"
              value={contextObj.capacity}
              className="form-control"
              onChange={contextObj.handleChange}
            >
              {capacityOptions}
            </select>
          </div>
          {/* end of guest */}

          {/* room price */}
          <div className="form-group">
            <label htmlFor="priceRange">room price ${contextObj.price}</label>
            <input
              className="form-control"
              type="range"
              id="priceRange"
              name="price"
              min={contextObj.minPrice}
              max={contextObj.maxPrice}
              value={contextObj.price}
              onChange={contextObj.handleChange}
            ></input>
          </div>
          {/* end of room price */}

          {/* room size */}
          <div className="form-group">
            <label htmlFor="roomSize">room size</label>
            <div className="size-inputs">
              <input
                className="size-input"
                id="roomSize"
                type="number"
                name="minSize"
                value={contextObj.minSize}
                onChange={contextObj.handleChange}
              ></input>
              <input
                className="size-input"
                id="roomMaxSize"
                type="number"
                name="maxSize"
                value={contextObj.maxSize}
                onChange={contextObj.handleChange}
              ></input>
            </div>
          </div>
          {/* end of room size */}

          {/* extras */}
          <div className="form-group">
            <div className="single-extra">
              <input
                id="roomBreakfast"
                type="checkbox"
                name="breakfast"
                checked={contextObj.breakfast}
                onChange={contextObj.handleChange}
              ></input>
              <label htmlFor="roomBreakfast">breakfast</label>
            </div>

            <div className="single-extra">
              <input
                id="roomPets"
                type="checkbox"
                name="pets"
                checked={contextObj.pets}
                onChange={contextObj.handleChange}
              ></input>
              <label htmlFor="roomPets">pets</label>
            </div>
          </div>
          {/* end of extras */}
        </form>
      </section>
    );
  }
}

export default RoomsFilter;
