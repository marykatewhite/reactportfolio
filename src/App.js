import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header.js";
import Project from "./components/project.js";
import Content from "./components/content.js";
import Jumbotron from "./components/jumbotron.js";
import About from "./components/about.js";
import Contact from "./components/contact.js"
import Resume from "./components/resume.js";
import Design from "./components/design.js";
import Writing from "./components/writing.js";
import projects from "./projects.json";
import "./App.css";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Jumbotron} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/content" component={Content} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/writing" component={Writing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </div>
      </Router>
    );
  }
}

export default App;
