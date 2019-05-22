import React, { Component } from 'react'

class StratBootstrap extends Component {
  render() {
    return (
              <div className="navbar navbar-expand navbar-dark bg-dark static-top">
      <a className="navbar-brand mr-1" href="/">Start Bootstrap</a>
      <button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <i className="fas fa-bars"></i>
      </button>
      </div>
    )
  }
}

export default StratBootstrap
