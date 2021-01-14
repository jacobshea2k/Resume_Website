import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import "./Resume.css";
import Footer from "../Footer/Footer";
import WhitLogo from "./whit_logo.jpg";

class Resume extends Component {
  render() {
    return (
      <div className="resume-encloser">
        <div className="resume">
          <div className="resume_skills">
              <div className="resume_skill_holder">
                <h1 className="center_header">Skills</h1>
                <p className="offset_header">C++</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                </div>
                <p className="offset_header">Java</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">Python</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">SQL</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">VHDL</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">Git</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">Microsoft Office Suite</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">React</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">Javascript</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">CSS</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
                <p className="offset_header">HTML</p>
                <div className="ratingholder">
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="fullcircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                  <div className="ratingspacer" />
                  <div className="emptycircle" />
                </div>
              </div>
          </div>
          <div className="resume_content">
              <div className="resume_section">
                <div className="resume_text">
                  <h1>Education</h1>
                  <div className="resumeline" />
                  <h4>Whitworth University</h4>
                  <div className="resumetitle">
                    <h6>Spokane, WA</h6>
                    <div className="resumespacer" />
                    <h6>Sep 2017 - May 2021</h6>
                  </div>
                  I am currently a senior attending Whitworth University working
                  towards a B.S. in Computer Science and a B.A. in Applied
                  Mathematics.
                </div>
                <img className="whitlogo" src={WhitLogo} />
                <p className="new_line">Relevant coursework:</p>
                <p className="description_center">
                Data Structures, Networks, Java Applications Development, Linear Algebra, 
                Database Management, Operating Systems, Digital Logic Design, Computer Architecture, 
                Advanced Algorithms, Artificial Intelligence, Graph Theory	
                </p>
                <div className="spacer">''</div>
              </div>
              <div className="spacer" />
              <div className="resume_section">
                <div className="resume_text">
                  <h1>Work Experience</h1>
                  <div className="resumeline" />
                  <h4>Whitworth University - Resident Assistant</h4>
                  <div className="resumetitle">
                    <h6>Spokane, WA</h6>
                    <div className="resumespacer" />
                    <h6>Aug 2020 - May 2021</h6>
                  </div>
                  <p className="description_left">
                    Promoted academic excellence, addressed student needs, and
                    encourage involvement among residents supporting the
                    missions of the University and the Office of Residential
                    Life
                  </p>
                  <ul>
                    <li>
                      Developed an inclusive community among 200 students,
                      maximizing positive resident interactions
                    </li>
                    <li>
                      Consulted a diverse set of students with day-to-day
                      problems such as their studies and personal lives
                    </li>
                    <li>
                      Mediated and provided conflict resolution in a
                      professional and timely manner
                    </li>
                    <li>
                      Worked with Head Resident Educators to point out areas of
                      improvement within Residence Life
                    </li>
                  </ul>
                  <h4>Mens Wearhouse - Assistant Formalwear Manager</h4>
                  <div className="resumetitle">
                    <h6>Bellevue, WA / Spokane, WA</h6>
                    <div className="resumespacer" />
                    <h6>Jun 2015 - April 2020</h6>
                  </div>
                  <p className="description_left">
                    Communicated and implemented company operational guidelines,
                    standards and policies to the support team's success
                  </p>
                  <ul>
                    <li>
                      Greeted 300+ customers and issued receipts, refunds,
                      credits and change daily
                    </li>
                    <li>Maintained clean and orderly checkout areas</li>
                    <li>
                      Assisted customers in selecting merchandise, answering
                      questions and quickly resolving concerns
                    </li>
                    <li>
                      Demonstrated exemplary personal customer service and
                      selling skills
                    </li>
                  </ul>
                  <h4>Whitworth University - Teacher Assistant</h4>
                  <div className="resumetitle">
                    <h6>Spokane, WA</h6>
                    <div className="resumespacer" />
                    <h6>Jan 2019 - May 2019</h6>
                  </div>
                  <p className="description_left">
                    Assisted Head Teacher with the preparation, implementation,
                    evaluation, and recording of daily lesson plans
                  </p>
                  <ul>
                    <li>
                      Assumed responsibility of the classroom and operation of
                      the program during the head teacher's absence
                    </li>
                    <li>
                      Taught students the fundamentals of programming in C++
                    </li>
                    <li>Developed a supporting relationship with students</li>
                    <li>
                      Assisted individual students and took notice of their
                      individual learning styles
                    </li>
                  </ul>
                </div>
              </div>
            
          </div>
        </div>
        <div className="resume-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Resume;
