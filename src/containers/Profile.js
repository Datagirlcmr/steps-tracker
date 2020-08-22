import React, { useEffect } from "react";
import fetchUser from "../actions/fetchUserDetails";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../containers/Nav";
import profileImg from "../assets/profile.jpeg";

const Profile = (props) => {
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
    return "Error";
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
                  <i className="glyphicon glyphicon-flag"></i>
                  Help
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-profile col-12">
        <h2 className="welcome">{`${data.details.name}'s Profile`}</h2>
      </div>
      <div className="bg-profile col-12">
        <img className="inner image-fluid" src={profileImg} alt="profile-img" />
        <h3 className="text-white fsize-50 text-center">
          {data.details.name}
        </h3>
        <h3 className="text-white fsize-50 text-center">
          {data.details.email}
        </h3>
      </div>
      <div className="jumbotron d-flex justify-content-center">
        <h2 className="col-5">
          {" "}
          <Link to="/edit-profile">Edit Profile</Link>
        </h2>
        <h2 className="col-5">
        <Link to="/dashboard">Track your Steps</Link>
        </h2>
      </div> */}
    </div>
  );
};

const mapStateToProps = (store) => ({ store });

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
