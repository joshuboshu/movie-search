import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Movie Finder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
