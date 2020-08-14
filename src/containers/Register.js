import React from "react";
import { Link } from "react-router-dom";
import webimg from '../assets/feet.jpg'

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

    handleChange(event) {
        const newState = event.target.value;
        const prevState = this.state;
        this.setState({ ...prevState, [event.target.name]: newState });
    }

    handleSubmit(event) {
        console.log("submitted");
    }

    render() {
        const { name, email, password, password_confirmation } = this.state;
        return (
            <div className="wrapper" style={{ backgroundImage: `url(${webimg})` }} >
                <div className="inner">
                    <div className="image-holder">
                        <img src={webimg} alt="" />
                    </div>
                    <form >
                        <h3>Registration Form</h3>

                        <div className="form-group">
                            <input type="text" required name="name" value={name} placeholder="Name" onChange={this.handleChange} className="form-control" />
                        </div>

                        <div className="form-wrapper">
                            <input type="email" required name="email" value={email} placeholder="Email Address" onChange={this.handleChange} className="form-control" />
                            <i className="zmdi zmdi-email"></i>
                        </div>

                        <div className="form-wrapper">
                            <input type="password" required name="password" value={password} placeholder="Password" onChange={this.handleChange} className="form-control" />
                            <i className="zmdi zmdi-lock"></i>
                        </div>

                        <div className="form-wrapper">
                            <input type="password" required name="password_confirmation" value={password_confirmation} placeholder="Password Confirmation" onChange={this.handleChange} className="form-control" />
                            <i className="zmdi zmdi-lock"></i>
                        </div>

                        <button>Register
						<i className="zmdi zmdi-arrow-right"></i>
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
