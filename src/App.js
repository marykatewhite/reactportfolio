import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Project from "./components/project.js";
import Jumbotron from "./components/jumbotron.js";
import About from "./components/about.js";
import Contact from "./components/contact.js"
import Resume from "./components/resume.js";
import projects from "./projects.json";
import "./App.css";
import "./components/images/MaryKateWhiteresume.pdf";

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
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
