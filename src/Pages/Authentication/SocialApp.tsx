import React from 'react';
import { Link } from 'react-router-dom';
import { GmailHeading } from '../../utils/Constant';

const SocialApp = () => {
  return (
    <div className="social mt-4">
      <div className="btn-showcase">
        <Link
          className="btn btn-light"
          to="https://accounts.google.com/"
          target="_blank"
          rel="noreferrer"
        >
           Gmail
        </Link>

       
      </div>
    </div>
  );
};

export default SocialApp;
