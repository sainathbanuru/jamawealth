import React, { Component } from "react";
import "../css/style.css";
import "../css/how-jama-works.css";
import moment from "moment";
import { Link } from "react-router-dom";
import Moneybag from "../assets/Money Bag.svg";
import magicwand from "../assets/magic-wand.svg";
import allocate from "../assets/allocate.svg";
import Howjamaimg from "../assets/Howjamaimg.svg";
import bars from "../assets/bars.svg";
import Header from "./Header";
import jamabrandlogo from "../assets/Jama_wealth_logo.svg";

// import HomepageBodyContent from "./HomepageBodyContent";
import Footer from "./Footer";
import philosophyyllo from "../assets/philosophyyllo.png";
import howjamaimgblk from "../assets/howjamaimgblk.png";
import startimgyllo from "../assets/startimgyllo.png";
// import WOW from "wowjs";
import Introsection from "./Introsection";
import FeatureSection from "./featureSection";
import { Helmet } from "react-helmet";
import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";

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
    data: null,
    from: null,
    to: null
  };

  handleFromChange = day => {
    this.setState({ from: day }, () => this.selectDay(day, true));
  };

  handleToChange = day => {
    this.setState({ to: day }, () => this.selectDay(day));
  };

  selectDay = (time, isMin) => {
    // console.log("time", time);
    // console.log("time", time.getTime());
    let timestamp;
    if (time) {
      timestamp = time.getTime();
    } else {
      if (isMin) {
        timestamp = this.state.from;
      } else {
        timestamp = this.state.to;
      }
    }
    // console.log("this.internalChart", this.chart);
    const xAxis = this.chart.xAxis[0];

    xAxis.setExtremes(
      isMin ? timestamp : xAxis.min,
      isMin ? xAxis.max : timestamp
    );
    this.setState(isMin ? { minInput: false } : { maxInput: false });
  };

  onChange = date => this.setState({ date });
  async componentDidMount() {
    // new WOW.WOW().init();
    // window.scrollTo(0, 0);

    const jars = await axios.get(
      "https://jamaapptest2.s3.amazonaws.com/jars_nav_values.json"
    );

    const nifty = await axios.get(
      "https://jamaapptest2.s3.amazonaws.com/nifty_nav_values.json"
    );

    const getDates = nifty.data;
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
      ],
      from: new Date(nifty.data[0][0]),
      to: new Date(getDates.pop()[0])
      // from: moment(nifty.data[0][0]),
      // to: moment(getDates.pop()[0])
    });
  }

  buttonClick = value => {
    let newDate;
    if (value == -1) {
      newDate = new Date(new Date().getFullYear(), 0, 1);
    } else {
      newDate = moment().subtract(value, "months");
    }
    this.setState({ from: new Date(newDate) });
  };
  render() {
    const { from, to } = this.state;
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
            text: "1m",
            events: {
              click: () => this.buttonClick(1)
            }
          },
          {
            type: "month",
            count: 3,
            text: "3m",
            events: {
              click: () => this.buttonClick(3)
            }
          },
          {
            type: "month",
            count: 6,
            text: "6m",
            events: {
              click: () => this.buttonClick(6)
            }
          },
          {
            type: "ytd",
            text: "YTD",
            events: {
              click: () => this.buttonClick(-1)
            }
          },
          {
            type: "year",
            count: 1,
            text: "1y",
            events: {
              click: () => this.buttonClick(12)
            }
          },
          {
            type: "year",
            count: 3,
            text: "3y",
            events: {
              click: () => this.buttonClick(36)
            }
          },
          {
            type: "year",
            count: 5,
            text: "5y",
            events: {
              click: () => this.buttonClick(60)
            }
          },
          {
            type: "all",
            text: "All",
            events: {
              click: () => this.buttonClick(0)
            }
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
      xAxis: {
        events: {
          setExtremes: function(e) {
            // console.log("this", this);
            // console.log(e);
          }
        }
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
            Compare Jama Wealth Portfolio Perofrmance With Nifty 50 | Jama
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

        {this.state.data && (
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              maxWidth: 500,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <p style={{ marginRight: 8, color: "#bbb" }}>From</p>
              <DayPickerInput
                style={{
                  border: "1px solid #ddd",
                  width: 100,
                  padding: 4
                  // height: 30
                }}
                inputProps={{
                  style: {
                    border: "none",
                    height: "auto",
                    margin: 0,
                    textAlign: "center",
                    fontSize: 12
                  }
                }}
                onDayChange={this.handleFromChange}
                value={from}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <p style={{ marginRight: 8, color: "#bbb", marginLeft: 32 }}>
                To
              </p>
              <DayPickerInput
                style={{
                  border: "1px solid #ddd",
                  width: 100,
                  padding: 4
                  // height: 30
                }}
                inputProps={{
                  style: {
                    border: "none",
                    height: "auto",
                    margin: 0,
                    textAlign: "center",
                    fontSize: 12
                  },
                  readonly: true
                }}
                onDayChange={this.handleToChange}
                value={to}
              />
            </div>
          </div>
        )}
        <div
          style={{
            width: "100%",
            margin: "0 auto",
            maxWidth: 500,
            height: 400
          }}
        >
          {this.state.data ? (
            <>
              <HighchartsReact
                ref={"chart"}
                highcharts={HighStock}
                constructorType={"stockChart"}
                // options={compareOptions}
                callback={chart => {
                  this.chart = chart;
                }}
                options={{
                  ...compareOptions
                }}
              />
            </>
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

        <div class=" research-invest-section ">
          <div class=" row ">
            <div class=" col s12 m6 offset-m3 ">
              <div class=" research-invest-section-content ">
                {/* <h4>
                  Don't fall behind your goals <br></br>It's time to invest for
                  your better future{" "}
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p> */}
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

        <Footer />
      </div>
    );
  }
}

export default HowjamaWorks;
