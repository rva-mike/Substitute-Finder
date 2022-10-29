import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaReact } from "react-icons/fa";
import { Animated } from "react-animated-css";

import logo from './logo.svg';
import './App.css';




const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-dark mb-4 py-2 flex-row align-center text-white">
      <div className="container flex-row justify-space-between-lg justify-center align-center main-logo">
        <Link className='main-logo' to="/">
          <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>

            {/* <h1 className='mb-1 mt-1 main-logo'>Sub At<span className='icon'><FaReact/></span>mic</h1> */}
            <h1 className='mb-1 mt-1 main-logo'>Sub At<span>      <img src={logo} className="App-logo" alt="logo" />
            </span>mic</h1>
            <p className='sub-title'>An app for finding Substitute Teachers</p>
          </Animated>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link className='login-btn' to="/login">Login</Link>
              <Link className='signup-btn' to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>

    </header>
  );
};

export default Header;
