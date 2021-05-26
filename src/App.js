import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./components/content";
import Header from "./components/header.js";
import Contact from "./components/contact.js"
import Resume from "./components/resume.js";
import DesignPage from "./components/designpage";
import WritingPage from "./components/writingpage";
import CodePage from "./components/codepage";
import projects from "./projects.json";
import ContentPage from "./components/contentpage";
import Jumbotron from "./components/jumbotron";
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';

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
          <Route exact path="/code" component={CodePage} />
          <Route exact path="/design" component={DesignPage} />
          <Route exact path="/writing" component={WritingPage} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/jumbotron" component={Jumbotron} />
          <Route exact path="/contentpage" component={ContentPage} />
        </div>
      </Router>
    );
  }
}

export default App;
