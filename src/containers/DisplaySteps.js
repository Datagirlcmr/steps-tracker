import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReactStoreIndicator from "react-score-indicator";
import PropTypes from "prop-types";
import fetchSteps from "../actions/fetchSteps";
import StepPreview from "../components/StepPreview";
import Nav from './Nav';


const Display = (props) => {
  const { fetchSteps, store } = props;
  useEffect(() => {
    fetchSteps(store.user.auth_token);
  }, [fetchSteps, store.user.auth_token]);

  const shouldComponentRender = () => {
    if (store.steps.pending === true) return false;
    return true;
  };

  return (
    <div className="">
      <Nav />
      <div className="wrapper">
        {shouldComponentRender() === true ? (
          <div className="welcome text-secondary">
            {store.steps.steps.map((el) => (
              <div className="d-flex p-5">
                <ReactStoreIndicator
                  value={el.steps_recorded}
                  maxValue={10000}
                  key={el.id*1000}
                />
                <StepPreview key={el.id} props={el} />
              </div>
            ))}
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchSteps,
};

const mapStateToProps = (store) => ({ store });

// ItemList.propTypes = {
//   store: PropTypes.shape({
//     items: PropTypes.shape({
//       pending: PropTypes.bool,
//       products: PropTypes.arrayOf(PropTypes.shape({})),
//     }),
//     user: PropTypes.shape({
//       auth_token: PropTypes.string.isRequired,
//       details: PropTypes.shape({
//         favorites: PropTypes.arrayOf(PropTypes.shape({})),
//         details: PropTypes.shape({
//           admin: PropTypes.bool,
//           image: PropTypes.shape({}),
//           name: PropTypes.string,
//           email: PropTypes.string,
//         }),
//       }),
//     }),
//   }).isRequired,
//   fetchSteps: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Display);
