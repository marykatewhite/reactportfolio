import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header.js";
import Project from "./components/project.js";
import Content from "./components/content.js";
// import Jumbotron from "./components/jumbotron.js";
import Contact from "./components/contact.js"
import Resume from "./components/resume.js";
// import Design from "./components/design.js";
import DesignPage from "./components/designpage.js";
import Writing from "./components/writing.js";
import projects from "./projects.json";
import 'materialize-css/dist/css/materialize.min.css';
import "./App.css";
import Design from "./components/design.js";

class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Content} />
          <Route exact path="/code" component={Project} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/writing" component={Writing} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
