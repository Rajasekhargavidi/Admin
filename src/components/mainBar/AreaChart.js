import React, { Component } from 'react'

class AreaChart extends Component {
  render() {
    return (
        <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-chart-area"></i>
              Area Chart Example</div>
            <div className="card-body">
              <canvas id="myAreaChart" width="100%" height="30"></canvas>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
    )
  }
}

export default AreaChart
