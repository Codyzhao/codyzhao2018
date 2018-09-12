import React, { Component } from "react";
import Project from "./project";

class Projects extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="projects">
        <div className="row">
          {data.map(project => (
            <figure key={project._id} className="project col-md-3">
              <Project data={project} />
            </figure>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
