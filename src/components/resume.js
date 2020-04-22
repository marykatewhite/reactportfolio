import React from "react";
import "../App.css";
// import "/importImages/MaryKateWhiteresume.pdf";

function Resume() {
  return (
    <div className="container-fluid" id="resume">
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <h2>Experience:</h2>
          <h4>2019: Office Assistant at Virginia Dare Marina in Moneta, VA</h4>
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
            2018 - 2019: Editor at The Franklin News-Post in Rocky Mount, VA
          </h4>
          <ul>
            <li>
              Produced and managed editorial content while working with
              advertising and design teams to plan and publish biweekly paper
            </li>
            <li>Updated and moderated website and social media channels</li>
            <li>Hired, trained and managed staff writers and contributors</li>
          </ul>

          <h4>
          2016 - 2018: Editor at China Daily and The Beijinger in Beijing, China
          </h4>
          <ul>
            <li>
            Planned, wrote, edited and proofed all print and online content
            </li>
            <li>Conducted research and interviews, wrote news and feature stories</li>
            <li>Managed contributors, post scheduling, forums and social media</li>
            <li>Held weekly critiques, provided feedback and training to writers</li>
          </ul>

          <h4>
          2015 - 2016: Marketing Consultant in Luoyang, China
          </h4>
          <ul>
            <li>
            Produced promotional materials for manufacturers in China
            </li>
            <li>Designed logos, photographed products, wrote copy for and built company websites, catalogs and sales correspondence materials</li>
            <li>Served as project manager for launch into English-speaking markets</li>
          </ul>

          <br />
        </div>
      </div>
    </div>
  );
}

export default Resume;
