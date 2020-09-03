// import React from "react";
// import "./styles.css";
// import Item from "./components/Item";
// import { render } from "react-dom";

import React, { Component } from "react";
import Item from "./components/Item";

//redefine App component to render a list
class App extends Component {
  constructor() {
    super();
    //this.List  = ["do some thing", "learning code", "relax"];
    this.List = [
      { title: "do something", isComplete: true },
      { title: "learning code" },
      { title: "relax" }
    ];
  }

  render() {
    // if (this.List.length > 0) {
    //   return (
    //     <div className="App">
    //       {this.List.map((item, index) => (
    //         <Item key={index} item={item} />
    //       ))}
    //     </div>
    //   );
    // } else {
    //   return <div>nothing here</div>;
    // }
    return (
      <div className="App">
        {this.List.length > 0 &&
          this.List.map((item, index) => <Item key={index} item={item} />)}
        {this.List.length === 0 && "nothing here"}
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
