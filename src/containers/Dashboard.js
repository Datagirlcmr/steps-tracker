/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bgImg from '../assets/bg1.jpg';
import webimg from '../assets/welcome.png';
import createStep from '../actions/createStep';
import Nav from './Nav';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      day_recorded: '',
      steps_recorded: '',
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
    ev.preventDefault();
    const { store, createStep, history } = this.props;
    const callBack = () => {
      this.setState({
        title: '',
        day_recorded: '',
        steps_recorded: '',
      });
      history.push('/display');
    };
    createStep(this.state, store.user.auth_token, callBack);
  }

  render() {
    const { title, day_recorded, steps_recorded } = this.state;
    return (
      <div>
        <Nav />
        <div className="wrapper" style={{ backgroundImage: `url(${bgImg})` }}>
          <div className="inner">
            <div className="image-holder">
              <img src={webimg} alt="" />
            </div>
            <form onSubmit={this.handleSubmit}>
              <h3>Welcome User</h3>

              <div className="form-wrapper">
                <input
                  type="text"
                  required
                  name="title"
                  value={title}
                  placeholder="Enter Your Weight"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <i className="zmdi zmdi-email" />
              </div>

              <div className="form-wrapper">
                <input
                  type="date"
                  required
                  name="day_recorded"
                  placeholder="Date"
                  value={day_recorded}
                  onChange={this.handleChange}
                  className="form-control"
                />
                <i className="zmdi zmdi-email" />
              </div>
              <div className="form-wrapper">
                <input
                  type="number"
                  required
                  name="steps_recorded"
                  value={steps_recorded}
                  placeholder="Enter the Number of Steps Taken"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <i className="zmdi zmdi-email" />
              </div>

              <button type="submit">
                Submit
                <i className="zmdi zmdi-arrow-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createStep,
};

const mapStateToProps = store => ({ store });

Dashboard.defaultProps = {
  history: {},
};

Dashboard.propTypes = {
  store: PropTypes.shape({
    items: PropTypes.shape({}),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        details: PropTypes.shape({
          image: PropTypes.shape({}),
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  createStep: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
