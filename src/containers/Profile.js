import React, { useEffect } from "react";
import fetchUser from "../actions/fetchUserDetails";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    return ('Error')
  }

  return (
    <div>
      <div>
        <h3>Welcome: {data.details.name}</h3>
      </div>
      <div>
        <h3>Welcome: {data.details.email}</h3>
      </div>
      <div>
        <h3>Have you taken any Steps today? </h3>
        <Link to="/dashboard">Click Here</Link>
        <p>to keep track of your steps</p>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({ store });

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
