import React from "react";
import "../css/style.css";

import nocusmoney from "../assets/nocusmoney.svg";
import nocustomshare from "../assets/nocustomshare.svg";
import Group10 from "../assets/Group10.svg";
import Group11 from "../assets/Group11.svg";
import Group12 from "../assets/Group12.svg";
import Group13 from "../assets/Group13.svg";

export default class FeatureSection extends React.Component {
  render() {
    return (
      <div>
        <div class="container homepage-below-feature-section-list w-percent-90">
          <div class="jars-section-title-heading" style={{ marginTop: 32 }}>
            <h4>An investment model so clean, that you will be surprised</h4>
          </div>
          {/* <div class="row Feature-section-title center-align">
            <h5>An investment model so clean, that you will be surprised</h5>
          </div> */}
          <div class="row">
            <div class="col s6 m2 lg2">
              <div class="features-icons-images center-align wow fadeIn">
                <img class="responsive-img" src={nocusmoney} />
              </div>
            </div>
            <div class="col s6 m2 lg2">
              <div class="features-icons-images center-align wow fadeIn">
                <img class="responsive-img" src={nocustomshare} />
              </div>
            </div>
            <div class="col s6 m2 lg2">
              <div class="features-icons-images center-align wow fadeIn">
                <img class="responsive-img" src={Group10} />
              </div>
            </div>
            <div class="col s6 m2 lg2">
              <div class="features-icons-images center-align wow fadeIn">
                <img class="responsive-img" src={Group11} />
              </div>
            </div>
            <div class="col s6 m2 lg2">
              <div class="features-icons-images center-align wow fadeIn">
                <img class="responsive-img" src={Group12} />
              </div>
            </div>
            <div class="col s6 m2 lg2">
              <div class="features-icons-images center-align wow fadeIn">
                <img class="responsive-img" src={Group13} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
