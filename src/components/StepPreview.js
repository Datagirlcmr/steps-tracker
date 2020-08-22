import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const StepPreview = ({ props }) => {
  const { title, day_recorded, steps_recorded, id } = props;
  return (
    <div>
      <Link to={`/steps/${id}`}>
        <div className="prev-text">
          <div>
            <p>{day_recorded}</p>
            <p>Age:{title}</p>
            <p>Number ot Steps Taken: {steps_recorded}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

// ItemPreview.defaultProps = {
//   title: "",
//   image: {},
//   price: 0,
//   id: 0,
//   props: {},
// };

// ItemPreview.propTypes = {
//   name: PropTypes.string,
//   image: PropTypes.shape({
//     url: PropTypes.string,
//   }),
//   id: PropTypes.number,
//   price: PropTypes.number,
//   props: PropTypes.shape({}),
// };

export default StepPreview;
