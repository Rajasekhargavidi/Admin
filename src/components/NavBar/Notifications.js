import React, { Component } from 'react'

class Notifications extends Component {
  render() {
    return (
        <div className="navbar-nav ml-auto ml-md-0">
        <div className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger">9+</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
            <a className="dropdown-item" href="/">Action</a>
            <a className="dropdown-item" href="/">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/">Something else here</a>
          </div>
        </div>
        </div>
    )
  }
}

export default Notifications
