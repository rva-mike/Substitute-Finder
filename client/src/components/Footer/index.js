import React from 'react';
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-dark p-4 text-white">
      <div className="container footer-text">
        &copy;{new Date().getFullYear()} Built By React |
        &nbsp;<FaGithub/>
      </div>
    </footer>
  );
};

export default Footer;

