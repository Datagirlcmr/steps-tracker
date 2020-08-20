import React, { useEffect } from "react";
import fetchUser from "../actions/fetchUserDetails";
import { connect } from "react-redux";

const Profile = (props) =>{
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
    alert("Oops, there has been an error");
  }

  return (
    <div>
      <div>
        <h3>Welcome: {data.details.name}</h3>
      </div>
      <div>
        <h3>Welcome: {data.details.email}</h3>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => ({ store });

const mapDispatchToProps = {
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)