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
          style={{ marginTop: 80, marginBottom: 0 }}
        >
          <h4>Contact Us</h4>
        </div>
        <div class="row contact-container">
          {this.state.error && (
            <p style={{ color: "red", fontSize: 12, margin: 0 }}>
              {this.state.error}
            </p>
          )}

          {this.state.success && (
            <p style={{ color: "#1553a5", fontSize: 12, margin: 0 }}>
              Thanks for reaching out. We will get back to you soon.
            </p>
          )}
          <label
            style={{
              fontSize: 14,
              color: "#37474F",
              fontWeight: "bold",
              paddingTop: 16
            }}
          >
            Name
          </label>
          <input
            style={{
              border: "1px solid #ddd",
              paddingLeft: 4,
              borderRadius: 4,
              marginBottom: 16,
              marginTop: 4,
              height: 36
            }}
            value={this.state.name}
            placeholder="Enter your name"
            name="name"
            type="text"
            onChange={this.onValueChange}
          />

          <label style={{ fontSize: 14, color: "#37474F", fontWeight: "bold" }}>
            Email
          </label>
          <input
            style={{
              border: "1px solid #ddd",
              paddingLeft: 4,
              borderRadius: 4,
              marginBottom: 16,
              marginTop: 4,
              height: 36
            }}
            placeholder="Enter your email"
            name="email"
            type="email"
            onChange={this.onValueChange}
            value={this.state.email}
          />

          <label style={{ fontSize: 14, color: "#37474F", fontWeight: "bold" }}>
            Mobile
          </label>
          <input
            style={{
              border: "1px solid #ddd",
              paddingLeft: 4,
              borderRadius: 4,
              marginBottom: 16,
              marginTop: 4,
              height: 36
            }}
            type="number"
            placeholder="Enter your mobile number"
            name="mobile"
            onChange={this.onValueChange}
            value={this.state.mobile}
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            {!this.state.loading ? (
              <div
                style={{
                  cursor: "pointer",
                  backgroundColor: "rgb(252, 191, 8) ",
                  borderRadius: 4,
                  padding: "8px 16px",
                  color: "#fff",
                  marginTop: 16,
                  marginBottom: 16,
                  color: "#000"
                }}
                onClick={this.onSubmitPress}
              >
                Contact Advisor
              </div>
            ) : (
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
          {/* <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input
                  disabled
                  value="I am not editable"
                  id="disabled"
                  type="text"
                  class="validate"
                />
                <label for="disabled">Disabled</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                This is an inline input field:
                <div class="input-field inline">
                  <input id="email_inline" type="email" class="validate" />
                  <label for="email_inline">Email</label>
                  <span
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Helper text
                  </span>
                </div>
              </div>
            </div>
          </form> */}
        </div>
        <Footer />
      </div>
    );
  }
}
