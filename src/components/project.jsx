import React, { Component } from "react";
import * as tagService from "./../services/tags.service";

class Project extends Component {
  render() {
    const { data: project } = this.props;
    return (
      <React.Fragment>
        <img src={project.image} alt="" className="card-img-top" />
        <div className="card-body">
          <div className="card-badge mb-2">
            {project.tags.map(tag => (
              <span key={tag} className="badge badge-primary mr-1">
                {tagService.getTagNameById(tag)}
              </span>
            ))}
          </div>
          <h3 className="card-title">{project.title}</h3>
          <p className="dard-text mb-0 small">{project.caption}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
