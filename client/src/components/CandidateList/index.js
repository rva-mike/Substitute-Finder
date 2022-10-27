import React from 'react';
import { Link } from 'react-router-dom';

const CandidateList = ({ users }) => {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <span className="text-light">Candidates</span>
      </div>
      <div className="card-body">
        {users &&
          users.map(user => (
            <p className="pill mb-3" key={user._id}>
              {user.email} //{' '}

            </p>
          ))}
      </div>
    </div>
  );
};

export default CandidateList;
