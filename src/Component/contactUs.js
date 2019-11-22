import React from "react";
import "../css/style.css";
import Header from "./Header";
import Footer from "./Footer";

export default class ContactUs extends React.Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    error: "",
    loading: false,
    success: false
  };

  async componentDidMount() {
    // const response = await fetch();
  }

  onValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ""
    });
  };

  onSubmitPress = async () => {
    const { name, email, mobile } = this.state;
    if (!name.length) {
      this.setState({
        error: "* Name cannot be empty"
      });
      return;
    } else if (email.indexOf("@") == -1) {
      this.setState({
        error: "* Invalid email"
      });
      return;
    } else if (mobile.length !== 10) {
      this.setState({
        error: "* Invalid mobile number."
      });
      return;
    }

    this.setState({
      loading: true
    });

    try {
      const response = await fetch("https://ref.jama.co.in/app/api/newsendy", {
        method: "post",
        crossDomain: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          mobile_number: mobile
        })
      });
      this.setState({
        loading: false,
        success: true
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: "* Something went wrong."
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div
          class="jars-section-title-heading"
          style={{ marginTop: 100, marginBottom: 0 }}
        >
          <h4>Contact Us</h4>
        </div>

        <div style={{ textAlign: "center" }}>
          <iframe
            src="https://www.jama.co.in/app/contact/stock/advisor/"
            frameBorder="0"
            className="contactus"
            scrolling="no"
          ></iframe>
        </div>
        <Footer />
      </div>
    );
  }
}
