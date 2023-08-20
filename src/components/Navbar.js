import React from "react";
import {
  Link
} from "react-router-dom";
import PropTypes from 'prop-types'
export default function Navbar(props) {  // here we are receiving props which contains data, this is same as receiving arguments after function call in js
  
  return (
    <>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item"><Link className="nav-link text-success" to="/home">{props.title}</Link></li>
            <li className="nav-item"><Link className="nav-link text-success" to="/home">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-success" to="/about">About</Link></li>
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.chBG} />
            <label className="form-check-label text-success" htmlFor="flexSwitchCheckChecked">Enable {props.mode === "dark" ? "light" : "dark"} mode</label>
          </div>
        </div>
      </nav>
    </>
  );

}

Navbar.propTypes = { // propTypes defines the typeo of props attributes
  title: PropTypes.string.isRequired,  /* is required is a check to make this propType as mandatory to provide otherwise it will give warnings */
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = { // this is default props syntax if props is received but does not contain required details then we can set is by defualt using this syntax
  title: 'Set title here',
  aboutText: 'Set about us here'
};
