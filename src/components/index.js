import React, {useEffect} from "react";
import { Link } from "react-router-dom";
// import {LOGOUT_USER} from "../actions/index";
// import {connect} from 'react-redux';

const Welcome = (props) => {
  // const {LOGOUT_USER, store } = props

  // useEffect(() => {
  //   LOGOUT_USER()
  // }, [LOGOUT_USER])

  return (
    <div className="bg-grad">
      <h2>Have you had a walk today?</h2>

      <h3>Login or Signup to log your steps for today </h3>
      <div className="btn-cont">
        <button
          type="button"
          className="button is-black is-outlined is-rounded"
        >
          <Link to="/register">REGISTER</Link>
        </button>
        <button
          type="button"
          className="button is-black is-outlined is-rounded"
        >
          <Link to="/login">LOGIN</Link>
        </button>
        {/* <button
          type="button"
          className="button is-black is-outlined is-rounded"
          onClick={() => localStorage.clear}
        >
          LOGOUT_USER
        </button> */}
      </div>
    </div>
  );
};

// const mapStateToProps = (store) => ({store})

// const mapDispatchToProps = {
//   LOGOUT_USER,
// }

export default Welcome
