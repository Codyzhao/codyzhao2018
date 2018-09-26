import React, { Component } from "react";
import * as tagService from "./../services/tags.service";

class Project extends Component {
  render() {
    const { data: project } = this.props;
    const cardTextClass = project.url
      ? "card-text small"
      : "card-text small mb-0";
    return (
      <React.Fragment>
        {project.image ? (
          <img src={project.image} alt="" className="card-img-top" />
        ) : (
          ""
        )}
        <div className="card-body">
          <div className="card-badge">
            {project.tags.map(tag => (
              <span key={tag} className="badge badge-secondary mr-1">
                {tagService.getTagNameById(tag)}
              </span>
            ))}
          </div>
          <h3 className="card-title mb-1 mt-3">{project.title}</h3>
          <p
            className={cardTextClass}
            dangerouslySetInnerHTML={{ __html: project.caption }}
          />
          {project.url ? (
            <div>
              <a
                href={project.url}
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
