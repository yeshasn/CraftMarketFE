import { useEffect } from "react";
import { useLocation} from "react-router-dom";
import React, { Component } from "react";




export default class UpdateUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          phone: "",
          userData: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        fetch("http://localhost:5005/userData", {
          method: "POST",
          mode: "cors",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            this.setState({ userData: data.data });
          });
          
      }


      handleSubmit(e) {
        e.preventDefault();
        const {name, phone} = this.state;
        const oldPhone = this.state.userData.phone;
        console.log(name, phone, oldPhone);

        fetch("http://localhost:5005/UpdateUser", {
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
            oldPhone
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "UpdateUser");
          });
          
      }

    

    render() {
        return (<form onSubmit={this.handleSubmit}>
            <h3>Edit Info</h3>
            
            <div className="mb-3">
            <label>New Name</label>
            <input
                type="text"
                className="form-control"
                placeholder="First Last"
                onChange={(e) => this.setState({ name: e.target.value })}
            />
            </div>
    
            <div className="mb-3">
            <label>New Phone Number</label>
            <input
                type="text"
                className="form-control"
                placeholder="1234567890"
                onChange={(e) => this.setState({ phone: e.target.value })}
            />
            </div>
    
    
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
    
        </form>)
        
    }
}       

