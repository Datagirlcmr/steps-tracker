/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT_USER } from '../actions/index';

const Nav = props => {
  const { store, logout } = props;

  const handleClick = () => {
    logout();
  };

  let path = '/profile';
  if (store.user.details !== null) {
    if (store.user.details.details !== null) {
      path = '/profile';
    }
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <Link className="navbar-brand nav" to="/display">
        StepTrack.it
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link nav" to={path}>
            Profile
          </Link>
        </li>
        <li className="nav-item" onClick={handleClick}>
          <Link className="nav-link nav" to="/">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = {
  logout: LOGOUT_USER,
};

const mapStateToProps = store => ({ store });

Nav.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.shape({
      auth_token: PropTypes.string,
    }).isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

Nav.propTypes = {
  store: PropTypes.shape({
    details: PropTypes.shape({}),
    user: PropTypes.shape({
      details: PropTypes.shape({
        details: PropTypes.shape({}),
      }),
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
