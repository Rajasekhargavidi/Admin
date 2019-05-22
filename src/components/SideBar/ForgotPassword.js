import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ForgotPassword extends Component {
  render() {
    return (
      <div className="container">
        <NavLink to="/forgotpassword"></NavLink>
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Reset Password</div>
          <div className="card-body">
            <div className="text-center mb-4">
              <h4>Forgot your password?</h4>
              <p>
                Enter your email address and we will send you instructions on
                how to reset your password.
              </p>
            </div>
            <form>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Enter email address"
                    required="required"
                    autoFocus="autofocus"
                  />
                  <label htmlFor="inputEmail">Enter email address</label>
                </div>
              </div>
              <a className="btn btn-primary btn-block" href="signin">
                Reset Password
              </a>
            </form>
            <div className="text-center">
              <a className="d-block small mt-3" href="signup">
                Register an Account
              </a>
              <a className="d-block small" href="signin">
                Login Page
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
