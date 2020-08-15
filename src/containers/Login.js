import React from "react";
import { connect } from 'react-redux'
import webimg from "../assets/feet.jpg";
import loginUser from "../actions/login";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const prevState = this.state;
    const newState = event.target.value;
    this.setState({ ...prevState, [event.target.name]: newState });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginUser(this.state);
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

            <button>
              Login
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginUser,
//   fetchUser,
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
