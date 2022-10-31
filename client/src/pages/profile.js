import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import FriendList from '../components/FriendList';
import ImageUpload from '../components/ImageUpload';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { Container } from '../components/Container';


import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
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

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

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

      {userParam && (
        <button className="btn ml-auto" onClick={handleClick}>
          Add Friend
        </button>
      )}
    </div>

    <div className="flex-row mb-3">
      <h2 className="bg-dark text-secondary p-3 display-inline-block">
          <Navbar/>
        </h2>
        </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <JobList
            school={user.school}
            jobs={user.jobs}
            title={`${user.username}'s jobs...`}
          />
        </div>

        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
          <Container triggerText={triggerText} onSubmit={onSubmit} />
        <div id='contactnav' className="flex-row mb-3">
      <h2 className="bg-dark text-secondary p-3 display-inline-block">
          <Contact/>
        </h2>
        </div>
      </div>
      <div className="mb-3">{!userParam && <JobForm />}</div>
    </div>
  );
};

export default Profile;
