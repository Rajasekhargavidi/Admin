import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/about");
  }

  render() {
    return (
      <div className="container">
        <NavLink to="/signin"></NavLink>
        <div
          className="card card-login mx-auto mt-5"
          onClick={this.handleClick}
        >
          <div className="card-header">Login</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required="required"
                    autoFocus="autofocus"
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
              </div>
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value="remember-me" />
                    Remember Password
                  </label>
                </div>
              </div>
              <a className="btn btn-primary btn-block" href="./SignIn.js">
                Login
              </a>
            </form>
            <div className="text-center">
              <a className="d-block small mt-3" href="./SignUp.js">
                Register an Account
              </a>
              <a className="d-block small" href="./ForgotPassword.js">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
