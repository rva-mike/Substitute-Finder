import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, title }) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>;
  }

  return (
    <div className=''>
      <h3 className='list-heading'>{title}</h3>
      {jobs &&
        jobs.filter(job => job.active === true)
        .map(job => (
          <div key={job._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${job.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {job.username}
              </Link>{' '}
              job on {job.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/job/${job._id}`}>
                <p><b>Date(s): </b>{job.dates}<br />{job.grade} grade | {job.subject}</p>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default JobList;