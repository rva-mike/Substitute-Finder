import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-dark p-4 text-white">
      <div className="container">
        &copy;{new Date().getFullYear()} by Lernantino
      </div>
    </footer>
  );
};

export default Footer;
