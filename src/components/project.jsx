import React, { Component } from "react";

class Project extends Component {
  render() {
    const { data: project } = this.props;
    return (
      <React.Fragment>
        <img src={project.image} alt="" className="image-fluid" />
        <h3>{project.title}</h3>
        <p>{project.caption}</p>
      </React.Fragment>
    );
  }
}

export default Project;
