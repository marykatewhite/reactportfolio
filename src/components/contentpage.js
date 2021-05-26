import React, { Component } from "react";
import "../App.css";
import M from "materialize-css";
import "../App.css";
import Design from "./design.js";
import designs from "../designs.json";
import Writing from "./writing.js";
import writings from "../writings.json";

class ContentPage extends Component {
  constructor(props) {
    super(props);
    this.state = { designs, writings };
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
              <h1 className="carouselContentTitle">Content</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="bioBox">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-m-6">
              <p className="carouselIntroText">
                I have worked as an editor - not a reporter - for 10 years. As a
                result, my bylines are few. But I have been helping craft
                clearer, <br />
                more concise, and more accurate stories that whole time. Below
                are a few pieces published under my own name.
                <br />
                <b>What I hope it demonstrates:</b> my ability to adapt to
                different businesses' respective voices and editorial processes.
              </p>
            </div>
          </div>
        </div>

          <div className="row">
            <div className="col-s-12 col-m-6">
              <Design projects={this.props.children} />
            </div>
        </div>

          <div className="row">
            <div className="col-s-12 col-m-6">
              <Writing projects={this.props.children} />
            </div>
        </div>
      </div>
    );
  }
}

export default ContentPage;
