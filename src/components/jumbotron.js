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
                An <a href="/writing"><b>editor,</b></a> <a href="/design"><b>designer</b></a> and{" "}
                <a href="/code"><b>full-stack web developer.</b></a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="codeAndContent">
        <div className="row">
          <div className="col-xs-12" id="codeBox">
              <a href="/code"><h1 id="codeWord">CODE</h1></a>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12" id="andBox">
              <h1 id="andWord">&amp;</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12" id="contentBox">
              <a href="/contentpage"><h1 id="contentWord">CONTENT</h1></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
