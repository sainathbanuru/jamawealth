import React, { Component } from "react";
import "./pricing.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cal from "../../assets/cal.png";
import Cal2 from "../../assets/cal2.png";
import Cal3 from "../../assets/cal3.png";

const plan1 = [
  {
    option: "A1",
    mgmt: "1.00 %",
    hurdle: "6.00 %",
    performance: "20.00 %"
  },
  {
    option: "A2",
    mgmt: "1.50 %",
    hurdle: "10.00 %",
    performance: "20.00 %"
  },
  {
    option: "A3",
    mgmt: "2.00 %",
    hurdle: "15.00 %",
    performance: "20.00 %"
  }
];

const plan2 = [
  {
    option: "T3",
    mgmt: "5.50 %",
    hurdle: "50.00 %",
    performance: "20.00 %"
  },
  {
    option: "T4",
    mgmt: "7.50 %",
    hurdle: "75.00 %",
    performance: "20.00 %"
  },
  {
    option: "T5",
    mgmt: "9.00 %",
    hurdle: "95.00 %",
    performance: "20.00 %"
  }
];

const plan3 = [
  {
    option: "S3",
    mgmt: "2.82 %",
    hurdle: "25.69 %",
    performance: "20.00 %"
  },
  {
    option: "S4",
    mgmt: "3.85 %",
    hurdle: "38.54 %",
    performance: "20.00 %"
  },
  {
    option: "S5",
    mgmt: "4.62 %",
    hurdle: "48.82 %",
    performance: "20.00 %"
  }
];

class Pricing extends Component {
  state = {
    tab: 1,
    planDetails: plan1,
    image: Cal,
    exampleHeading: "Illustration for Plan A3"
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

    const exampleText = "Example".padEnd(20, " ");
    const investmentText = "Investment Amount";
    const advisoryText = "Advisory Fee".padEnd(20, " ");

    return (
      <div>
        <Header />
        <Helmet>
          <title>
            {" "}
            Pricing | Jama Wealth Stock Portfolio Management Services{" "}
          </title>
          <meta
            name="description"
            content="We price our wealth management services specially of stock market very cleanly, we dont have any hidden charges, there is no lock in period either."
          ></meta>
        </Helmet>
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            padding: "48px 0 24px 0",
            // padding: "100px 0",
            backgroundColor: "#f4f5fb"
          }}
        >
          <h4 style={{ marginTop: 32 }}>Pricing</h4>
          <p id="pricing-description">
            The fees paid for the Jama Wealth Advisory & Research on Stocks
            (JARS) service is guranteed to be transparent. No other hidden
            charges or transaction fees are levied directly or indirectly by
            us.There are no exit loads either.
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
                planDetails: plan1,
                image: Cal,
                exampleHeading: "Illustration for Plan A3"
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
                planDetails: plan2,
                image: Cal2,
                exampleHeading: "Illustration for Plan T3"
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
                planDetails: plan3,
                image: Cal3,
                exampleHeading: "Illustration for Plan S3"
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
              <b>Absolute Hurdle %</b>
            </h6>
          </div>
          <div className="gridItem border-right-zero">
            <h6>
              <b>Performance Fee %</b>
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
                {plan.performance}
              </div>
            </>
          ))}

          {/* <div className="gridItem border-bottom-zero "></div>
          <div className="gridItem border-bottom-zero"></div>
          <div className="gridItem border-bottom-zero"></div>
          <div className="gridItem border-bottom-zero border-right-zero"></div> */}
        </div>
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            padding: "0px 0 50px 0"
          }}
        >
          <p id="pricing-description">
            Hurdle: The minimum gain to acheive. Any Gains above this will be
            shared using the % performance fee shown above. This way our fee is
            linked your portfolio performance.
          </p>
        </div>
        <div
          style={{
            textAlign: "left",
            alignItems: "center"
          }}
        >
          <div
            style={{
              textAlign: "center",
              alignItems: "center",
              padding: "10px 0 10px 0",
              // padding: "100px 0",
              backgroundColor: "#f4f5fb"
            }}
          >
            <h4>{this.state.exampleHeading}</h4>
          </div>
        </div>

        <img
          style={{
            width: "70%",
            height: "auto",
            margin: "16px auto",
            display: "flex"
          }}
          src={this.state.image}
        />

        <div class=" research-invest-section ">
          <div class=" row ">
            <div class=" col s12 m6 offset-m3 ">
              <div
                class=" research-invest-section-content "
                style={{ padding: 0 }}
              >
                <div class=" research-invest-btn-section ">
                  <Link to="/contactus">
                    <a class="waves-effect waves-light btn btn-large btn-orange m-r-15">
                      Contact Advisor
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Pricing;
