import React from 'react';
import '../../styles/Summary.css';

const Stats = () => (
  <div className="stats-container summary-view">
    <div className="stats-title">
      <p>USER STATS</p>
    </div>
    <div className="stats-list-container">
      <div className="stats-current-rating stats-entry">
        <span>RATING</span>
        <span className="stats-number">4.8</span>
      </div>
      <div className="stats-jobs-completed stats-entry">
        <span>JOBS COMPLETED</span>
        <span className="stats-number">35</span>
        <span>DAYS WORKED</span>
        <span className="stats-number">42</span>
      </div>
    </div>
  </div>
);

export default Stats;
