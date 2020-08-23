import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ReactStoreIndicator from 'react-score-indicator';
import PropTypes from 'prop-types';
import Nav from './Nav';
import fetchSingle from '../actions/fetchStep';

const SingleStep = props => {
  const { store, fetchSingle, match } = props;
  useEffect(() => {
    fetchSingle(store.user.auth_token, match.params.id, 'GET');
  }, [fetchSingle, store.user.auth_token, match.params.id]);
  const { single } = store;

  const shouldComponentRender = () => {
    if (single.details.step.steps_recorded === undefined) return false;
    return true;
  };

  return (
    <div>
      <Nav />
      <div className="container-fluid">
        {shouldComponentRender() === true ? (
          <div className="full-info">
            <div className="welcome text-secondary">
              <p>{single.details.step.day_recorded}</p>
            </div>
            <div>
              <ReactStoreIndicator value={single.details.step.steps_recorded} maxValue={10000} />
            </div>
            <div className="welcome text-secondary">
              <h4>Age</h4>
              <p>{single.details.step.title}</p>
            </div>
            <div className="welcome text-secondary">
              <h4>Steps Today</h4>
              <p>{single.details.step.steps_recorded}</p>
            </div>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchSingle,
};

const mapStateToProps = store => ({ store });

SingleStep.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  store: PropTypes.shape({
    single: PropTypes.shape({
      pending: PropTypes.bool.isRequired,
      details: PropTypes.shape({
        step: PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          day_recorded: PropTypes.string,
          steps_recorded: PropTypes.number,
        }),
      }),
    }),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        details: PropTypes.shape({
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  fetchSingle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStep);
