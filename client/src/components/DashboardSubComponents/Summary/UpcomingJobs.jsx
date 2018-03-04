import React from 'react';
import UpcomingJobsEntry from './UpcomingJobsEntry';
import '../../styles/Summary.css';

const UpcomingJobs = () => (
  <div className="upcoming-jobs-container summary-view">
    <div className="upcoming-jobs-title">
      <p>UPCOMING JOBS</p>
    </div>
    <div className="upcoming-jobs-list-container">
      <UpcomingJobsEntry />
    </div>
  </div>
);

export default UpcomingJobs;
