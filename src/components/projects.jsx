import React, { Component } from "react";
import Masonry from "react-masonry-component";
import Project from "./project";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class Projects extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="projects">
        <div className="container">
          <h2 className="text-center">My work</h2>
          <Masonry
            className="row project-gallery" // default ''
            elementType={"div"} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            imagesLoadedOptions={imagesLoadedOptions} // default {}
          >
            {data.map(project => (
              <figure key={project._id} className="project col-md-4">
                <Project data={project} />
              </figure>
            ))}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default Projects;
