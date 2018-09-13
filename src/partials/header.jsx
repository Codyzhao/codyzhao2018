import React, { Component } from "react";

class Header extends Component {
  state = {
    introduction: "This is introduction"
  };
  render() {
    return (
      <header className="site-header">
        <div className="container">
          <p className="lead">{this.state.introduction}</p>
        </div>
      </header>
    );
  }
}

export default Header;
