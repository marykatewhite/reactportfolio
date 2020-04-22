import React from "react";
import "../App.css";


function Contact() {
  return (
    <div classname="container" id="contact">
      <div classname="row justify-content-center">
        <div classname="col-xs-12">
          <h3 classname="sectionLabel">Get in Touch:</h3>
        </div>
      </div>
      <div classname="row justify-content-center iconrow" id="icons">
        <div classname="col-xs-12 col-sm-2 d-flex justify-content-center">
          <a href="mailto:marykatewhite@gmail.com">
            <span id="icon">
              <i classname="icons fas fa-envelope fa-3x"></i>
            </span>
          </a>
        </div>
        <div classname="col-xs-12 col-sm-2 d-flex justify-content-center">
          <a href="https://www.linkedin.com/in/marykatewhite/" target="_blank" rel="noopener noreferrer">
            <span id="icon">
              <i classname="icons fab fa-linkedin fa-3x"></i>
            </span>
          </a>
        </div>
        <div classname="col-xs-12 col-sm-2 d-flex justify-content-center">
          <a href="https://github.com/marykatewhite" target="_blank" rel="noopener noreferrer">
            <span id="icon">
              <i classname="icons fab fa-github fa-3x"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}


export default Contact;