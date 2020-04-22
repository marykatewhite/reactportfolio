import React from "react";
import "../App.css";

function Contact() {
  return (
    <>
      <div classname="container-fluid">
        <div classname="row justify-content-center">
          <div classname="col-xs-12 justify-content-center">
            <h2 id="contactLabel">
              <center>Get in Touch:</center>
            </h2>
          </div>
        </div>
      </div>

      <div classname="container-fluid" id="contactList">
        <div classname="row justify-content-center">
          <div classname="col-xs-12 col-sm-2 d-flex justify-content-center">
            <a href="mailto:marykatewhite@gmail.com">
              <h3 className="contactButton">
                <center>Email.</center>
              </h3>
            </a>
          </div>
          <div classname="col-xs-12 col-sm-2 d-flex justify-content-center">
            <a
              href="https://www.linkedin.com/in/marykatewhite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="contactButton">
                <center>LinkedIn.</center>
              </h3>
            </a>
          </div>
          <div classname="col-xs-12 col-sm-2 d-flex justify-content-center">
            <a
              href="https://github.com/marykatewhite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                <center className="contactButton">Github.</center>
              </h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
