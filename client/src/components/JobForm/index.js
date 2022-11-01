import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { ADD_JOB } from "../../utils/mutations";
import { QUERY_JOBS, QUERY_ME } from "../../utils/queries";

const JobForm = () => {
  const { data: userData } = useQuery(QUERY_ME);
  const school = userData.me.school;
  const [jobText, setText] = useState({
    active: true,
    subject: "",
    grade: "",
    dates: "",
    description: "",
    school: school,
  });
  const [characterCount, setCharacterCount] = useState(0);
  const [addJob, { error }] = useMutation(ADD_JOB, {
    update(cache, { data: { addJob } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });

        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, jobs: [...me.jobs, addJob] } },
        });
      } catch (e) {
        console.warn("First job insertion by user!");
      }

      // update job array's cache
      const { jobs } = cache.readQuery({ query: QUERY_JOBS });
      cache.writeQuery({
        query: QUERY_JOBS,
        data: { jobs: [addJob, ...jobs] },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setText({
      ...jobText,
      [name]: value,
    });
    console.log(jobText);
    if (document.getElementById("description").value.length <= 280) {
      setCharacterCount(document.getElementById("description").value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addJob({
        variables: { ...jobText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="text-center mb-3">
        <a href="#job-list">
          <button className="btn hide"> View Your Jobs</button>
        </a>
      </div>
      <div className="card">
        <h5 className="card-header">Create a new Job!</h5>
        <div className="card-body m-2">
          <form
            className="flex-row justify-center justify-space-between-md align-stretch"
            onSubmit={handleFormSubmit}
          >
            <label className="text-dark">Subject:</label>
            <input
              placeholder="Mathematics, Social Studies, etc..."
              type="text"
              name="subject"
              className="form-input col-12 col-md-12"
              onChange={handleChange}
            ></input>
            <label className="text-dark">Grade:</label>
            <input
              placeholder="4th, 9th, 11th, etc..."
              type="text"
              name="grade"
              className="form-input col-12 col-md-12"
              onChange={handleChange}
            ></input>
            <label className="text-dark">Dates:</label>
            <input
              placeholder="(ex. November 12th-16th)"
              type="text"
              name="dates"
              className="form-input col-12 col-md-12"
              onChange={handleChange}
            ></input>
            <label className="text-dark">Description:</label>
            <textarea
              placeholder="Your responsibilities will be..."
              name="description"
              id="description"
              className="form-input col-12 col-md-12"
              onChange={handleChange}
            ></textarea>
            <p
              className={`m-0 ${characterCount === 280 || error ? "text-error" : ""
                }`}
            >
              Character Count: {characterCount}/280
              {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <div className="w-75 mr-auto ml-auto text-center">
              <br />
              <button className="btn no-border-btn btn-primary mt-0 col-12 w-100 text-center" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobForm;
