import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Blank extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <NavLink to="/blank"></NavLink>
          <a className="navbar-brand mr-1" href="/">
            Start Bootstrap
          </a>
          <button
            className="btn btn-link btn-sm text-white order-1 order-sm-0"
            id="sidebarToggle"
            href="/"
          >
            <i className="fas fa-bars" />
          </button>
          <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </form>

          <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw" />
                <span className="badge badge-danger">9+</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-envelope fa-fw" />
                <span className="badge badge-danger">7</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="messagesDropdown"
              >
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle fa-fw" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="/">
                  Settings
                </a>
                <a className="dropdown-item" href="/">
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="/"
                  data-toggle="modal"
                  data-target="/logoutModal"
                >
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <div id="wrapper">
          <ul className="sidebar navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="pagesDropdown"
                role="button"
                data-toggle="dropDown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-fw fa-folder" />
                <span>Pages</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown" role = "button">
                <h6 className="dropdown-header">Login Screens:</h6>
                <a className="dropdown-item" href="/signin">
                  Login
                </a>
                <a className="dropdown-item" href="/signup">
                  Register
                </a>
                <a className="dropdown-item" href="/forgotpassword">
                  Forgot Password
                </a>
                <div className="dropdown-divider" />
                <h6 className="dropdown-header">Other Pages:</h6>
                <a className="dropdown-item" href="/error">
                  404 Page
                </a>
                <a className="dropdown-item active" href="/blank">
                  Blank Page
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/charts">
                <i className="fas fa-fw fa-chart-area" />
                <span>Charts</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tables">
                <i className="fas fa-fw fa-table" />
                <span>Tables</span>
              </a>
            </li>
          </ul>

          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Blank Page</li>
              </ol>

              <h1>Blank Page</h1>
              <hr />
              <p>This is a great starting point for new custom pages.</p>
            </div>

            <footer className="sticky-footer">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2019</span>
                </div>
              </div>
            </footer>
          </div>
        </div>

        <a className="scroll-to-top rounded" href="/page-top">
          <i className="fas fa-angle-up" />
        </a>

        <div
          className="modal fade"
          id="logoutModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="/signin">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blank;
