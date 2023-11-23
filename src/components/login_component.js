import React, { Component } from "react";
import "./Login.css"; // Import your CSS file for additional styling

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      pwd: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { phone, pwd } = this.state;
    console.log(phone, pwd);
    fetch("http://localhost:5005/login-user", {
      method: "POST",
      mode: "cors",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        phone,
        pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          window.localStorage.setItem("token", data.data);
          window.location.href = "./home";
        } else {
          alert("Invalid credentials! Please try again.");
        }
      });
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <h3 className="login-heading">Sign In</h3>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="1234567890"
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                onChange={(e) => this.setState({ pwd: e.target.value })}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>

            <p className="signup-link">
              <a href="/sign-up">No account? Sign up</a>
            </p>
          </form>
        </div>
        <div className="slogan">
          <h2>CraftMarket</h2>
          <p>Where Artisans Thrive, and Every Creation Tells a Tale.</p>
        </div>
      </div>
    );
  }
}
