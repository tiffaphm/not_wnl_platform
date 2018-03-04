import React from 'react';
import UpcomingJobsEntry from './UpcomingJobsEntry';
import '../../styles/Summary.css';

const NUM_TEST_JOBS = [0, 1, 2, 3, 4];

const UpcomingJobs = () => (
  <div className="upcoming-jobs-container summary-view">
    <div className="upcoming-jobs-title">
      <p>UPCOMING JOBS</p>
    </div>
    <div className="upcoming-jobs-list-container">
      {NUM_TEST_JOBS.map(job => <UpcomingJobsEntry />)}
    </div>
  </div>
);

export default UpcomingJobs;
