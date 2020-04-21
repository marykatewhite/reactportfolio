import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
// import Project from "./components/project.js";
import Jumbotron from "./components/jumbotron.js"
import projects from "./projects.json";
import './App.css';

class App extends Component {
  state = {
    projects
  };

  // removeFriend = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  // const friends = this.state.friends.filter(friend => friend.id !== id);
  // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <Footer />
      </div>
    );
  }
}

export default App;
