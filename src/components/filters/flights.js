import React, {PropTypes} from 'react';

class FlightFilter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleFilterFlights = this.handleFilterFlights.bind(this);
  }

  handleFilterFlights(e) {

    alert(e.target.value);

    this.props.filterFlights();
  }

  render() {
    return (
      <div className="profile-usermenu booking-filters">
        <h5>Filter Flights</h5>
        <ul className="nav flex-column list booking-filters-list">
          <li>
            <div className="checkbox">
              <label>
                <input className="i-radio" type="radio" radioGroup="flightPreference" value="recommended" onChange={this.handleFilterFlights}/>Recommended<span className="pull-right">$215</span>
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-radio" type="radio" radioGroup="flightPreference" value="cheapest" onChange={this.handleFilterFlights}/>Cheapest<span className="pull-right">$154</span>
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-radio" type="radio" radioGroup="flightPreference" value="shortest" onChange={this.handleFilterFlights}/>Shortest<span className="pull-right">$197</span>
              </label>
            </div>
          </li>
          <li>
            <h5 className="booking-filters-title">Price</h5>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" value="nonStop" onChange={this.handleFilterFlights}/>Non-stop<span className="pull-right">$215</span>
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" value="oneStop" onChange={this.handleFilterFlights}/>1 Stop<span className="pull-right">$154</span>
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" value="twoStop" onChange={this.handleFilterFlights}/>2+ Stops<span className="pull-right">$197</span>
              </label>
            </div>
          </li>
          <li>
            <h5 className="booking-filters-title">Stops
              <small>Price from</small>
            </h5>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" value="nonStop" onChange={this.handleFilterFlights}/>Non-stop<span className="pull-right">$215</span>
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" value="oneStop" onChange={this.handleFilterFlights}/>1 Stop<span className="pull-right">$154</span>
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" value="twoStop" onChange={this.handleFilterFlights}/>2+ Stops<span className="pull-right">$197</span>
              </label>
            </div>
          </li>
          <li>
            <h5 className="booking-filters-title">Airlines
              <small>Price from</small>
            </h5>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onChange={this.handleFilterFlights}/>British Airways<span className="pull-right">$215</span>
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onChange={this.handleFilterFlights}/>KLM<span className="pull-right">$154</span>
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onChange={this.handleFilterFlights}/>Indian Airways<span className="pull-right">$197</span>
              </label>
            </div>
          </li>
          <li>
            <h5 className="booking-filters-title">Departure Time
              <small>Price from</small>
            </h5>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onChange={this.handleFilterFlights}/>Morning (5:00am - 11:59am)
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onChange={this.handleFilterFlights}/>Afternoon (12:00pm - 5:59pm)
              </label>
            </div>
            <div className="checkbox">
              <label>
                <input className="i-check" type="checkbox" onChange={this.handleFilterFlights}/>Evening (6:00pm - 11:59pm)
              </label>
            </div>
          </li>
        </ul>

      </div>
    );
  }
}

FlightFilter.propTypes = {
  filterFlights: PropTypes.func
};

export default FlightFilter;
