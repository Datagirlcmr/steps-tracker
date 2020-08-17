import React from 'react'
// import stimg from '../assets/feet.jpg'
import { Link } from 'react-router-dom';


const Welcome = () => (
  <div className="bg-grad" >
    <h2>Have you had a walk today?</h2>

    <h3>Login or Signup to log your steps for today </h3>
    <div className="btn-cont">
      <button type="button" className="button is-black is-outlined is-rounded"><Link to="/register">REGISTER</Link></button>
      <button type="button" className="button is-black is-outlined is-rounded"><Link to="/login">LOGIN</Link></button>

    </div>
  </div>
);

export default Welcome;
