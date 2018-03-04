import React from 'react';
import '../../styles/Summary.css';

const UpcomingJobsEntry = () => (
  <div className="upcoming-jobs-entry-container">
    <div className="upcoming-job-entry-lead-wrapper">
      <span className="upcoming-job-type">
        <span>job type</span>
      </span>
      <span className="upcoming-job-date">
        Feb 20 2018 | 11:00 am
      </span>
    </div>
    <div className="upcoming-job-details-wrapper">
      <span className="upcoming-job-entry-title">
        JOB TITLE
      </span>
      <span className="upcoming-job-details-brief">
        location details and other details will go here. this is filler text for now until details come in.
      </span>
    </div>
    <div className="upcoming-job-details-button-wrapper">
      <button className="expand-button">MORE</button>
    </div>
  </div>
);

export default UpcomingJobsEntry;
