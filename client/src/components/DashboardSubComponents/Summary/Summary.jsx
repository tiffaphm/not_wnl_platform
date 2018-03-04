import React from 'react';
import UpcomingJobs from './UpcomingJobs';
import Stats from './Stats';
import '../../styles/Summary.css';

const Summary = () => (
  <div className="summary-container">
    <UpcomingJobs />
    <Stats />
  </div>
);

export default Summary;
