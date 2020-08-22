import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchUser from '../actions/fetchUserDetails';
import Nav from './Nav';
import profileImg from '../assets/profile.jpeg';

const Profile = props => {
  const { store, fetchUser } = props;
  const data = store.user.details;

  useEffect(() => {
    fetchUser(store.user.auth_token);
  }, [fetchUser, store.user.auth_token]);

  const shouldComponentRender = () => {
    if (store.user.pending === true) return false;
    return true;
  };

  if (!shouldComponentRender()) {
    return 'Error';
  }

  return (
    <div className="container-fluid">
      <Nav />
      <div className="row profile">
        <div className="col-10 m-auto">
          <div className="profile-sidebar">
            <div className="bg-profile">
              <div className="welcome">
                <h2 className="welcome">{`${data.details.name}'s Profile`}</h2>
              </div>
              <div className="profile-userpic">
                <img
                  src={profileImg}
                  className="img-responsive"
                  alt="profile-pic"
                />
              </div>
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">
                  {data.details.name}
                </div>
                <div className="profile-usertitle-job">
                  {data.details.email}
                </div>
              </div>
            </div>
            <div className="profile-userbuttons">
              <Link to="/edit-profile">
                <button type="button" className="btn welcome">
                  Edit Profile
                </button>
              </Link>
              <Link to="/dashboard">
                <button type="button" className="btn welcome">
                  Enter Steps
                </button>
              </Link>
            </div>

            <div className="profile-usermenu welcome text-primary">
              <ul className="nav">
                <li className="pr-5">
                  Badges
                </li>
                <li className="pr-5">
                  Progress
                </li>
                <li className="pr-5">
                  StepTrack.it
                </li>
                <li>
                  <i className="glyphicon glyphicon-flag" />
                  Help
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({ store });

const mapDispatchToProps = {
  fetchUser,
};

Profile.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.shape({
      products: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    user: PropTypes.shape({
      pending: PropTypes.bool.isRequired,
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        details: PropTypes.shape({
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
