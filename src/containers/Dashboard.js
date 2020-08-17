import React from 'react';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            day_recorded: Date.c,
            steps_recorded: 0
        }
    }

    render() {
        return (
            <div>
                <h3>Welcome User </h3>
                <input type="number" placeholder="How many steps did you take today?" />

                <button>Submit
					<i className="zmdi zmdi-arrow-right"></i>
                </button>
            </div>

        )
        
    }
}

export default Dashboard