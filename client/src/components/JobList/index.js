import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, title }) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {jobs &&
        jobs.map(job => (
          <div key={job._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${job.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {job.username}
              </Link>{' '}
            </p>
            <div className="card-body">
              <Link to={`/thought/${job._id}`}>
                <p>{job.description}</p>
                <p className="mb-0">
                  Candidates: {job.candidateCount} || Click to{' '}
                  {job.candidateCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobList;
