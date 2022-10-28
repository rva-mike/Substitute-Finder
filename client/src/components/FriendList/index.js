import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ jobCount, username, jobs }) => {
  if (!jobs || !jobs.length) {
    return <p className="bg-dark text-light p-3">{username}, create some jobs!</p>;
  }

  return (
    <div>
      <h5>
        {username}'s {jobCount} {jobCount === 1 ? 'friend' : 'friends'}
      </h5>
      {jobs.map(job => (
        <button className="btn w-100 display-block mb-2" key={job._id}>
          <Link to={`/job/${job._id}`}>{job._id}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;
