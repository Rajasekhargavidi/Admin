import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
        <div id="wrapper">
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/forgotpassword"  id="pagesDropdown" role = "button" data-toggle = "dropDown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Login Screens:</h6>
            <a className="dropdown-item" href = "/signin" >Login</a>
            <a className="dropdown-item" href = "/signup">Register</a>
            <a className="dropdown-item" href = "/forgotpassword">Forgot Password</a>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">Other Pages:</h6>
            <a className="dropdown-item" href="/errors">404 Page</a>
            <a className="dropdown-item" href="/blank">Blank Page</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href ="charts">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="tables">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></a>
        </li>
      </ul>
      </div>
    )
  }
}

export default SideBar
