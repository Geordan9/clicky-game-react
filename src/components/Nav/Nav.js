import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      React Clicky Game
    </a>
    <h4 className="nav-message">{props.message}</h4>
    <h4 className="nav-score">Current: {props.currentScore} | Top: {props.topScore}</h4>
  </nav>
);

export default Nav;
