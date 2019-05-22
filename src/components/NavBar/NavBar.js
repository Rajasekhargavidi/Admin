import React, { Component } from 'react'
import StratBootstrap from './StratBootstrap'
import Notifications from './Notifications'
import Messages from './Messages'
import Settings from './Settings'
import SearchBar from './SearchBar'

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
        <StratBootstrap />
        <SearchBar />
        <ul className="navbar-nav ml-auto ml-md-0">
        <Notifications />
          <Messages />
          <Settings />
          </ul>
          </nav>
    )
  }
}

export default NavBar
