import React from "react";
import "../App.css";
import "./images/MaryKateWhiteresume.pdf";

function Resume() {
  return (
    <div className="container-fluid" id="resume">
      <div className="row">
        <div className="col-xs-12 col-sm-7 offset-md-1">
          <h2>Experience:</h2>
          <h4>
            2019: Office Assistant at Virginia Dare Marina
            <br />
            in Moneta, Virginia
          </h4>
          <ul>
            <li>
              Handled marketing and communication via phone, email and social
            </li>
            <li>
              Managed cruise ship’s guests, staff, supplies and scheduling
            </li>
            <li>
              Designed and produced promotional material for digital channels
            </li>
            <li>
              Drew up, processed and filed contracts and company paperwork
            </li>
          </ul>
          <br />

          <h4>
            2018 - 2019: Editor at The Franklin News-Post
            <br />
            in Rocky Mount, Virginia
          </h4>
          <ul>
            <li>
              Produced and managed editorial content while working with
              advertising and design teams to plan and publish biweekly paper
            </li>
            <li>Updated and moderated website and social media channels</li>
            <li>Hired, trained and managed staff writers and contributors</li>
          </ul>
          <br />

          <h4>
            2016 - 2018: Editor at China Daily and The Beijinger
            <br />
            in Beijing, China
          </h4>
          <ul>
            <li>
              Planned, wrote, edited and proofed all print and online content
            </li>
            <li>
              Conducted research and interviews, wrote news and feature stories
            </li>
            <li>
              Managed contributors, post scheduling, forums and social media
            </li>
            <li>
              Held weekly critiques, provided feedback and training to writers
            </li>
          </ul>
          <br />

          <h4>
            2015 - 2016: Marketing Consultant
            <br />
            in Luoyang, China
          </h4>
          <ul>
            <li>Produced promotional materials for manufacturers in China</li>
            <li>
              Designed logos, photographed products, wrote copy for and built
              company websites, catalogs and sales correspondence materials
            </li>
            <li>
              Served as project manager for launch into English-speaking markets
            </li>
          </ul>
          <br />
          <br />
        </div>
        <div className="col-xs-12 col-sm-3">
          <h2>Skills:</h2>
          <p>
            HTML and CSS<br />
            JavaScript and jQuery<br />
            Responsive Design<br />
            Bootstrap and Materialize<br />
            Express Handlebars<br />
            React.js<br />
            APIs, AJAX, Axios
            Heroku, Git<br />
            Local and Session Storage<br />
            MySQL, MongoDB, IndexedDB<br />
            Node and Express<br />
            User Authentication<br />
            Progressive Web Applications<br />
            Unit Testing<br />
            Functional Testing<br />
            Linting<br />
            Continuous Integration<br />
            Wordpress<br />
            Social Media Management<br />
            Adobe Creative Suite: Photoshop, InDesign, Illustrator<br />
            Audio/Video Editing: Final Cut Pro X, GarageBand<br />
            Microsoft Office and G Suite<br />
            copywriting, editing, research and reporting<br />
            Simplified Mandarin
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
