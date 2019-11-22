import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import jamabrandlogo from "../assets/Jama_wealth_logo.svg";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <Link to="/Aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/Values">Our Values</Link>
          </li>
          <li>
            <Link to="/HowJamaWorksInfo">How it works</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          {/* <li><Link to="/testimonial">Client Testimonials</Link></li> */}
          <li>
            <div className="divider" />
          </li>
          <li>
            <Link to="/contactus" class="start-btn">
              Get Started
            </Link>
          </li>
        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    );
  }
}

export default Sidebar;
