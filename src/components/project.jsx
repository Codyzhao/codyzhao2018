import React, { Component } from "react";

class Project extends Component {
  render() {
    const { data: project } = this.props;
    return (
      <React.Fragment>
        <img src={project.image} alt="" className="image-fluid" />
        <h1>{project.title}</h1>
        <p>{project.caption}</p>
      </React.Fragment>
    );
  }
}

export default Project;
