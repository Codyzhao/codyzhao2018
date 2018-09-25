import React, { Component } from "react";

class Project extends Component {
  render() {
    const { data: project } = this.props;
    return (
      <React.Fragment>
        <img src={project.image} alt="" className="card-img-top" />
        <h3 className="card-title">{project.title}</h3>
        <p className="dard-text">{project.caption}</p>
      </React.Fragment>
    );
  }
}

export default Project;
