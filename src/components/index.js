import React from 'react'
import stimg from '../assets/feet.jpg'
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const style = {
  backgroundColor: 'black',
  fontSize: 70,
  color: 'white',
  textAlign: 'center'

}

const Welcome = () => (
    <div className="welcome" style={style} >
      <h2>Have you had a walk today?</h2>

      <h3>Login or Signup to log your steps for today </h3>
    </div>
  );

  export default Welcome;
  