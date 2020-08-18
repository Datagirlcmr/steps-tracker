import React from 'react';
import webimg from '../assets/welcome.png';
import createStep from '../actions/createStep';
import {connect } from 'react-redux';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Steps as at Today',
            day_recorded: new Date().toLocaleDateString(),
            steps_recorded: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)

    }

    handleChange(event){
        const newState = event.target.value;
        const prevState = this.state
        this.setState({...prevState, [event.target.name]: newState})

    }

    handleSubmit(event){
        event.preventDefault();
        const { store, createStep, history } = this.props;
        const callBack = () => {
          this.setState({
            title: 'Steps as at Today',
            day_recorded: new Date().toLocaleDateString(),
            steps_recorded: '',
          });
          history.push('/display');
        };
        createStep(this.state, store.user.auth_token, callBack);
    }

     render() {
    const { title, day_recorded, steps_recorded} = this.state;
    return (
      <div className="wrapper" style={{ backgroundImage: `url(${webimg})` }}>
        <div className="inner">
          <div className="image-holder">
            <img src={webimg} alt="" />
          </div>
          <form onSubmit={this.handleSubmit}>
            <h3>Welcome User. How many Steps have you taken today</h3>
            <h3>Date: {day_recorded}</h3>

            <div className="form-wrapper">
              <input
                type="number"
                required
                name="steps_recorded"
                value={steps_recorded}
                placeholder="Enter The Number of Steps You Took Today"
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
      </div>
    );
  }
}

const mapDispatchToProps = {
    createStep,
  };
  
  const mapStateToProps = (store) => ({ store });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);