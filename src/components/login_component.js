import React, { Component } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
        if (data.status == "ok") {
          window.localStorage.setItem("token", data.data);
          window.location.href = "./home";
          // useNavigate("/userDetails");
        } else {
          alert("Invalid credentials! Please try again.");
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="1234567890"
            onChange={(e) => this.setState({ phone: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ pwd: e.target.value })}
          />
        </div>

        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">No account? Sign up</a>
        </p>
      </form>
    );
  }
}
