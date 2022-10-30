import React from 'react';
import JobList from '../components/JobList';
import JobForm from '../components/JobForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_JOBS, QUERY_ME } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_JOBS);
  const { data: userData } = useQuery(QUERY_ME);
  const jobs = data?.jobs || [];
  const admin = userData?.me.admin || "";
  const myJobs = userData?.me.jobs || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
      {loggedIn && admin && (
          <div className={`col-12 col-lg-3 mb-3`}>
            <JobForm />
          </div>
        )}
        {loggedIn && !admin && (
          <div className={`col-12 mb-3`}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <JobList
                jobs={jobs}
                title="Available Jobs"
              />
            )}
          </div>
        )}
        {loggedIn && admin && (
          <div className={`col-12 mb-3 col-lg-8`}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <JobList
                jobs={myJobs}
                title="My Jobs"
              />
            )}
          </div>
        )}
        {!loggedIn && (
          <div>
            <h1 >Welcome to Sub-Atomic!</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;