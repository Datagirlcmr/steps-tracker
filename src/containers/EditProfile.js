/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import editProfile from '../actions/editProfile';
import webimg from '../assets/bg1.jpg';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.store.user.details.details.name,
      email: this.props.store.user.details.details.email,
      password: this.props.store.user.details.details.password,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  handleSubmit(ev) {
    const path = this.props.store.user.details.details.admin === true ? '/admin' : '/profile';
    ev.preventDefault();
    const callBack = () => {
      this.props.history.push(path);
    };
    this.props.editProfile(this.state, this.props.store.user.auth_token, callBack);
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <div className="wrapper" style={{ backgroundImage: `url(${webimg})` }}>
        <div className="inner">
          <div className="image-holder">
            <img src={webimg} alt="" />
          </div>
          <form onSubmit={this.handleSubmit}>
            <h3>Edit Profile</h3>

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

            <button type="submit">
              Update
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  editProfile: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  store: PropTypes.shape({
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf(PropTypes.shape({})),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.shape({}),
          name: PropTypes.string,
          email: PropTypes.string,
          password: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

const mapStateToProps = store => ({ store });

const mapDispatchToProps = {
  editProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
