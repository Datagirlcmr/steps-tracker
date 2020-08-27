import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="bg-grad wrapper">
    <div className="welcome">
      <h2 className="welcome">STEPTRACK.it</h2>
      <h3 className="welcome">Help you to walk daily </h3>
    </div>
    <div className="btn-cont">
      <button
        type="button"
        className="button"
      >
        <Link to="/register" className="link">REGISTER</Link>
      </button>
      <button
        type="button"
        className="button is-black is-outlined is-rounded"
      >
        <Link to="/login" className="link">LOGIN</Link>
      </button>
    </div>
  </div>
);

export default Welcome;
