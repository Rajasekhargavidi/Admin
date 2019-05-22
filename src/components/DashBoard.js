import React, { Component } from 'react'
import '../assets/css/sb-admin.css'
import NavBar from './NavBar/NavBar'
import OverView from './mainBar/OverView';
import AreaChart from './mainBar/AreaChart';
import DataTable from './mainBar/DataTable';
import SideBar from './SideBar/SideBar';

 class DashBoard extends Component {    
  render() {
    return (
      <div className = "ui-dashboard">
          <NavBar />
            <div id="wrapper"> 
              <SideBar />
                <div id="content-wrapper">
                   <OverView />
                      <AreaChart /> 
                         <DataTable />
                       </div> 
                      </div> 
                     </div>
                  )
        }
      }

export default DashBoard
