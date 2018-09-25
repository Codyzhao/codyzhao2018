import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="container py-4">
          <div className="dot dot-3 mb-5" />
          <div className="text-center">
            <h1 className="display-4 mb-3 mb-md-4">
              Hello I’m Cody.
              <br /> A frontend developer.
            </h1>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    I enjoy writing reusable modular code with modern frontend
                    frameworks.
                  </p>
                  <p>
                    <a
                      className="text-primary"
                      href="http://getbootstrap.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bootstrap 4
                    </a>{" "}
                    is my choosen CSS framework for now. I like the idea of
                    mobile first responsive, HTML/CSS over Javascript approach
                    it takes. The latest version implments flexbox for the grid
                    and lots of helpful utilites classes.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    I've been working with{" "}
                    <a
                      className="text-primary"
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-primary"
                      href="https://angular.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Angular
                    </a>
                    . They are both very mature MVC framework, but personally I
                    like React better.
                  </p>
                  <p>
                    React has better component isolation, easy to learn and
                    maintain. It also has better performance thanks to the
                    visual DOM. Not to mention React is way better in term of
                    mirgation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
