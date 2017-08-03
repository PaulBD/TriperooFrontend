import React, {PropTypes} from 'react';

const FlightFilter = () => {
  return (
    <div className="profile-usermenu booking-filters">
      <h5>Filter Flights</h5>
      <ul className="nav flex-column list booking-filters-list">
        <li>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Recommended<span className="pull-right">$215</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Cheapest<span className="pull-right">$154</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Shortest<span className="pull-right">$197</span>
            </label>
          </div>
        </li>
        <li>
          <h5 className="booking-filters-title">Price</h5>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Non-stop<span className="pull-right">$215</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />1 Stop<span className="pull-right">$154</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />2+ Stops<span className="pull-right">$197</span>
            </label>
          </div>
        </li>
        <li>
          <h5 className="booking-filters-title">Stops <small>Price from</small></h5>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Non-stop<span className="pull-right">$215</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />1 Stop<span className="pull-right">$154</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />2+ Stops<span className="pull-right">$197</span>
            </label>
          </div>
        </li>
        <li>
          <h5 className="booking-filters-title">Airlines <small>Price from</small></h5>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />British Airways<span className="pull-right">$215</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />KLM<span className="pull-right">$154</span>
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Indian Airways<span className="pull-right">$197</span>
            </label>
          </div>
        </li>
        <li>
          <h5 className="booking-filters-title">Departure Time <small>Price from</small></h5>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Morning (5:00am - 11:59am)
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Afternoon (12:00pm - 5:59pm)
            </label>
          </div>
          <div className="checkbox">
            <label>
              <input className="i-check" type="checkbox" />Evening (6:00pm - 11:59pm)
            </label>
          </div>
        </li>
      </ul>

    </div>
  );
};

FlightFilter.propTypes = {
};

export default FlightFilter;
