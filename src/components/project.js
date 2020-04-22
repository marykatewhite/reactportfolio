import React, { Component } from "react";
import "../App.css";
import projects from "../projects.json";
import "./images/budgetcard.png";
import "./images/burgercard.png";
import "./images/carfreecard.png";
import "./images/friendangocard.png";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { projects };
  }

    render () {
      return this.state.projects.map(project => {
        const { id, name, img, altimg, description, github, deployed } = project;
      return (
      <div key={id} className="container-fluid" id={name}>
        <div className="row projectrow">
          <div className="col-xs-12 col-md-3 offset-md-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={process.env.PUBLIC_URL + img} alt={altimg} className="card" />
            </a>
          </div>
          <div className="col-xs-12 col-md-6">
            <h4>{name}</h4>
            <p>
              {description}
              <br />
              <a href={github}>
                <b>Click here to see the repository.</b>
              </a>
              <br />
              <a href={deployed}>
                <b>Click here to see it deployed.</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  })
}
}

export default Project;
