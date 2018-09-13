import React, { Component } from "react";
import Projects from "./components/projects";
import "./App.css";

class App extends Component {
  state = {
    data: [
      {
        _id: 1,
        image: "",
        title: "Title 1",
        caption: "Caption 1"
      },
      {
        _id: 2,
        image: "",
        title: "Title 2",
        caption: "Caption 2"
      },
      {
        _id: 3,
        image: "",
        title: "Title 2",
        caption: "Caption 2"
      }
    ]
  };

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Projects data={data} />
      </div>
    );
  }
}

export default App;
