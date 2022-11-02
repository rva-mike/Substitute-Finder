import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, title}) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>;
  }
  console.log(jobs);
  return (
    <div className='job-list-container'>
      <h3 className='list-heading text-center mb-4 mt-2'>{title}</h3>
      {jobs &&
        jobs.filter(job => job.active === true)
        .map(job => (
          <div key={job._id} className="card col-12 mb-3">
            <p className="card-header job-list-header">
              <Link
                to={`/profile/${job.username}`}
                style={{ fontWeight: 700 }}
                className="text-dark"
              >
                {job.username}&nbsp;
              </Link>{' '}
              {job.createdAt}
            </p>
            <div className="card-body text-center">
              <Link to={`/job/${job._id}`}>
              <p className='text-dark job-description'>{job.description}</p>
              <hr></hr>
                <p><b>Date(s): </b>{job.dates}<br /><b>School: </b> {job.school}<br />{job.grade} grade | {job.subject}</p>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default JobList;