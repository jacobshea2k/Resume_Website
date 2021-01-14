import React, { Component } from "react";

import "./Footer.css";

import email from "./Email-Icon.png";
import linkedin from "./Linkedin-Icon.png";
import instagram from "./Instagram-Icon.png";
import facebook from "./Facebook-Icon.png";

class Footer extends Component {
  linkedInBtnClick() {
    window.open("https://www.linkedin.com/in/jshea2k/");
  }

  facebookBtnClick() {
    window.open("https://www.facebook.com/jacob.shea.98/");
  }

  instagramBtnClick() {
    window.open("https://www.instagram.com/jshea2k/");
  }

  render() {
    return (
      <div className="footer">
        <div className="icon-holder">
          <div className="contact-info-holder">
            <div className="footer-flex" />
            <p1 className="contact-info-text">Email - jshea21@my.whitworth.edu</p1>
          </div>
          <div className="footer-flex"/>
          <button className="icon-button" onClick={this.linkedInBtnClick}>
            <img alt="" className="icon-image" src={linkedin} />
          </button>
          <div className="icon-spacer" />
          <button className="icon-button" onClick={this.facebookBtnClick}>
            <img alt="" className="icon-image" src={facebook} />
          </button>
          <div className="icon-spacer" />
          <button className="icon-button" onClick={this.instagramBtnClick}>
            <img alt="" className="icon-image" src={instagram} />
          </button>
          <div className="footer-flex"/>
          <div className="contact-info-holder">
            <p1 className="contact-info-text">Phone - 425.974.9743</p1>
            <div className="footer-flex" />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
