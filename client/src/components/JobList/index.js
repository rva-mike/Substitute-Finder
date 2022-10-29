import React from 'react';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, title }) => {
  if (!jobs.length) {
    return <h3>No Jobs Yet</h3>;
  }

  return (
    <div>
      <h3 className='list-heading'>Substitute Teacher Needed:</h3>
      {jobs &&
        jobs.map(job => (
          <div key={job._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${job.username}`  }
                style={{ fontWeight: 700 }}
                // className="text-dark"
              >
                {job.username}&nbsp;
              </Link>{' '}
              <span className='date'>posted {job.createdAt}</span>
            </p>
            <div className="card-body">
              <Link to={`/job/${job._id}`}>
                <p>{job.dates} | {job.grade} grade | {job.subject}</p>
              <Link className='' to={`/job/${job._id}`}>
                <p className=''>{job.jobText}</p>
                <p className="mb-0">
                  Comments: {job.reactionCount} || Click to{' '}
                  {job.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobList;
