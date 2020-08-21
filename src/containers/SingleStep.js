import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import fetchSingle from "../actions/fetchStep";

const SingleStep = (props) => {
  const { store, fetchSingle, match, history } = props;
  useEffect(() => {
    fetchSingle(store.user.auth_token, match.params.id, "GET");
  }, [fetchSingle, store.user.auth_token, match.params.id]);
    const { single } = store;
  //   const handleClick = () => {
  //     if (single.details.liked === true) {
  //       addFavorite(store.user.auth_token, single.details.item.id, 'DELETE');
  //     } else {
  //       addFavorite(store.user.auth_token, single.details.item.id, 'POST');
  //     }
  //   };
//   const handleDelete = () => {
//     fetchSingle(single.user.auth_token, match.params.id, "DELETE");
//     history.push("/steps");
//   };

  const shouldComponentRender = () => {
    if (single.details.step.steps_recorded === undefined) return false;
    return true;
  };

  return (
    <div>
      <div className="wrap-details">
        <div className="item-details shadow">
          {shouldComponentRender() === true ? (
            <div className="full-info">
              <div>
                <h4>About this item</h4>
                <p>{single.details.step.title}</p>
              </div>
              <div>
                <h4>contact</h4>
                <p>{single.details.step.steps_recorded}</p>
              </div>
              <div>
                <h4>contact</h4>
                <p>{single.details.step.day_recorded}</p>
              </div>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchSingle,
};

const mapStateToProps = (store) => ({ store });

SingleStep.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  store: PropTypes.shape({
    single: PropTypes.shape({
      pending: PropTypes.bool.isRequired,
      details: PropTypes.shape({
        liked: PropTypes.bool,
        price: PropTypes.number,
        id: PropTypes.number,
        item: PropTypes.shape({
          id: PropTypes.number,
          description: PropTypes.string,
          contact: PropTypes.string,
          price: PropTypes.number,
          name: PropTypes.string,
          image: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
    }),
    user: PropTypes.shape({
      auth_token: PropTypes.string.isRequired,
      details: PropTypes.shape({
        favorites: PropTypes.arrayOf(PropTypes.shape({})),
        details: PropTypes.shape({
          admin: PropTypes.bool,
          image: PropTypes.shape({
            url: PropTypes.string,
          }),
          name: PropTypes.string,
          email: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
  fetchSingle: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStep);
