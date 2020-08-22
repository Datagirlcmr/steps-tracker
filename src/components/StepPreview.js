/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StepPreview = ({ props }) => {
  const {
    title, day_recorded, steps_recorded, id,
  } = props;
  return (
    <div>
      <Link to={`/steps/${id}`}>
        <div className="prev-text">
          <div>
            <p>{day_recorded}</p>
            <p>
              Age:
              {title}
            </p>
            <p>
              Number ot Steps Taken:
              {steps_recorded}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

StepPreview.defaultProps = {
  title: '',
  day_recorded: '',
  steps_recorded: '',
  id: 0,
  props: {},
};

StepPreview.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  day_recorded: PropTypes.string,
  steps_recorded: PropTypes.number,
  props: PropTypes.shape({}),
};

export default StepPreview;
