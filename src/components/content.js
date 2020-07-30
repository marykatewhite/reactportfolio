import React from "react";
import "../App.css";

function Content() {
  return (
    <div className="jumbotron-fluid" id="contentTypeBox">
      <div className="container-fluid" id="namebox">
        <div className="row justify-content-center">
          <div className="col-xs-12">
            <h1 id="myName">Mary Kate White</h1>
          </div>
        </div>

        <div id="bioBox">
          <div className="row justify-content-center">
            <div className="col-xs-12">
              <p id="introText">
                An <a href="/writing"><b>editor</b></a>,{" "}<a href="/design"><b>designer</b></a> and{" "}
                <a href="/code"><b>full-stack web developer.</b></a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="contentTypes">
        <div className="row">
          <div className="col xs12 m4 justify-content-center contentColumn">
            <a href="/projects">
              <div className="contentTitleBox justify-content-center">
                <p className="contentTitle">
                  Programming
                  <br />
                  &amp; Code
                </p>
              </div>
              <div className="contentImgBox" id="programmingBox"></div>
            </a>
          </div>

          <div className="col xs12 m4 justify-content-center">
            <a href="/design">
              <div className="contentTitleBox justify-content-center">
                <p className="contentTitle">
                  Design
                  <br />
                  &amp; Layout
                </p>
              </div>
              <div className="contentImgBox" id="designBox"></div>
            </a>
          </div>

          <div className="col xs12 m4 justify-content-center">
            <a href="/writing">
              <div className="contentTitleBox justify-content-center">
                <p className="contentTitle">
                  Writing
                  <br />
                  &amp; Editing
                </p>
              </div>
              <div className="contentImgBox" id="writingBox"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
