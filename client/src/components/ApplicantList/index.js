import React from 'react';
import { Link } from 'react-router-dom';

const ApplicantList = ({ applications }) => {
    console.log(applications);
    return (
        <div>
          {applications.map(application => (
              <p className= "mb-3" key={application._id}>
                <Link to={`/profile/${application.username}`} style={{ fontWeight: 700 }}>
                  {application.username}
                </Link>
                <br />
                Email: {application.email}
                <br />
                Has Degree: {application.degree}
                <br />
                About: {application.about}
              </p>
            ))}
        </div>
    );
  };

  export default ApplicantList;