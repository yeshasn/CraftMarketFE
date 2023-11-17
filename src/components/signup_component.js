import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Last"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>

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
          <label>Create Password</label>
          <input
            type="password"
            className="form-control"
            placeholder=""
            onChange={(e) => this.setState({ pwd: e.target.value })}
          />
        </div>

        {/* <div className="mb-3">
          <label>Confirm Password</label>
          <input type="password" className="form-control" placeholder="" />
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/sign-in">Sign back in</a>
        </p>
      </form>
    );
  }
}
