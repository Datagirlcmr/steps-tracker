import React from "react";
import PropTypes from 'prop-types';
import { Link, Redirect } from "react-router-dom";
import webimg from "../assets/feet.jpg";
import { connect } from "react-redux";
import createUser from "../actions/register";
import fetchUser from "../actions/fetchUserDetails";
import { loadingIcon } from "../helper/index";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state);
    const checkAuth = this.props.store.user.auth_token;
    console.log(checkAuth)
    if (checkAuth !== "") {
      this.setState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    }
    if (checkAuth) {
      alert("You have succesfully signed up")
      this.props.history.push('/login')
    }
  }


handleChange(event) {
  const newState = event.target.value;
  const prevState = this.state;
  this.setState({ ...prevState, [event.target.name]: newState });
}

render() {
  const { name, email, password, password_confirmation } = this.state;
  return (
    <div className="wrapper" style={{ backgroundImage: `url(${webimg})` }}>
      <div className="inner">
        <div className="image-holder">
          <img src={webimg} alt="" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <h3>Registration Form</h3>

          <div className="form-group">
            <input
              type="text"
              required
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <div className="form-wrapper">
            <input
              type="email"
              required
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={this.handleChange}
              className="form-control"
            />
            <i className="zmdi zmdi-email"></i>
          </div>

          <div className="form-wrapper">
            <input
              type="password"
              required
              name="password"
              value={password}
              placeholder="Password"
              onChange={this.handleChange}
              className="form-control"
            />
            <i className="zmdi zmdi-lock"></i>
          </div>

          <div className="form-wrapper">
            <input
              type="password"
              required
              name="password_confirmation"
              value={password_confirmation}
              placeholder="Password Confirmation"
              onChange={this.handleChange}
              className="form-control"
            />
            <i className="zmdi zmdi-lock"></i>
          </div>

          <button>
            Register
              <i className="zmdi zmdi-arrow-right"></i>
          </button>
        </form>
        <div>
          <p className="form-wrapper">
            {" "}
              If you already have an account , Login{" "}
            <Link to="/login">Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
  }
}



const mapDispatchToProps = {
  createUser,
  fetchUser,
};


const mapStateToProps = store => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(Register);
