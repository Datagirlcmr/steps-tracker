import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import fetchSingle from "../actions/fetchStep";
import webimg from "../assets/welcome.png"
// import Nav from './Nav';

const Display = (props) => {
  const { store, fetchSingle, match, history } = props;

  useEffect(() => {
    fetchSingle(store.user.auth_token, match.params.id, "GET");
  }, [fetchSingle, store.user.auth_token, match.params.id]);

  const { single } = store;
  // console.log(store.single)

  return (
    
    <div>
      <div className="">
        <div className="">
            <div className="">
              <img src={`${webimg}`} alt="item" />
              <div className="basic-info">
                <div className="user-image">
                  <div
                    className="thumb"
                    style={{
                      backgroundImage: `url(${webimg})`,
                    }}
                  />
                  <div>
                    <h4>{store.user.details.details.name}</h4>
                    <div>
                      <i className="fas fa-star has-text-warning" />
                      <i className="fas fa-star has-text-warning" />
                      <i className="fas fa-star has-text-warning" />
                    </div>
                  </div>
                </div>
                <div className="price">Title</div>
              </div>
            </div>
          
          <div className="full-info">
            <div>
              <h4>About this item</h4>
              <p>Date</p>
            </div>
          </div>       
         
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchSingle,
};

const mapStateToProps = (store) => ({ store });

Display.propTypes = {
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
  addFavorite: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
