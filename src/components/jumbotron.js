import React from "react";
import "./style.css";
import "./images/jumbobg.jpg";

function Jumbotron() {
    return (
        <div className="jumbotron-fluid vertical-center" id="introBox">
        <div className="container" id="namebox">
            <div className="row justify-content-center">
                <div className="col-xs-12">
                    <h1 id="myName">Mary Kate White.</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-12">
                    <p id="introText">An <b>editor,</b> <b>designer</b> and <b>full-stack web developer.</b></p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xs-12 col-md-2">
                    <a href="#aboutMe">
                        <button type="button" className="btn btn-lg btn-secondary">About.</button>
                    </a>
                </div>
                <div className="col-xs-12 col-md-2">
                    <a href="#projects">
                        <button type="button" className="btn btn-lg btn-secondary">Projects.</button>
                    </a>
                </div>
                <div className="col-xs-12 col-md-2">
                    <a href="images/Mary Kate White resume.pdf" target="_blank">
                        <button type="button" className="btn btn-lg btn-secondary">Résumé.</button>
                    </a>
                </div>
                <div className="col-xs-12 col-md-2">
                    <a href="#contact">
                        <button type="button" className="btn btn-lg btn-secondary">Contact.</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Jumbotron;