import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, title}) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>;
  }
  console.log(jobs);
  return (
    <div className=''>
      <h3 className='list-heading'>{title}</h3>
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
              job on {job.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/job/${job._id}`}>
                <p>{job.dates} | {job.grade} grade | {job.subject} | {job.school}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobList;