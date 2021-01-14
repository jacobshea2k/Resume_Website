import React, { Component } from "react";

import "./About.css";
import Footer from "../Footer/Footer.jsx";
import SelfPhoto from "./self-photo.jpg";

class About extends Component {
  
  render() {
    return (
      <div className="about">
        <div className="about_section">
          <h1 className="about_title">About Myself</h1>
          <div className="about-slim-line"/>
          <div className="about_content">
            <div className="about_description">
              <div className="about-text-holder">
              <p1 className="about-description-text">
                My name is Jacob Shea, and I am an aspiring software developer.
                I have always had a strong passion for mathematics and problem solving. 
                I am looking for an opportunity to apply my skills and knowledge to a company
                that is willing to give me an environment to grow as an employee and a person.
              </p1>
              </div>
              <div className="about-content-spacer"/>
              <div className="about-text-holder">
              <p1 className="about-description-text">
                My personal life involves playing and watching a variety of sports including basketbal and soccer. 
                I enjoy staying active whenever I can. My physical and mental health
                is a top priority for me to help achieve my goals in terms
                of relationships, work and self-improvement.
              </p1>
              </div>
            </div>
            <div className="about_content_spacer" />
            <img className="selfphoto" src={SelfPhoto}/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
