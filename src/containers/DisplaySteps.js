import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import Chart from 'chart.js';
import PropTypes from 'prop-types';
import fetchSteps from '../actions/fetchSteps';
import StepPreview from '../components/StepPreview';
// import Nav from './Nav';
// import Spiner from '../components/Spiner';

const Display = props => {
  const { fetchSteps, store } = props;
  useEffect(() => {
    fetchSteps(store.user.auth_token);
  }, [fetchSteps, store.user.auth_token]);

  const shouldComponentRender = () => {
    if (store.steps.pending === true) return false;
    return true;
  };

  return (
    <div>
      will be back
      {/* <canvas id="doughnut-chart" width="800" height="450"></canvas>
      {
        new Chart(document.getElementById("doughnut-chart"), {
          type: 'doughnut',
          data: {
            labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
            datasets: [
              {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [2478,5267,734,784,433]
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: 'Predicted world population (millions) in 2050'
            }
          }
      })
      } */}

      
      
      {/* <h4>Available Items</h4>
      <div className="wrap-list">
        {shouldComponentRender() === true ? (
          <div className="item-list">
            {store.steps.steps.map(el => <StepPreview key={el.id} props={el} />)}
          </div>
        ) : <div> </div> }
      </div> */}
    </div>
  );
};

const mapDispatchToProps = {
  fetchSteps,
};

const mapStateToProps = store => ({ store });

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