import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="container">
          <div className="text-center">
            <h1>Hello I’m Cody - a frontend developer base in Auckland.</h1>
            <p className="lead">We’re living in a fast peaced world.</p>
            <p>
              The frontend technology evolves a lot since I steped into the
              industry. From table layout to float, and then flexbox/CSS grid.
              From vanila Javascript to jQuery then MVC frameworks. We
              frontenders keep on challenging ourselives.
            </p>
            <p>
              The beauty of the job is consitently learning new things no matter
              how long you has been in the industry. The passion never fade
              away.
            </p>

            <hr />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
