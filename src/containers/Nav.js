import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT_USER } from "../actions/index";

const Nav = (props) => {
  const { text, store, logout, pathName } = props;

  const handleClick = () => {
    logout();
  };

  let path = "/profile";
  if (store.user.details !== null) {
    if (store.user.details.details !== null) {
      path = "/profile";
    }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item welcome pl-5 mr-5 ml-5">
          <Link className="nav-item" to="/">Home</Link>
        </li>
        <li className="nav-item welcome pl-5 mr-5">
          <Link className="nav-item" to="profile">Profile</Link>
        </li>
        <li className="nav-item welcome pl-5 ml-5" onClick={handleClick}>
          <Link className="nav-item" to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = {
  logout: LOGOUT_USER,
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
