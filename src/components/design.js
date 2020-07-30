import React, { Component } from "react";
import "../App.css";
import designs from "../designs.json";

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = { designs };
  }

  render() {
    return this.state.designs.map(design => {
      const { id, name, img, altimg, description, externallink } = design;
      return (
        <div key={id} className="container-fluid" id={name}>
            <div className="row projectrow">
            <div className="col-xs-12 col-md-3 offset-md-2">
              <a href={externallink} target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + img}
                  alt={altimg}
                  className="card"
                />
              </a>
            </div>
            <div className="col-xs-12 col-md-6">
              <a href={externallink} target="_blank" rel="noopener noreferrer"><h4>{name}</h4></a>
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

export default Design;
