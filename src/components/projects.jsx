import React, { Component } from "react";
import Project from "./project";

class Projects extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="projects">
        <div className="container">
          <div className="card-columns">
            {data.map(project => (
              <div key={project._id} className="card">
                <Project data={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
