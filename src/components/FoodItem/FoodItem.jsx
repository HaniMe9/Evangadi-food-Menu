import React, { Component } from "react";
import './FoodItem.css';

class FoodItem extends Component {
  render() {
    const { img, title, price, desc, link } = this.props.foodData;

    return (
      <div className="single-food">
        <div className="img">
          <img src={img} alt={title} />
        </div>

        <div className="title-price">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>

        <div className="food-desc">
          <p>{desc.split(" ").slice(0, 45).join(" ") + "..."}</p>
          {link && <p className="food-link">{link}</p>}
        </div>
      </div>
    );
  }
}

export default FoodItem;
