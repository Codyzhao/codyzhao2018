import React, { Component } from "react";
import Projects from "./components/projects";
import Header from "./partials/header";
import Footer from "./partials/footer";
import Filter from "./components/filter";
import * as projectService from "./services/projects.service";
import * as tagsService from "./services/tags.service";
import { filterByTag } from "./utils/processData";
import "./App.css";

const filterAll = { _id: "0", name: "All" };

class App extends Component {
  state = {
    data: [],
    tags: [],
    selectFilter: filterAll
  };

  componentDidMount() {
    const tags = [filterAll, ...tagsService.tags];
    const movies = projectService.getProjects();
    this.setState({
      data: movies,
      tags: tags
    });
  }

  handleFilterSelect = filter => this.setState({ selectFilter: filter });

  render() {
    const { data, tags, selectFilter } = this.state;

    const projects =
      selectFilter && selectFilter._id !== "0"
        ? filterByTag(data, selectFilter)
        : data;

    return (
      <React.Fragment>
        <Header />
        <div id="site-main" className="site-main py-4">
          <h1 className="text-center mb-4">Recent work</h1>
          <Filter
            data={tags}
            onItemSelect={this.handleFilterSelect}
            selectItem={selectFilter}
          />
          <Projects data={projects} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
