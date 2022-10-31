import {React, useState} from 'react';
import Modal from 'react-modal';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_ME } from '../../utils/mutations';
import {QUERY_ME} from '../../utils/queries';

// import { ProfileForm } from '../ProfileForm';

const customStyles = {
  content: {
    top: '20%',
    left: '20%',
    right: '20%',
    bottom: '20%',
    marginRight: '-20%',
    transform: 'translate(-20%, -20%)',
  },
};

const ProfileModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const { data: userData } = useQuery(QUERY_ME);

  const [userText, setText] = useState({
    email: userData.me.email,
    phone_number: userData.me.phone_number,
    degree: userData.me.phone_number,
    about: userData.me.phone_number,
  });

  const [updateMe, { error }] = useMutation(UPDATE_ME);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setText({
      ...userText,
      [name]: value,
    });
    console.log(userText);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateMe({
        variables: { ...userText },
      });

    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <button className='btn btn-lg btn-info' onClick={openModal}>Edit Profile</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Profile Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit Profile</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Email:</label>
          <input
            placeholder={userData?.me.email || '(Ex: someone@gmail.com)'}
            type="text"
            name="email"
            className="form-input col-12 col-md-12"
            onChange={handleChange}
          ></input>
          <label>Phone Number:</label>
          <input
            placeholder={userData?.me.phone_number || '(Ex: 555-555-5555)'}
            type="text"
            name="phone_number"
            className="form-input col-12 col-md-12"
            onChange={handleChange}
          ></input>
          <label>I have an associates or bachelor degree:</label>
          <input
            placeholder={userData.me.degree}
            type={`checkbox`}
            name="degree"
            id="degree"
            className='ml-3 form-checkbox-input'
            onChange={handleChange}
          ></input>
          <label className='w'>About Me:</label>
          <textarea
            placeholder={userData?.me.about || 'Tell us a little about yourself! (ex. your preferred subject, grade level to work with, etc.)'}
            name="about"
            id="about"
            className="form-input col-12 col-md-12"
            onChange={handleChange}
          ></textarea>
          <button className='btn btn-success m-1' type='submit'>Save</button>
          <button className="btn btn-danger m-1" onClick={closeModal}>Exit</button>
        </form>
      </Modal>
    </div>
  );
}

export default Modal;