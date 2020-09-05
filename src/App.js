// import React from "react";
// import "./styles.css";
// import Item from "./components/Item";
// import { render } from "react-dom";

import React, { Component } from "react";
import Item from "./components/Item";
import "./styles.css";
//redefine App component to render a list
class App extends Component {
  constructor() {
    super();
    //this.List  = ["do some thing", "learning code", "relax"];
    this.state = {
      count: 1,
      line: "block",
      List: [
        { title: "do something", isComplete: false },
        { title: "learning code", isComplete: false },
        { title: "relax", isComplete: false }
      ]
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.buttonOnClick = this.buttonOnClick.bind(this);
    this.Add = this.Add.bind(this);
    this.Sub = this.Sub.bind(this);
  }
  onItemClick(item) {
    //console.log(this.state);
    console.log(item);
    let newo = {};
    Object.assign(newo, this.state);
    let newoo = newo.List.map(function (it) {
      if (it.title === item.title) {
        var complete = !it.isComplete;
        //console.log(complete);
        return { title: it.title, isComplete: complete };
      } else {
        return it;
      }
    });
    //console.log(newoo);
    newo.List = newoo;
    this.setState(newo);
    //console.log(this.state.item)
  }
  buttonOnClick() {
    //console.log(this.state.line);
    let newo = {};
    Object(newo, this.state);
    if (this.state.line === "block") {
      newo.line = "none";
    } else {
      newo.line = "block";
    }
    this.setState(newo);
    let temp = document.getElementById("lineflag");
    temp.style.display = this.state.line;
    //temp.style.opacity = (this.state.line === "block");
  }
  Add() {
    let newo = {};
    Object.assign(newo, this.state);
    newo.count = newo.count + 1;
    this.setState(newo);
    console.log(this.state.count);
    let temp = document.getElementById("count");
    temp.innerHTML = this.state.count;
  }
  Sub() {
    let newo = {};
    Object.assign(newo, this.state);
    newo.count = newo.count - 1;
    this.setState(newo);
    console.log(this.state.count);
    let temp = document.getElementById("count");
    temp.innerHTML = this.state.count;
  }

  render() {
    return (
      <div className="App">
        {this.state.List.map((item, index) => (
          <Item
            key={index}
            item={item}
            onClick={() => this.onItemClick(item)}
          />
        ))}
        <button className="button" onClick={this.buttonOnClick}>
          button
        </button>
        <p id="lineflag">hello</p>
        <div>
          <button className="button" onClick={this.Add}>
            +
          </button>
          <button className="button" onClick={this.Sub}>
            {" "}
            --{" "}
          </button>
        </div>
        <p id="count">0</p>
      </div>
    );
  }
}

export default App;
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <Item title="do something" />
//     </div>
//   );
// }
