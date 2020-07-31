import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-collapse show collapse navbar-light bg-light sticky-top">
      <a className="navbar-brand" href="/">
        MKW
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/code">
              Code
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/design">
              Design
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/writing">
              Writing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resume">
              Résumé
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
