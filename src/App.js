import React, { Component } from "react";
import Projects from "./components/projects";
import Header from "./partials/header";
import Footer from "./partials/footer";
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
        <Header />
        <Projects data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
