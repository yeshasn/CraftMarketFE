import React, { Component } from "react";
import "./SignUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      pwd: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, phone, pwd } = this.state;
    console.log(name, phone, pwd);
    fetch("http://localhost:5005/register", {
      method: "POST",
      mode: "cors",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        phone,
        pwd,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <h3 className="signup-heading">Sign Up</h3>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="First Last"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>

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
                Create Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder=""
                onChange={(e) => this.setState({ pwd: e.target.value })}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </div>

            <p className="login-link">
              Already registered? <a href="/sign-in">Sign back in</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
