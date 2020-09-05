import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const { item, onClick } = this.props;
    let className = "Item";
    if (item.isComplete) {
      className += " Item-complete";
    }
    return (
      <div onClick={onClick} className={className}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default Item;
