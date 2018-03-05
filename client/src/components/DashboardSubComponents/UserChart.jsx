import React, { Component } from 'react';
import { AreaChart, Area, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import '../styles/UserChart.css';

class UserChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Feb 20', amt: 50},
        {name: 'Feb 21', amt: 40},
        {name: 'Feb 22', amt: 105},
        {name: 'Feb 23', amt: 75},
        {name: 'Feb 24', amt: 35},
        {name: 'Feb 25', amt: 80},
        {name: 'Feb 26', amt: 96},
      ],
      colors: ['#FBDC4A', '#FFC900', '#FFE893'],
    };
  }

  render() {
    return (
      <div className="user-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={this.state.data} margin={{left: -4}}>
            <Tooltip />
            <XAxis dataKey="name"/>
            <Area dataKey="amt" stroke={this.state.colors[0]} fill={this.state.colors[0]} strokeWidth={2} activeDot={{r: 8}} />
          </AreaChart>
        </ResponsiveContainer>
        <div className="user-chart-footer">
        </div>
      </div>
    );
  }
}

export default UserChart;
