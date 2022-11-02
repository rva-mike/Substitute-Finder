import { React, useState } from "react";
import Modal from "react-modal";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_ME } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
Modal.setAppElement('#root')
// import { ProfileForm } from '../ProfileForm';

const customStyles = {
  content: {
    top: "20%",
    left: "30%",
    right: "20%",
    bottom: "20%",
    marginRight: "-20%",
    transform: "translate(-20%, -20%)",
  },
};

const ProfileModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data } = useQuery(QUERY_ME);

  const userData = data?.me || {};

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }


  const [userText, setText] = useState({
    email: userData.email,
    phone: userData.phone,
    degree: userData.degree,
    about: userData.about,
  });

  const [updateMe, { error }] = useMutation(UPDATE_ME);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    const degree = document.getElementById("degree").checked;
    setText({
      ...userText,
      [name]: value,
      degree: degree,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateMe({
        variables: { ...userText },
      });
      closeModal();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <button
        className="btn no-border-btn btn-primary edit-btn mr-auto ml-auto mb-3 "
        onClick={openModal}
      >
        Edit Profile
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Profile Modal"

      >
        <h2 className="text-dark" ref={(_subtitle) => (subtitle = _subtitle)}>Edit Profile</h2>
        <form className="flex-row" onSubmit={handleFormSubmit}>
          <label>Email:</label>
          <input
            placeholder={userData?.email || "(Ex: someone@gmail.com)"}
            type="text"
            name="email"
            className="form-input col-12 col-md-12"
            onChange={handleChange}
          ></input>
          <label>Phone Number:</label>
          <input
            placeholder={userData?.phone || "(Ex: 555-555-5555)"}
            type="text"
            name="phone"
            className="form-input col-12 col-md-12"
            onChange={handleChange}
          ></input>
          <label>I have an associates or bachelor degree:</label>
          <input
            type={`checkbox`}
            checked={userData?.degree}
            name="degree"
            id="degree"
            className="ml-3 form-checkbox-input checkbox"
            onChange={handleChange}
          ></input>
          <div className="w-100">
            <label htmlFor="about" className="w">
              About Me:{" "}
            </label>
          </div>
          <textarea
            placeholder={
              userData?.about ||
              "Tell us a little about yourself! (ex. your preferred subject, grade level to work with, etc.)"
            }
            name="about"
            id="about"
            className="form-input col-12 col-md-12"
            onChange={handleChange}
          ></textarea>
          <button className="btn no-border-btn btn-success m-1" type="submit">
            Save
          </button>
          <button className="btn no-border-btn btn-danger m-1" onClick={closeModal}>
            Exit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default ProfileModal;
