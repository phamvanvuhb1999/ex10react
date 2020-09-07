import React, { Component } from "react";
import "./Item.css";
import checkedImg from '../img/checked.svg';
import uncheckedImg from '../img/unchecked.svg';

class Item extends Component {
  render() {
    
    const { item, onClick } = this.props;
    let className = "Item";
    let url = uncheckedImg;
    if(item.isComplete){
      url = checkedImg;
    }
    if (item.isComplete) {
      className += " Item-complete";
    }
    return (
      <div onClick={onClick} className={className}>
        <img src={url} width={32} height={32} />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default Item;
