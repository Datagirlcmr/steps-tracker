import React from "react";
import webimg from "../assets/welcome.png";
import { Link } from "react-router-dom";

export default function Display({ steps, name }) {
  return (
    <div>
      <div className="grad-bg">
      <h3>Date: </h3>
        <img src={webimg} alt="logo" />
      </div>
      <div className="rounded">
        <p>{steps}</p>
        <p>Steps</p>
        <p>Daily Target: 10000</p>
        <p>Completed: 8%</p>
      </div>
      <h3>TrackIt
        <Link to='/steps'> Here </Link>
      </h3>
    </div>
  );
}
