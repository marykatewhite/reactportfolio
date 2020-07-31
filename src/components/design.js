import React, { Component } from "react";
import designs from "../designs.json";
import M from "materialize-css";
import "../App.css";

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = { designs };
  }

  componentDidMount() {
    M.AutoInit();
  }
  // let instance = M.Carousel.getInstance(elem);

  render() {
    return this.state.designs.map(design => {
      const { id, name, altimg, img, description, externallink } = design;
      return (
            <div className="row projectrow" key={id} id={name}>
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
      );
    });
  }
  }

export default Design;
