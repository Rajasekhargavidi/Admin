import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Charts extends Component {
  render() {
    return (
      <React.Fragment>
        <NavLink to="/charts"></NavLink>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
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
                href=""
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
                href="/"
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
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-fw fa-folder" />
                <span>Pages</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                <h6 className="dropdown-header">Login Screens:</h6>
                <a className="dropdown-item" href="login.html">
                  Login
                </a>
                <a className="dropdown-item" href="register.html">
                  Register
                </a>
                <a className="dropdown-item" href="forgot-password.html">
                  Forgot Password
                </a>
                <div className="dropdown-divider" />
                <h6 className="dropdown-header">Other Pages:</h6>
                <a className="dropdown-item" href="404.html">
                  404 Page
                </a>
                <a className="dropdown-item" href="blank.html">
                  Blank Page
                </a>
              </div>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area" />
                <span>Charts</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tables">
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
                <li className="breadcrumb-item active">Charts</li>
              </ol>

              <div className="card mb-3">
                <div className="card-header">
                  <i className="fas fa-chart-area" />
                  Area Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myAreaChart" width="100%" height="30" />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>

              <div className="row">
                <div className="col-lg-8">
                  <div className="card mb-3">
                    <div className="card-header">
                      <i className="fas fa-chart-bar" />
                      Bar Chart Example
                    </div>
                    <div className="card-body">
                      <canvas id="myBarChart" width="100%" height="50" />
                    </div>
                    <div className="card-footer small text-muted">
                      Updated yesterday at 11:59 PM
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card mb-3">
                    <div className="card-header">
                      <i className="fas fa-chart-pie" />
                      Pie Chart Example
                    </div>
                    <div className="card-body">
                      <canvas id="myPieChart" width="100%" height="100" />
                    </div>
                    <div className="card-footer small text-muted">
                      Updated yesterday at 11:59 PM
                    </div>
                  </div>
                </div>
              </div>

              <p className="small text-center text-muted my-5">
                <em>More chart examples coming soon...</em>
              </p>
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
                <a className="btn btn-primary" href="login.html">
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

export default Charts;
