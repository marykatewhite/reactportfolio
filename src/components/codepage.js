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
            <div className="col-xs-12 col-m-8">
              <p className="carouselIntroText">
                A few examples of my work with graphic design and layout in both
                print and digital formats.
                <br />
                <b>What I hope it demonstrates:</b> my versatility and fluency
                with Adobe Creative Suite.
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
