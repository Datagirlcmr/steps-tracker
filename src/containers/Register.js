/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import webimg from '../assets/bg1.jpg';
import createUser from '../actions/register';
import fetchUser from '../actions/fetchUserDetails';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps() {
    const { store, history, fetchUser } = this.props;
    if (store.user.auth_token !== '') {
      fetchUser(store.user.auth_token);
      history.push('/login');
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { createUser, store } = this.props;
    createUser(this.state);
    if (store.user.auth_token !== '') {
      this.setState({
        name: '', email: '', password: '', password_confirmation: '',
      });
    }
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  render() {
    const {
      name, email, password, password_confirmation,
    } = this.state;
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
              <i className="zmdi zmdi-email" />
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
              <i className="zmdi zmdi-lock" />
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
              <i className="zmdi zmdi-lock" />
            </div>

            <button type="button">
              Register
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
          <div>
            <p className="form-wrapper">
              {' '}
              If you already have an account , Login
              {' '}
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

Register.defaultProps = {
  history: {},
};
Register.propTypes = {
  createUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  store: PropTypes.shape({
    user: PropTypes.shape({
      auth_token: PropTypes.string,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
