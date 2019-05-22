import React, { Component } from 'react'

class Messages extends Component {
  render() {
    return (
      <div className = "navbar-messages">
              <div className="nav-item dropdown no-arrow mx-1">
          <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger">7</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown ">
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

export default Messages
