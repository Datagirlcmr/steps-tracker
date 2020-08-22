import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import webimg from '../assets/bg1.jpg';
import loginUser from '../actions/login';
import fetchUser from '../actions/fetchUserDetails';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    const { store, history, fetchUser } = this.props;
    if (store.user.auth_token !== '') {
      fetchUser(store.user.auth_token);
      history.push('/profile');
    }
  }

  handleSubmit(ev) {
    const { loginUser } = this.props;
    ev.preventDefault();
    loginUser(this.state);
    this.setState({ email: '', password: '' });
  }

  handleChange(el) {
    const newSate = el.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [el.target.name]: newSate });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="wrapper" style={{ backgroundImage: `url(${webimg})` }}>
        <div className="inner">
          <div className="image-holder">
            <img src={webimg} alt="" />
          </div>
          <form onSubmit={this.handleSubmit}>
            <h3>Sign In Form</h3>

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

            <button type="button">
              Login
              <i className="zmdi zmdi-arrow-right" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  history: {},
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
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

const mapDispatchToProps = {
  loginUser,
  fetchUser,
};

const mapStateToProps = store => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
