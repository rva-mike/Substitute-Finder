import React from 'react';
import { Link } from 'react-router-dom';

const ApplicantList = ({ applications }) => {
    console.log(applications);
    return (
        <div className='application-cards'>
          {applications.map(application => (
            <div className='card'>
                <h5 className="card-header" key={application._id}>
                  <Link to={`/profile/${application.username}`} style={{ fontWeight: 700 }}>
                    {application.username}
                  </Link></h5>
                <p className= "m-2"> 
                  Email: {application.email}
                  <br />
                  Phone: {application.phone}
                  <br />
                  Has Degree: {application.degree}
                </p>
            </div>
            ))}
        </div>
    );
  };

  export default ApplicantList;