import React from "react";
import "../App.css";
import "./images/bg.png";

function Jumbotron() {
  return (
    <div className="jumbotron-fluid" id="introBox">
      <div className="container" id="namebox">
        <div className="row justify-content-center">
          <div className="col-xs-12">
            <h1 id="myName">Mary Kate White</h1>
          </div>
        </div>

        <div id="bioBox">
          <div className="row justify-content-center">
            <div className="col-xs-12">
              <p id="introText">
                An <b>editor,</b> <b>designer</b> and{" "}
                <b>full-stack web developer.</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="codeAndContent">
        <div className="row">
          <div className="col-xs-12" id="codeBox">
              <h1 id="codeWord">CODE</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12" id="andBox">
              <h1 id="andWord">&amp;</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12" id="contentBox">
              <h1 id="contentWord">CONTENT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
