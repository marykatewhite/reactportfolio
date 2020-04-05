import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-collapse show collapse navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="index.html">MKW</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#aboutMe">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}

export default Header;