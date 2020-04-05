import React from "react";

function ProjectCard(props) {
  return (
    <div className="card" style="width: 18rem;">
        <img src={props.img} class="card-img-top" alt={props.altimg}></img>
        <div class="card-body">
      <ul>
        <li>{props.name}</li>
        <li>{props.description}</li>
        <li>{props.deployed}</li>
        <li>{props.github}</li>
      </ul>
      </div>
    </div>
  );
}

export default ProjectCard;