import React, { Component } from 'react'

class Settings extends Component {
  render() {
    return (
      <div className  = "ui settings">
             <div className="nav-item dropdown no-arrow">
          <a className="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user-circle fa-fw"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a className="dropdown-item" href="/">Settings</a>
            <a className="dropdown-item" href="/">Activity Log</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/" data-toggle="modal" data-target="/logoutModal">Logout</a>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Settings
