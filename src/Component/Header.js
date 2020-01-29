import React, { Component } from "react";
import jamabrandlogo from "../assets/Jama_wealth_logo.svg";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";
import "../css/style.css";
import Sidebar from "./Sidebar";

class Header extends Component {
  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");
    if (source && source.length > 0) {
      sessionStorage.setItem("utm_source", source);
    }
    if (medium && medium.length > 0) {
      sessionStorage.setItem("utm_channel", medium);
    }
    if (medium && campaign.length > 0) {
      sessionStorage.setItem("utm_campaign", campaign);
    }
  }

  render() {
    return (
      <div>
        <nav className="row white header-bg-shadow" role="navigation">
          <div class="nav-wrapper container-fluid custom-width-header">
            <Sidebar />
            <a className="navbar-brand">
              <Link to="/">
                {" "}
                <img className="brand-logo-img" src={jamabrandlogo} />
              </Link>
            </a>
            <ul className="right hide-on-med-and-down nav-pills">
              <li>
                <Link to="/Aboutus" class="active">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Values" class="active">
                  Our Values
                </Link>
              </li>
              <li>
                <Link to="/HowJamaWorksInfo" class="active">
                  How it works
                </Link>
              </li>
              <li>
                <Link to="/testimonial" class="active">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/pricing" class="active">
                  Pricing
                </Link>
              </li>
              {/* <li><Link to="/testimonial" class="active">Testimonials</Link></li> */}
              <li>
                <a
                  href="https://www.jamawealth.com/app/accounts/login/"
                  class="login-btn"
                >
                  Login
                </a>
              </li>
              <li>
                <a href="/contactus/" class="start-btn">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div
          dangerouslySetInnerHTML={{
            __html: `<script>
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    var source = getParameterByName('utm_source');
    var medium = getParameterByName('utm_medium');
    var campaign = getParameterByName('utm_campaign');
    var parent_source = document.referrer;
    var host = "";

    if(parent_source.length > 0){
        var parts = document.referrer.split('://')[1].split('/');
        var protocol = document.referrer.split('://')[0];
        var host = parts[0];
        host = host.replace("www."," ").replace(".com"," ");
        var pathName = parts.slice(1).join('/')
    }
    if(source.length > 0){
        sessionStorage.setItem("utm_source", source);
    }
    else if(host.length){
        sessionStorage.setItem("utm_source", host);
    }
    if(medium.length > 0){
        sessionStorage.setItem("utm_channel", medium);
    }
    if(campaign.length > 0){
        sessionStorage.setItem("utm_campaign", campaign);
    }
</script>`
          }}
        />
      </div>
    );
  }
}

export default Header;
