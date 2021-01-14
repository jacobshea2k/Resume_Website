import React from "react";

import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/#/home"><p className="title">Jacob Shea: Software Developer</p></a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <ul>
          <li>
            <a href="/#/about"><button type="button" class="btn btn-outline-light">About</button></a>
          </li>
          <li>
            <a href="/#/resume"><button type="button" class="btn btn-outline-light">Resume</button></a>
          </li>
          <li>
            <a href="/#/projects"><button type="button" class="btn btn-outline-light">Projects</button></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
