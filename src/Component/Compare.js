import React, { Component } from "react";
import "../css/style.css";
import "../css/how-jama-works.css";
import { Link } from "react-router-dom";
import Moneybag from "../assets/Money Bag.svg";
import magicwand from "../assets/magic-wand.svg";
import allocate from "../assets/allocate.svg";
import Howjamaimg from "../assets/Howjamaimg.svg";
import bars from "../assets/bars.svg";
import Header from "./Header";
import HomepageBodyContent from "./HomepageBodyContent";
import Footer from "./Footer";
import philosophyyllo from "../assets/philosophyyllo.png";
import howjamaimgblk from "../assets/howjamaimgblk.png";
import startimgyllo from "../assets/startimgyllo.png";
import WOW from "wowjs";
import Introsection from "./Introsection";
import FeatureSection from "./featureSection";
import { Helmet } from "react-helmet";
import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const options = {
  title: {
    text: "My stock chart"
  },
  series: [
    {
      data: [1, 2, 3]
    }
  ]
};

class HowjamaWorks extends Component {
  state = {
    data: null
  };
  async componentDidMount() {
    new WOW.WOW().init();
    // window.scrollTo(0, 0);

    const jars = await axios.get(
      "https://jamaapptest2.s3.amazonaws.com/jars_nav_values.json"
    );

    const nifty = await axios.get(
      "https://jamaapptest2.s3.amazonaws.com/nifty_nav_values.json"
    );

    this.setState({
      data: [
        {
          name: "Nifty",
          data: nifty.data
        },
        {
          name: "Jamā wealth",
          data: jars.data
        }
      ]
    });
    console.log("nifty", nifty.data);
  }
  render() {
    const compareOptions = {
      credits: {
        enabled: false
      },
      chart: {
        renderTo: "container"
      },
      exporting: {
        enabled: false
      },
      rangeSelector: {
        enabled: true,
        inputEnabled: false,
        verticalAlign: "bottom",
        buttonTheme: {
          // styles for the buttons
          fill: "none",
          stroke: "none",
          "stroke-width": 0,
          r: 8,
          style: {
            color: "#039",
            fontWeight: "bold"
          },
          states: {
            hover: {},
            select: {
              fill: "#039",
              style: {
                color: "white"
              }
            }
            // disabled: { ... }
          }
        },
        inputBoxBorderColor: "gray",
        inputBoxWidth: 120,
        inputBoxHeight: 18,
        inputStyle: {
          color: "#039",
          fontWeight: "bold"
        },
        labelStyle: {
          color: "silver",
          fontWeight: "bold"
        },
        buttons: [
          {
            type: "month",
            count: 1,
            text: "1m"
          },
          {
            type: "month",
            count: 3,
            text: "3m"
          },
          {
            type: "month",
            count: 6,
            text: "6m"
          },
          {
            type: "ytd",
            text: "YTD"
          },
          {
            type: "year",
            count: 1,
            text: "1y"
          },
          {
            type: "year",
            count: 3,
            text: "3y"
          },
          {
            type: "year",
            count: 5,
            text: "5y"
          },
          {
            type: "all",
            text: "All"
          }
        ]
      },
      yAxis: {
        labels: {
          formatter: function() {
            return (this.value > 0 ? " + " : "") + this.value + "%";
          }
        },
        plotLines: [
          {
            value: 0,
            width: 2,
            color: "silver"
          }
        ]
      },
      plotOptions: {
        series: {
          compare: "percent",
          showInNavigator: true
        }
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true
      },
      series: this.state.data
    };

    return (
      <div>
        <Header />
        <Helmet>
          <title>
            {" "}
            Compare Jama Wealth Equity Investment Portfolio With Nifty 50 | Jama
            Wealth{" "}
          </title>
          <meta
            name="description"
            content="Equity investment portfolios, selected by experts and machine learning algorithms.
For busy professionals, CXOs and business-owners."
          ></meta>
        </Helmet>
        <div
          class="jars-section-title-heading"
          style={{ margin: "100px auto 0", textAlign: "center" }}
        >
          <h5>Compare Jamā Wealth Equity with Nifty 50</h5>
        </div>

        <div
          style={{
            width: "100%",
            margin: "0 auto",
            maxWidth: 500,
            height: 400
          }}
        >
          {this.state.data ? (
            <HighchartsReact
              highcharts={HighStock}
              constructorType={"stockChart"}
              options={compareOptions}
            />
          ) : (
            <div
              style={{
                width: 500,
                height: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <div class={"loader"}></div>
            </div>
          )}
        </div>
        {/* <div
          id="container"
          style={{
            width: "100%",
            height: 400,
            margin: "0 auto",
            marginTop: 32,
            maxWidth: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div class="loader"></div>
        </div> */}
        <div class="research-invest-section">
          <div class="row">
            <div class="col s12 m6 offset-m3">
              <div
                class="research-invest-section-content"
                style={{ paddingTop: 0 }}
              >
                {/* <h4 style={{ lineHeight: 1.5 }}>
                  Too Busy To Track Investments? Not Able To Take Timely
                  Portfolio Action?
                </h4>
                <p>
                  As a busy professional or a businessman, we know that your
                  primary focus is where it should be. Delegate the day to day
                  tracking of your investment portfolio to a trusted advisor who
                  helps grow your wealth with clean operating principles.
                </p> */}
                <div class="research-invest-btn-section">
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

export default HowjamaWorks;
