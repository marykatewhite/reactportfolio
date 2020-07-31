import React, { Component } from "react";
import Project from "./project.js";
import projects from "../projects.json";
import M from "materialize-css";
import "../App.css";

class CodePage extends Component {
  constructor(props) {
    super(props);
    this.state = { projects };
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="jumbotron-fluid">
        
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xs-12">
              <h1 className="carouselContentTitle">Code</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="bioBox">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-m-8 offset-md-2">
              <p className="carouselIntroText">
                All of these projects were built in a week, outside of my 40-hour work week and 10 hours of class time. They're not the best, but I learned a great deal and built them quickly.
                <br />
                <b>What I hope it demonstrates:</b> my understanding of full-stack fundamentals and ability to learn and work quickly.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <Project projects={this.props.children} />
        </div>
      </div>
    );
  }
}
export default CodePage;
