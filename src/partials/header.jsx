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
              <br /> Welcome to my online portfolio.
            </h1>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    This site is a{" "}
                    <a
                      className="text-primary"
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React
                    </a>{" "}
                    sandbox to showcase my recent works. If you want to know
                    more about me, please leave drop a line via{" "}
                    <a href="&#109;&#x61;&#x69;&#108;&#116;&#111;&#x3a;&#122;&#x68;&#97;&#111;&#x63;&#x6f;&#100;&#121;&#x40;&#x67;&#x6d;&#x61;&#x69;&#108;&#46;&#x63;&#111;&#109;">
                      Email
                    </a>{" "}
                    or{" "}
                    <a
                      href="http://lnkd.in/b8mRhgC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    .
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
                    is my choosen CSS framework. I like the idea of mobile first
                    responsive, HTML/CSS over Javascript approach. It has
                    flexbox based grid and loads of helpful utilites classes.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Started working with Javascript from the jQuery era.
                    Currently I'm working with both{" "}
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
                    . They are both very mature MVC framework. Personally I like
                    React better.
                  </p>
                  <p>
                    React has better component isolation, easy to understand and
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
