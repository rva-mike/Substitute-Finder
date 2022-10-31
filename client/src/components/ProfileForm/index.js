import React from 'react';

export const ProfileForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">About</label>
        <input
          type="about"
          className="form-control"
          id="about"
          placeholder="Please input what subjects you enjoy teaching."
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Check box if you have an associates or bachelor degree.</label>
        <input
                type={`checkbox`}
                name="CollegeDegree"
                id="collegedegree"
              ></input>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default ProfileForm;
