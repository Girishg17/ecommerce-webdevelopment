import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './signup.css'
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      tologin: false,
    };
    this.changefullname = this.changefullname.bind(this);
    this.changeusername = this.changeusername.bind(this);
    this.changeemail = this.changeemail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changelogin = this.changelogin.bind(this);

  }
  changefullname(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeusername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  changelogin() {
    this.setState({tologin:true});
  }

  onSubmit(event) {
    event.preventDefault();
    const registerd = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(registerd);
    axios
      .post("http://localhost:4000/app/signup", registerd)
      .then((response) => {
        console.log(response.data);
        this.changelogin();
      });
  }
  render() {
  
    return (
      <div className="total">
        
          {this.state.tologin ? (
            <Redirect to = "/login" />
          ) : (
            <div className="formDiv">
              <h1>Signup</h1>
              <form onSubmit={this.onSubmit} className="form">
                <input
                  type="text"
                  placeholder="Fullname"
                  onChange={this.changefullname}
                  value={this.state.fullName}
                  className='input1'
                />
                <br />
                <input
                  type="text"
                  placeholder="Username"
                  onChange={this.changeusername}
                  value={this.state.username}
                className="input2"
                />
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  onChange={this.changeemail}
                  value={this.state.email}
                className="input3"
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.changepassword}
                  value={this.state.password}
                  className="input4"
                  
                />
                <br />
                <button type="submit"  className="input4" >SIGNUP</button>
               <button onClick={()=>{<Redirect to='/login'/>}} className="input5">CANCEL</button>
              </form>
           
            </div>
          )}
        </div>
   
    );
  }
}
export default Signup;
