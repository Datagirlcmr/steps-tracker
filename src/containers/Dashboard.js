import React from "react";
import webimg from "../assets/welcome.png";
import createStep from "../actions/createStep";
import { connect } from "react-redux";
import Display from "./DisplaySteps";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      day_recorded: "",
      steps_recorded: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = event.target.value;
    const prevState = this.state;
    this.setState({ ...prevState, [event.target.name]: newState });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { store, createStep, history } = this.props;
    const callBack = () => {
      this.setState({
        title: "",
        day_recorded: "",
        steps_recorded: "",
      });
      history.push("/display");
    };
    createStep(this.state, store.user.auth_token, callBack);
    // console.log(this.state.steps_recorded);
  }

  render() {
    const { title, day_recorded, steps_recorded } = this.state;
    return (
      <div className="wrapper" style={{ backgroundImage: `url(${webimg})` }}>
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
                placeholder="YOUR NAME"
                onChange={this.handleChange}
                className="form-control"
              />
              <i className="zmdi zmdi-email"></i>
            </div>

            <div className="form-wrapper">
              <input
                type="date"
                required
                name="day_recorded"
                value={day_recorded}
                onChange={this.handleChange}
                className="form-control"
              />
              <i className="zmdi zmdi-email"></i>
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
              <i className="zmdi zmdi-email"></i>
            </div>

            <button>
              Submit
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </form>
        </div>
        <Display steps={this.state.steps_recorded} name={this.state.title} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  createStep,
};

const mapStateToProps = (store) => ({ store });

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
