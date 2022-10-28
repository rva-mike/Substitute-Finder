import React from 'react';
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-dark p-3 text-white">
      <div className="container footer-text">
        &copy;{new Date().getFullYear()} | Built with React |
        &nbsp;<a target="_blank" rel="noopener noreferrer" href='https://github.com/rva-mike/Substitute-Finder'><FaGithub className='github-icon'/></a>
      </div>
    </footer>
  );
};

export default Footer;

