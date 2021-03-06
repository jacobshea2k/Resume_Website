import React from "react";

import "./SideDrawer.css";

const sideDrawer = (props) => {
    let drawerClasses = 'side_drawer';
    if(props.show) {
        drawerClasses = 'side_drawer open';
    }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/#/about">About</a>
        </li>
        <li>
          <a href="/#/resume">Resume</a>
        </li>
        <li>
          <a href="/#/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
