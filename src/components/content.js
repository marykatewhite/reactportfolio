import React from "react";
import "../App.css";

function Content() {
  return (
    <div className="jumbotron-fluid" id="contentTypeBox">
      <div className="container" id="contentTypes">

            <div className="row">

              <div className="col xs12 m4 justify-content-center">
                <a href="/projects">
              <div className="contentTitleBox justify-content-center">
                <h2 className="contentTitle">
                  Programming
                  <br />
                  &amp; Code
                </h2>
                </div>
                <div className="contentImgBox" id="programmingBox"></div></a>
              </div>

              <div className="col xs12 m4 justify-content-center">
              <a href="/design">
                <div className="contentTitleBox justify-content-center">
                <h2 className="contentTitle">
                  Design
                  <br />
                  &amp; Layout
                </h2>
                </div>
                <div className="contentImgBox" id="designBox"></div></a>
              </div>

              <div className="col xs12 m4 justify-content-center">
              <a href="/writing">
              <div className="contentTitleBox justify-content-center">
                <h2 className="contentTitle">
                  Writing
                  <br />
                  &amp; Editing
                </h2>
                </div>
                <div className="contentImgBox" id="writingBox"></div></a>
              </div>

            </div>

            
          </div>
        </div>

  );
}

export default Content;
