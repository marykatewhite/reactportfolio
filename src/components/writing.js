import React, { Component } from "react";
import "../App.css";
import writings from "../writings.json";

class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = { writings };
  }

  render() {
    return this.state.writings.map(writing => {
      const { id, name, source, description, externallink } = writing;
      return (
        <div key={id} className="container-fluid" id={name}>
            <div className="row projectrow">

            <div className="col-xs-8 offset-md-1 whiteSheet writingBox">
              <a href={externallink} target="_blank" rel="noopener noreferrer" className="writingTitle">{name}</a><br/>
              <a href={externallink} target="_blank" rel="noopener noreferrer" className="writingSource">{source}</a>
              <p>
                {description}
                <br />
              </p>
            </div>

          </div>
        </div>
      );
    });
  }
}

export default Writing;