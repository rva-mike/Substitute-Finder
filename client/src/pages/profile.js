import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import ImageUpload from '../components/ImageUpload';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { Container } from '../components/Container';


import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  const triggerText = 'Edit Profile';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.email.value);
    console.log(event.target.about.value);
  };

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;
  }
  console.log(user);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
    <div className="container-image">
    <h2 className="bg-dark text-secondary p-3 display-inline-block">
        <ImageUpload/>
      </h2>

    </div>

    <div className="flex-row mb-3">
      <h2 className="bg-dark text-secondary p-3 display-inline-block">
        Viewing {`${user.username}'s`} profile.
      </h2>
    </div>

    <div className="flex-row mb-3">
      <h2 className="bg-dark text-secondary p-3 display-inline-block">
          <Navbar/>
        </h2>
        </div>

      <div className="flex-row justify-space-between mb-3">


          <Container triggerText={triggerText} onSubmit={onSubmit} />
        <div id='contactnav' className="flex-row mb-3">
      <h2 className="bg-dark text-secondary p-3 display-inline-block">
          <Contact/>
        </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
