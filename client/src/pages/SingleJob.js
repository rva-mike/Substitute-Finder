import React from 'react';
import { useParams } from 'react-router-dom';

import CandidateList from '../components/CandidateList';
import CandidateForm from '../components/CandidateForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_JOB } from '../utils/queries';

const SingleJob = (props) => {
  const { id: jobId } = useParams();

  const { loading, data } = useQuery(QUERY_JOB, {
    variables: { id: jobId },
  });

  const job = data?.job || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {job.username}
          </span>
        </p>
        <div className="card-body">
          <p>{job.description}</p>
        </div>
      </div>

      {job.candidateCount > 0 && (
        <JobList candidates={job.candidates} />
      )}

      {Auth.loggedIn() && <JobForm jobId={job._id} />}
    </div>
  );
};

export default SingleJob;
