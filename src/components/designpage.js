import React, { Component } from "react";
import Design from "./design.js";
import designs from "../designs.json";
import M from "materialize-css";
import "../App.css";

class DesignPage extends Component {
  constructor(props) {
    super(props);
    this.state = { designs };
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
              <h1 className="carouselContentTitle">Design</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="bioBox">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-m-6">
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
          <Design designs={this.props.children} />
        </div>
      </div>
    );
  }
}
export default DesignPage;
