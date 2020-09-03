import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const item = this.props.item;
    let className = "Item";
    if (item.isComplete) {
      className += " Item-complete";
    }
    return (
      <div className={className}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default Item;
