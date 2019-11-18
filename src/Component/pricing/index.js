import React, { Component } from "react";
import "./pricing.css";
import Header from "../Header";
import Footer from "../Footer";

const plan1 = [
  {
    option: "A1",
    mgmt: "1.00 %",
    hurdle: "6.00 %",
    performace: "20.00 %"
  },
  {
    option: "A2",
    mgmt: "1.50 %",
    hurdle: "10.00 %",
    performace: "20.00 %"
  },
  {
    option: "A3",
    mgmt: "2.00 %",
    hurdle: "15.00 %",
    performace: "20.00 %"
  }
];

const plan2 = [
  {
    option: "T3",
    mgmt: "5.50 %",
    hurdle: "50.00 %",
    performace: "20.00 %"
  },
  {
    option: "T4",
    mgmt: "7.50 %",
    hurdle: "75.00 %",
    performace: "20.00 %"
  },
  {
    option: "T5",
    mgmt: "9.00 %",
    hurdle: "95.00 %",
    performace: "20.00 %"
  }
];

const plan3 = [
  {
    option: "S3",
    mgmt: "2.82 %",
    hurdle: "25.69 %",
    performace: "20.00 %"
  },
  {
    option: "S4",
    mgmt: "3.85 %",
    hurdle: "38.54 %",
    performace: "20.00 %"
  },
  {
    option: "S5",
    mgmt: "4.62 %",
    hurdle: "48.82 %",
    performace: "20.00 %"
  }
];

export class Pricing extends Component {
  state = {
    tab: 1,
    planDetails: plan1
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { tab, planDetails } = this.state;
    let tab1style = {};
    let tab2style = {};
    let tab3style = {};
    if (tab === 1) {
      tab1style = { backgroundColor: "#1553A5", color: "#fff" };
    } else if (tab === 2) {
      tab2style = { backgroundColor: "#1553A5", color: "#fff" };
    } else {
      tab3style = { backgroundColor: "#1553A5", color: "#fff" };
    }
    return (
      <div>
        <Header />

        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            padding: "48px 0 24px 0",
            // padding: "100px 0",
            backgroundColor: "#f4f5fb"
          }}
        >
          <h1 style={{ fontFamily: "playfair display", fontWeight: "bold" }}>
            Pricing
          </h1>
          <p id="pricing-description">
            The fees paid for the Invsetment Advisory service is guranteed to be
            transparent. No other hidden charges or transaction fees are levied
            directly or indirectly by us.There are no exit loads either.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: 0
          }}
        >
          <h6
            className="headings"
            onClick={() => {
              this.setState({
                tab: 1,
                planDetails: plan1
              });
            }}
            style={tab1style}
          >
            1 year
            <br />
            <span
              style={{
                color: "grey",
                fontSize: 12,
                lineHeight: 1.3,
                ...tab1style
              }}
            >
              lumpsum
            </span>
          </h6>
          <h6
            className="headings"
            onClick={() => {
              this.setState({
                tab: 2,
                planDetails: plan2
              });
            }}
            style={tab2style}
          >
            3 year
            <br />
            <span
              style={{
                color: "grey",
                fontSize: 12,
                lineHeight: 1.3,
                ...tab2style
              }}
            >
              lumpsum
            </span>
          </h6>

          <h6
            className="headings"
            onClick={() => {
              this.setState({
                tab: 3,
                planDetails: plan3
              });
            }}
            style={tab3style}
          >
            3 year <br />
            <span
              style={{
                color: "grey",
                fontSize: 12,
                lineHeight: 1.3,
                ...tab3style
              }}
            >
              SIP
            </span>
          </h6>
        </div>
        <div className="gridContainer">
          <div className="gridItem">
            <h6>
              <b>Option</b>
            </h6>
          </div>
          <div className="gridItem">
            <h6>
              <b>Management Fee %</b>
            </h6>
          </div>
          <div className="gridItem">
            <h6>
              <b>Hurdle %</b>
            </h6>
          </div>
          <div className="gridItem border-right-zero">
            <h6>
              <b>Performace Fee %</b>
            </h6>
          </div>

          {planDetails.map(plan => (
            <>
              <div className="gridItem ">
                <p style={{ fontWeight: "bold" }}>{plan.option}</p>
              </div>
              <div className="gridItem">{plan.mgmt}</div>
              <div className="gridItem">{plan.hurdle}</div>
              <div className="gridItem border-right-zero">
                {plan.performace}
              </div>
            </>
          ))}

          {/* <div className="gridItem border-bottom-zero "></div>
          <div className="gridItem border-bottom-zero"></div>
          <div className="gridItem border-bottom-zero"></div>
          <div className="gridItem border-bottom-zero border-right-zero"></div> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Pricing;
