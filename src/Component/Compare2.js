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

var to_date;
var from_date;
var nifty_cagr;
var jars_cagr;
var nifty_windows;
var jars_windows;

const options = {
  title: {
    text: "My stock chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

class Compare2 extends Component {
  state = {
    data: null,
    from: null,
    to: null,
  };

  indexOfmin(arr) {
    if (arr.length === 0) {
      return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        minIndex = i;
        min = arr[i];
      }
    }
    return [minIndex, min];
  }
  indexOfmax(arr) {
    if (arr.length === 0) {
      return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }
    return [maxIndex, max];
  }
  get_only_navs(data) {
    var onlynav = [];
    for (var i = 0; i < data.length - 1; i++) {
      onlynav.push(data[i][1]);
    }
    return onlynav;
  }
  getMean(data) {
    return (
      data.reduce(function (a, b) {
        return Number(a) + Number(b);
      }) / data.length
    );
  }
  getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      }
    );
    return vars;
  }
  getSD(data) {
    let m = this.getMean(data);
    return (
      Math.round(
        Math.sqrt(
          data.reduce(function (sq, n) {
            return sq + Math.pow(n - m, 2);
          }, 0) /
            (data.length - 1)
        ) * 1000
      ) / 1000
    );
  }
  get_yearly_sd(data, year, to) {
    var from = to - year * (1000 * 60 * 60 * 24 * 365);
    var todate = new Date(to);
    var fromdate = new Date(from);
    var today = todate.getDay();
    if (today == 0) {
      to = to - 2 * (1000 * 60 * 60 * 24);
    } else if (today == 6) {
      to = to - 1000 * 60 * 60 * 24;
    }
    var fromday = fromdate.getDay();
    if (fromday == 0) {
      from = from - 2 * (1000 * 60 * 60 * 24);
    } else if (fromday == 6) {
      from = from - 1000 * 60 * 60 * 24;
    }
    console.log("FROM AND TO FOR SD: " + from + " AND " + to);
    var start_index = 0;
    var end_index = data.length - 1;
    for (var j = 0; j < data.length; j++) {
      if ("" + data[j][0] === "" + from) {
        start_index = j;
        console.log("SD START INDEX IS: " + start_index);
      } else if ("" + data[j][0] === "" + to) {
        end_index = j;
        console.log("SD END INDEX IS: " + j);
      }
    }
    return this.getSD(
      this.get_only_navs(data.slice(start_index, end_index + 1))
    );
  }
  get_window(to, from, data) {
    console.log("Window To date: " + to);
    console.log("Window from Date: " + from);
    var from_index = 0;
    var to_index = data.length - 1;
    for (var j = 0; j < data.length; j++) {
      // console.log(data.length)
      // console.log("" + data[j][0]);
      if ("" + data[j][0] === to) {
        to_index = j;
        // console.log("To index is: " + to_index);
      } else if ("" + data[j][0] === from) {
        from_index = j;
        // console.log("From index is: " + from_index);
      }
    }
    return data.slice(from_index, to_index + 1);
  }
  get_cagr(data) {
    var days = (data[data.length - 1][0] - data[0][0]) / (1000 * 60 * 60 * 24);
    var jars_cagr =
      Math.pow(data[data.length - 1][1] / data[0][1], 1 / (days / 365)) - 1;

    // console.log((data[data.length-1][1]/data[0][1]));
    // console.log((1/(days/365)));
    // console.log("JARS CAGR: " + jars_cagr * 100);
    // nifty_cagr = Math.pow(((niftynav[niftynav.length - 1] - niftynav[0])/niftynav[0]) * 100, (1/(days/365)));
    // console.log(nifty_cagr);
    return Math.round(jars_cagr * 100 * 100) / 100 + "%";
  }

  get_year_returns(data, years, date) {
    var start = date - years * 1000 * 60 * 60 * 24 * 365;
    console.log(data[data.length - 1]);
    var startday = new Date(start);
    var endday = new Date(date);
    console.log("LOOP DATE is: " + endday);
    startday = startday.getDay();
    endday = endday.getDay();
    var start_index = 0;
    var end_index = data.length - 1;
    if ((startday == 0) | (startday == 6)) {
      start = start + 2 * (1000 * 60 * 60 * 24);
    } else if (endday == 0) {
      date = date - 2 * (1000 * 60 * 60 * 24);
    } else if (endday == 6) {
      date = date - 1 * (1000 * 60 * 60 * 24);
    }
    console.log("Return date is: " + date + " and " + start);
    for (var j = 0; j < data.length; j++) {
      if ("" + data[j][0] === "" + start) {
        start_index = j;
        // console.log("START INDEX IS: " + start_index);
      } else if ("" + data[j][0] === "" + date) {
        end_index = j;
        // console.log("END INDEX IS: " + j);
      }
    }
    console.log("Future Value: " + data[end_index][1]);
    console.log("Present Value: " + data[start_index][1]);
    var returns =
      (data[end_index][1] - data[start_index][1]) / data[start_index][1];
    console.log(years + " Years returns is: " + returns * 100);
    return Math.round(returns * 100 * 100) / 100 + "%";
  }
  update_stats_new(todate, fromdate) {
    this.setState({
      redraw: 0,
      nifty_cagr: this.get_cagr(
        this.get_window(todate, fromdate, this.state.data[0].data)
      ),
      jars_cagr: this.get_cagr(
        this.get_window(todate, fromdate, this.state.data[1].data)
      ),
      jars_1yr_returns: this.get_year_returns(
        this.state.data[1].data,
        1,
        todate
      ),
      jars_3yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[1].data),
        3,
        todate
      ),
      jars_5yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[1].data),
        5,
        todate
      ),
      jars_10yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[1].data),
        10,
        todate
      ),
      nifty_1yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[0].data),
        1,
        todate
      ),
      nifty_3yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[0].data),
        3,
        todate
      ),
      nifty_5yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[0].data),
        5,
        todate
      ),
      nifty_10yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[0].data),
        10,
        todate
      ),
      jars1yr_sd: this.get_yearly_sd(this.state.data[1].data, 1, todate),
      jars3yr_sd: this.get_yearly_sd(this.state.data[1].data, 3, todate),
      jars5yr_sd: this.get_yearly_sd(this.state.data[1].data, 5, todate),
      jars10yr_sd: this.get_yearly_sd(this.state.data[1].data, 10, todate),
      nifty1yr_sd: this.get_yearly_sd(this.state.data[0].data, 1, todate),
      nifty3yr_sd: this.get_yearly_sd(this.state.data[0].data, 3, todate),
      nifty5yr_sd: this.get_yearly_sd(this.state.data[0].data, 5, todate),
      nifty10yr_sd: this.get_yearly_sd(this.state.data[0].data, 10, todate),
    });
  }
  update_stats(todate, fromdate) {
    // this.setState({redraw : 0},() => console.log("Redraw Changed"));
    this.setState({
      nifty_cagr: this.get_cagr(
        this.get_window(todate, fromdate, this.state.data[0].data)
      ),
      jars_cagr: this.get_cagr(
        this.get_window(todate, fromdate, this.state.data[1].data)
      ),
      jars_1yr_returns: this.get_year_returns(
        this.state.data[1].data,
        1,
        todate
      ),
      jars_3yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[1].data),
        3,
        todate
      ),
      jars_5yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[1].data),
        5,
        todate
      ),
      jars_10yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[1].data),
        10,
        todate
      ),
      nifty_1yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[0].data),
        1,
        todate
      ),
      nifty_3yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[0].data),
        3,
        todate
      ),
      nifty_5yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[0].data),
        5,
        todate
      ),
      nifty_10yr_returns: this.get_year_returns(
        this.get_window(todate, fromdate, this.state.data[0].data),
        10,
        todate
      ),
      jars1yr_sd: this.get_yearly_sd(this.state.data[1].data, 1, todate),
      jars3yr_sd: this.get_yearly_sd(this.state.data[1].data, 3, todate),
      jars5yr_sd: this.get_yearly_sd(this.state.data[1].data, 5, todate),
      jars10yr_sd: this.get_yearly_sd(this.state.data[1].data, 10, todate),
      nifty1yr_sd: this.get_yearly_sd(this.state.data[0].data, 1, todate),
      nifty3yr_sd: this.get_yearly_sd(this.state.data[0].data, 3, todate),
      nifty5yr_sd: this.get_yearly_sd(this.state.data[0].data, 5, todate),
      nifty10yr_sd: this.get_yearly_sd(this.state.data[0].data, 10, todate),
    });
  }

  handleFromChange = (day) => {
    this.setState({ from: day }, () => {
      this.selectDay(day, true);
      this.update_stats(this.state.to - 23400000, this.state.from - 23400000);
    });
  };

  handleToChange = (day) => {
    this.setState({ to: day }, () => {
      this.selectDay(day);
      this.update_stats(this.state.to - 23400000, this.state.from - 23400000);
    });
    this.chart.xAxis[0].setExtremes(
      this.state.data[0].data[400][0],
      this.state.data[0].data[800][0]
    );
  };
  // console.log(from);
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

  onChange = (date) => this.setState({ date });
  async componentDidMount() {
    // new WOW.WOW().init();
    // window.scrollTo(0, 0);

    const jars = await axios.get(
      "https://api.jsonbin.io/b/5e83507058b91810000cf7d6"
    );

    const nifty = await axios.get(
      "https://api.jsonbin.io/b/5e834fb6862c46101ac15bef"
    );
    const nifty50TRI = await axios.get(
      "https://api.jsonbin.io/b/5e834fe322c81b0ffa4f27ee"
    );
    const nifty50 = await axios.get(
      "https://api.jsonbin.io/b/5e834f7e862c46101ac15bdb"
    );

    const getDates = nifty.data;

    this.setState({
      data: [
        {
          name: "Nifty",
          data: nifty.data,
          lineColor: "transparent",
          visible: false,
        },
        {
          name: "Jamā wealth",
          data: jars.data,
          id: "JAMA",
        },
        {
          name: "Nifty 50 TRI",
          data: nifty50TRI.data,
        },
        {
          name: "Nifty 50",
          data: nifty50.data,
          // color: 'transparent',
          lineColor: "transparent",
        },
        {
          name: "Jamā Deployment",
          type: "flags",
          data: [
            {
              x: Date.UTC(2019, 8, 22),
              title: "JARS Deployment",
              text: "From today JARS was deployed in the market",
            },
          ],
          onSeries: "JAMA",
          shape: "sqaurepin",
          width: 50,
          height: 20,
        },
        {
          name: "Eurpean Crisis",
          type: "flags",
          data: [
            {
              x: Date.UTC(2011, 12, 20),
              title: "JARS Deployment",
              text: "From today JARS was deployed in the market",
            },
          ],
          onSeries: "JAMA",
          shape: "sqaurepin",
          width: 50,
          height: 20,
          visible: false,
        },
      ],
      from: new Date(nifty.data[0][0]),
      to: new Date(getDates.pop()[0]),
      nifty_cagr: this.get_cagr(nifty.data),
      jars_cagr: this.get_cagr(jars.data),
      redraw: 1,

      // from: moment(nifty.data[0][0]),
      // to: moment(getDates.pop()[0])
    });
    this.update_stats(this.state.to.getTime(), this.state.from.getTime());
  }

  buttonClick = (value) => {
    let newDate;
    if (value == -1) {
      newDate = new Date(new Date().getFullYear(), 0, 1);
    } else {
      newDate = moment().subtract(value, "months");
    }
    this.setState({ from: new Date(newDate) });
  };
  // to_date = this.state.to;
  // from_date = this.state.from;
  render() {
    var redraw1 = 1;
    var range_dict = [9, 4, 9, 5, 9, 6, 9, 7, 9, 9, 8];

    var default_range = this.getUrlVars()["x"];
    const { from, to } = this.state;
    const compareOptions = {
      credits: {
        enabled: false,
      },
      chart: {
        renderTo: "container",
        height: 600,
        events: {
          redraw: () => {
            this.setState({ redraw: 1 }, () => {
              if (this.state.redraw == 1) {
                this.update_stats_new(this.state.to, this.state.from);
                console.log("DETECTED CHANGE");
              }
            });
          },
        },
      },
      exporting: {
        enabled: false,
      },
      rangeSelector: {
        selected: range_dict[default_range],
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
            fontWeight: "bold",
          },
          states: {
            hover: {},
            select: {
              fill: "#039",
              style: {
                color: "white",
              },
            },
            // disabled: { ... }
          },
        },
        inputBoxBorderColor: "gray",
        inputBoxWidth: 120,
        inputBoxHeight: 18,
        inputStyle: {
          color: "#039",
          fontWeight: "bold",
        },
        labelStyle: {
          color: "silver",
          fontWeight: "bold",
        },
        buttons: [
          {
            type: "month",
            count: 1,
            text: "1m",
            events: {
              click: () => this.buttonClick(1),
            },
          },
          {
            type: "month",
            count: 3,
            text: "3m",
            events: {
              click: () => this.buttonClick(3),
            },
          },
          {
            type: "month",
            count: 6,
            text: "6m",
            events: {
              click: () => this.buttonClick(6),
            },
          },
          {
            type: "ytd",
            text: "YTD",
            events: {
              click: () => this.buttonClick(-1),
            },
          },
          {
            type: "year",
            count: 1,
            text: "1y",
            events: {
              click: () => this.buttonClick(12),
            },
          },
          {
            type: "year",
            count: 3,
            text: "3y",
            events: {
              click: () => this.buttonClick(36),
            },
          },
          {
            type: "year",
            count: 5,
            text: "5y",
            events: {
              click: () => this.buttonClick(60),
            },
          },
          {
            type: "year",
            count: 7,
            text: "7y",
            events: {
              click: () => this.buttonClick(84),
            },
          },
          {
            type: "year",
            count: 10,
            text: "10y",
            events: {
              click: () => this.buttonClick(120),
            },
          },
          {
            type: "all",
            text: "All",
            events: {
              click: () => this.buttonClick(0),
            },
          },
        ],
      },
      yAxis: {
        labels: {
          formatter: function () {
            return (this.value > 0 ? " + " : "") + this.value + "%";
          },
        },
        plotLines: [
          {
            value: 0,
            width: 2,
            color: "silver",
          },
        ],
      },
      xAxis: {
        events: {
          setExtremes: function (e) {
            // console.log("this", this);
            // console.log(e);
          },
        },
      },
      plotOptions: {
        series: {
          compare: "percent",
          showInNavigator: true,
        },
        flags: {
          height: 30,
        },
      },
      tooltip: {
        pointFormat:
          '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
        valueDecimals: 2,
        split: true,
      },
      series: this.state.data,
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
        <div style={{ width: "40%", float: "left" }}>
          <table
            id="stats_table"
            style={{
              margin: "0 auto",
              float: "centre",
              alignItems: "center",
              margintop: "auto",
              width: "70%",
              padding: 50,
            }}
          >
            <tr>
              <th>Stats</th>
              <th>JARS</th>
              <th>NIFTY</th>
            </tr>
            <tr>
              <td>CAGR</td>
              <td id="jars_cagr">{this.state.jars_cagr}</td>
              <td id="nifty_cagr">{this.state.nifty_cagr}</td>
            </tr>
            <tr>
              <td>1 Year Returns</td>
              <td id="jars_1yr">{this.state.jars_1yr_returns}</td>
              <td id="nifty_1yr">{this.state.nifty_1yr_returns}</td>
            </tr>
            <tr>
              <td>3 Year Returns</td>
              <td id="jars_3yr">{this.state.jars_3yr_returns}</td>
              <td id="nifty_3yr">{this.state.nifty_3yr_returns}</td>
            </tr>
            <tr>
              <td>5 Year Returns</td>
              <td id="jars_5yr">{this.state.jars_5yr_returns}</td>
              <td id="nifty_5yr">{this.state.nifty_5yr_returns}</td>
            </tr>
            <tr>
              <td>10 Year Returns</td>
              <td id="jars_5yr">{this.state.jars_10yr_returns}</td>
              <td id="nifty_5yr">{this.state.nifty_10yr_returns}</td>
            </tr>
          </table>
          <table
            id="std_table"
            style={{
              margin: "0 auto",
              float: "centre",
              alignItems: "center",
              margintop: "auto",
              width: "70%",
              padding: 100,
            }}
          >
            <tr>
              <th>Duration</th>
              <th>JARS</th>
              <th>NIFTY</th>
            </tr>
            <tr>
              <td>1 Year</td>
              <td>{this.state.jars1yr_sd}</td>
              <td>{this.state.nifty1yr_sd}</td>
            </tr>
            <tr>
              <td>3 Year</td>
              <td>{this.state.jars3yr_sd}</td>
              <td>{this.state.nifty3yr_sd}</td>
            </tr>
            <tr>
              <td>5 Year</td>
              <td>{this.state.jars5yr_sd}</td>
              <td>{this.state.nifty5yr_sd}</td>
            </tr>
            <tr>
              <td>10 Year</td>
              <td>{this.state.jars10yr_sd}</td>
              <td>{this.state.nifty10yr_sd}</td>
            </tr>
          </table>
        </div>

        {this.state.data && (
          <div
            style={{
              width: "100%",
              margin: "0 auto",
              maxWidth: 500,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              // float: "right"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                float: "right",
              }}
            >
              <p style={{ marginRight: 8, color: "#bbb" }}>From</p>
              <DayPickerInput
                style={{
                  border: "1px solid #ddd",
                  width: 100,
                  padding: 4,
                  // height: 30
                }}
                inputProps={{
                  style: {
                    border: "none",
                    height: "auto",
                    margin: 0,
                    textAlign: "center",
                    fontSize: 12,
                  },
                }}
                onDayChange={this.handleFromChange}
                value={from}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p style={{ marginRight: 8, color: "#bbb", marginLeft: 32 }}>
                To
              </p>
              <DayPickerInput
                style={{
                  border: "1px solid #ddd",
                  width: 100,
                  padding: 4,

                  // height: 30
                }}
                inputProps={{
                  style: {
                    border: "none",
                    height: "auto",
                    margin: 0,
                    textAlign: "center",
                    fontSize: 12,
                  },
                  readonly: true,
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
            maxWidth: 850,
            height: 1000,
            float: "right",
          }}
        >
          {this.state.data ? (
            <>
              <HighchartsReact
                style={{ heigh: 1000 }}
                ref={"chart"}
                highcharts={HighStock}
                constructorType={"stockChart"}
                // options={compareOptions}
                callback={(chart) => {
                  this.chart = chart;
                }}
                options={{
                  ...compareOptions,
                }}
              />
            </>
          ) : (
            <div
              style={{
                width: 500,
                height: 900,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class={"loader"} style={{ height: 1000 }}></div>
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
// console.log("from date is:" + from);
// console.log("to date is:" + to);

export default Compare2;
